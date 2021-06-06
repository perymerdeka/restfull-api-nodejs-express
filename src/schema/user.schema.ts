import { object, string, ref } from "yup";

export const createUserSchema: object = object({
    body: object({
        name: string().required("Name is Required"),
        password: string()
            .required("Password is Required")
            .min(6, "password to short")
            .matches(/^[a-zA-Z0-9]*$/, "Password to Short"),
        passwordConfirmation: string().oneOf(
            [ref("password"), null],
            "password must Match"
        ),
        email: string()
            .email("Must Valid Email")
            .required("Email Required")
    }),
});