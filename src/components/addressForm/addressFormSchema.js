import * as yup from "yup";

const addressFormSchema = yup.object().shape({
  firstName: yup.string().min(2).required("Valid first name is required."),
  lastName: yup.string().min(2).required("Valid last name is required."),
  email: yup
    .string()
    .email("Please enter a valid email address for shipping updates."),
  username: yup.string().min(2).required("Your username is required."),
  address: yup.string().min(2).required("Please enter your shipping address."),
  country: yup.string().required("Please select a valid country."),
  state: yup.string().required("Please provide a valid state."),
  zip: yup.string().required("Zip code required."),
  address2: yup.string(),
  "same-address": yup.string(),
  "save-info": yup.string()
});

export default addressFormSchema;
