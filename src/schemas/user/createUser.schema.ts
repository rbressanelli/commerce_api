import * as yup from "yup";

export const createUserSchema = yup.object().shape({
    name: yup.string().required(),
    surname: yup.string().required(),
    username: yup.string().required(),
    password: yup.string().required().min(6),
    email: yup.string().email().required(),    
})
