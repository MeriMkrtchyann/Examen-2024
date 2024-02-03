import { useSelector, useDispatch } from "react-redux"
import {openOrCloze} from "../../Redax/Slices/modalButtonSlice"
import RegistrForm from "../Registr/RegistrForm"
import "./ButtonStyle.css" 

export default function Button(){

    const buttonValue = useSelector((store) => store.modalButton.value)

    const dispatch = useDispatch()

    const modalButton = () => {
        dispatch(openOrCloze())
    }

    return(
        <>
            <div className="modalButton">
                <button onClick={modalButton} >Registration</button>
            </div>
            {buttonValue && <RegistrForm/>}
        </>
    )
}