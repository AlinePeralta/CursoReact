import { object, string, mixed, ref } from 'yup';

let userSchema = object({
  fullname: string().required("Campo requerido"),
  phone: mixed().required("Campo requerido"),
  email: string().email("Email incorrecto").required("Campo requerido"),
  confirmEmail: string()
    .oneOf([ref('email')], 'Los correos no coinciden')
    .required('Campo requerido')
});

const validateForm = async (dataForm) => {
  try {
    await userSchema.validate(dataForm, { abortEarly: false });
    return { status: "success" };
  } catch (error) {
    return { status: "error", message: error.errors.join(', ') };
  }
};

export default validateForm;
