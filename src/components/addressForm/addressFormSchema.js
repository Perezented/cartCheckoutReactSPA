import * as yup from "yup";

const addressFormSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email(),
  username: yup.string().required("Username is required"),
  address: yup.string().required("Address is required"),
  country: yup.string().required("Country is required"),
  state: yup.string().required("State is required"),
  zip: yup.string().required("Zip code is required"),
  address2: yup.string(),
  "same-address": yup.string(),
  "save-info": yup.string()
});

export default addressFormSchema;
