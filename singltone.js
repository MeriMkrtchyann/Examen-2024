// class Singltone{

//     static instance = null
//     #data = null

//     canstructor(){
//         if (!Singltone.instance){
//             Singltone.instance = this
//         }
//         return Singltone.instance
//     }

//     async #fetchData(){
//         try{
//             const promise = await fetch("https://jsonplaceholder.typicode.com/posts")
//             const data = await promise.json()
//             this.#data = data
//             console.log(this.#data)
//         }catch(err){
//             console.error(err.message)
//         }   
//     }

//     async getData(){
//        if (!this.#data){
//             await this.#fetchData()
//             return this.#data
//        }
//     }
// }

Array.prototype.groupby = function(callBack){
    const obj = {}
    for (let i = 0 ; i < this.length ; i++){
        if (Object.keys(obj).includes(`${this[i].id}`)){
            obj[this[i].id] = [obj[this[i].id] , this[i]]
        }else {
            obj[this[i].id] = [this[i]]
        }
    }
    return obj
}

const a  = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    }
]

console.log(JSON.stringify(a.groupby()))



// let obj = new Singltone()

// async function getMyData(){
//     return await obj.getData()
// }

// let myData = getMyData()


