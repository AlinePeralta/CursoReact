import { object, string, mixed } from 'yup';

let userShema = object ({
    fullname: string().required ("Campo requerido"),
    phone : mixed().required("Campo requerido"),
    emaiil: string ().email("Email incorrecto")
})

const validateForm = async(dataForm) => {

    try{

        await userShema.validate(dataForm)
        return {status:"success"}

    } catch (error){
        return {status: "error, menssage: error.message"}
}
}
    
export default validateForm
