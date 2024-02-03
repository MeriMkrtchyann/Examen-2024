import { useSelector, useDispatch } from "react-redux"
import {openOrCloze} from "../Redax/Slices/modalButtonSlice"
 
export default function Button(){

    const buttonValue = useSelector((store) => store.modalButton.value)

    const dispatch = useDispatch()

    const modalButton = () => {
        dispatch(openOrCloze())
    }

    return(
        <>
            <button onClick={modalButton}>Registration</button>
            {buttonValue && <div>barevv</div>}
        </>
    )
}