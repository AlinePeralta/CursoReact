import { object, string, mixed } from 'yup';

let userShema = object({
    fullname: string().required("Campo requerido"),
    phone: mixed().required("Campo requerido"),
    email: string().email("Email incorrecto").required("Campo requerido"),
    confirmEmail: string()
        .email("Email incorrecto")
        .required("Campo requerido")
        .oneOf([yup.ref('email'), null], 'Los correos electrónicos no coinciden') 
});

const validateForm = async (dataForm) => {
    try {
        await userShema.validate(dataForm, { abortEarly: false }); 
        return { status: "success" };
    } catch (error) {
        return { status: "error", message: error.errors.join(", ") }; 
    }
};

export default validateForm;
