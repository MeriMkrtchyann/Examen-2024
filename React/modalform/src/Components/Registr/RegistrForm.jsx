import React from 'react';
import { Formik, Form , Field } from 'formik';
import { validatorRegistr } from "./validationRegistr"
import writeUserData from "../../FireBase/SetData"
import "./RegistrForm.css"

const initialValues = {
    name: "",
    email: "",
    password: "",
    cpapassword: "",
}

export default function RegistrForm(){

    const addUser = async (values, resetForm) => {
        try{
            await writeUserData(values)
            resetForm({ values: initialValues })

        }catch(err){
            console.error(err)
        }  
    }
    
    return (
        <div className="form">
            <Formik
                initialValues={initialValues} 
                validationSchema = {validatorRegistr}
                onSubmit={(values, { resetForm }) => addUser(values , resetForm)}
            >
                {({errors}) => (
                    <Form>
                    <div className="conteyner">
                        <label>Name</label>
                        <br/>
                        <Field type="text" name="name"></Field>
                        <br/>
                        {errors.name && <small style={{color : "red"}}>{errors.name}</small>}
                        <br/>
                        <label>email</label>
                        <br/>
                        <Field type="email" name="email"></Field>
                        <br/>
                        {errors.email && <small style={{color : "red"}}>{errors.email}</small>}
                        <br/>
                        <label>password</label>
                        <br/>
                        <Field type="password" name="password"></Field>
                        <br/>
                        {errors.password && <small style={{color : "red"}}>{errors.password}</small>}
                        <br/>
                        <label>cpapassword</label>
                        <br/>
                        <Field type="password" name="cpapassword"></Field>
                        <br/>
                        {errors.cpapassword && <small style={{color : "red"}}>{errors.cpapassword}</small>}
                        <br/>
                        <button type="submit" >Submit</button>
                    </div>
                        </Form>
                )} 
            </Formik>
        </div>
    )
}




