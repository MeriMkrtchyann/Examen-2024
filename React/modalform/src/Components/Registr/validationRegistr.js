import * as Yup from "yup"

export const validatorRegistr = Yup.object({
    name: Yup.string().min(3).required("Please enter name"),
    email: Yup.string().email("Please enter valid email").required("Please enter email "),
    password: Yup.string().min(5).required("Please enter password"),
    cpapassword: Yup.string().oneOf([Yup.ref("password")], "Passwords do not match").required("Please enter confirm password"),
})