Array.prototype.groupby = function(value){
    const obj = {}
    for (let i = 0 ; i < this.length ; i++){
        if (Object.keys(obj).includes(`${this[i][value]}`)){
            obj[this[i][value]] = [obj[this[i][value]] , this[i]]
        }else {
            obj[this[i][value]] = [this[i]]
        }
    }
    return obj
}

class Singltone{
    static instance = null
    #data = null

    constructor() {
        if (Singltone.instance) {
            throw new Error("")
        } else {
            Singltone.instance = this
        }
    }

    static getInstance(){
        if (!Singltone.instance){
            Singltone.instance = new Singltone()
        }
        return Singltone.instance
    }

    async #fetchData(){
        try{
            const promise = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await promise.json()
            this.#data = data
        }catch(err){
            console.error(err.message)
        }   
    }

    async groupData(value) {
        if (!this.#data){
           await this.#fetchData()
           const newData = await this.#data.groupby(value)
           return newData
        }
    }
}

let obj1 = new Singltone()
let obj2 = Singltone.getInstance()

async function foo (){
   let a = await obj1.groupData("id")
   console.log(JSON.stringify(a))
}
foo(obj1)

