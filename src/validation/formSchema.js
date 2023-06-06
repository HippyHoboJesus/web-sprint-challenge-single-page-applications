import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .min(2, 'name must be at least 2 characters'),
    size: yup
    .string()
    .trim(),
    pepperoni: yup
    .string()
    .trim(),
    sausage: yup
    .string()
    .trim(), 
    olives: yup
    .string()
    .trim(),
    mushrooms: yup
    .string()
    .trim(),
    special: yup
    .string()
    .trim()
})

export default formSchema