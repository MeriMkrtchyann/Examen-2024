import {  ref, set } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';
import {database} from "./fairbase"

export default async function writeUserData({name , email , password}) {
    try{
        const db = database;
        await set(ref(db, 'users/' + uuidv4()), {
            name,
            email, 
            password
        });
    }catch(e){
        console.error(e.message);
    }
  
}