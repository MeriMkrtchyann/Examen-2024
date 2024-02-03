class Singltone{

    static instance = null
    #data = null

    canstructor(){
        if (!Singltone.instance){
            Singltone.instance = this
        }
        return Singltone.instance
    }

    async #fetchData(){
        const promise = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await promise.json()
        this.#data = data
    }

    async getData(){
        await this.#fetchData()
        console.log(JSON.stringify(this.#data))
    }
}

let obj = new Singltone()
obj.getData()
