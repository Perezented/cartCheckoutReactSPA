import * as yup from "yup";

const paymentFormSchema = yup.object().shape({
  cardName: yup.string().min(2).required("Valid name on card required."),
  cardNumber: yup
    .number()
    .positive()
    .integer()
    .required("16 digit card number is required"),
  expityMonth: yup
    .number()
    .positive()
    .integer()
    .min(1)
    .max(12)
    .required("Expiration month is required"),
  expityYear: yup
    .number()
    .positive()
    .integer()
    .min(2021)
    .required("Experation year is required"),
  cvCode: yup.number().positive().integer().required("CV Code is required"),
  remember: yup.string()
});

export default paymentFormSchema;
