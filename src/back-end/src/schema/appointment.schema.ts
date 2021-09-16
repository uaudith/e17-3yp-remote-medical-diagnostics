import { object, string, ref } from "yup";

/*
    scheduleId: ObjectId,
    doctor: ObjectId,
    paid: boolean,
    patientId: ObjectId,
    createdAt: Date,
    updatedAt: Date,
    */

export const createAppointmentSchema = object({
    body: object({
        name: string().required("Name is required"),
        password: string()
            .required("Password is required")
            .min(8, "password must be at least 8 characters")
            .matches(/^[a-z0-9A-Z_.-]*$/, "only latin characters are allowed"),
        passwordConfirmation: string().oneOf([ref("password"), null], "passwords must match"),
        email: string()
            .email("Must be a valid email")
            .required("Email required"),
        isAvailable: string().notRequired(),//
        license: string().required("license details are needed"),
        age: string().matches(/^[0-9]/, "must be a number").max(3, "invalid age").required(),
        gender: string()
            .matches(/M|F/, "Should be either 'M' or 'F'")
            .required("gender required"),
        mobileNo: string()
            .matches(/^[0-9]+/, "must be a number")
            .min(10, "invalid mobile number")
            .max(10, "invalid mobile number")
            .required()


    }),
});
