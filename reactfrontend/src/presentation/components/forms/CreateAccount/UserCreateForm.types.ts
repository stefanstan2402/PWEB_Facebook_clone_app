import { UserRoleEnum } from "@infrastructure/apis/client";
import { FormController } from "../FormController"
import {
    UseFormHandleSubmit,
    UseFormRegister,
    FieldErrorsImpl,
    DeepRequired,
    UseFormWatch
} from "react-hook-form";
import { SelectChangeEvent } from "@mui/material";

export type UserCreateFormModel = {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    role: UserRoleEnum;
};

export type UserAddFormState = {
    errors: FieldErrorsImpl<DeepRequired<UserCreateFormModel>>;
};

export type UserAddFormActions = {
    register: UseFormRegister<UserCreateFormModel>;
    watch: UseFormWatch<UserCreateFormModel>;
    handleSubmit: UseFormHandleSubmit<UserCreateFormModel>;
    submit: (body: UserCreateFormModel) => void;
    selectRole: (value: SelectChangeEvent<UserRoleEnum>) => void;
};
export type UserAddFormComputed = {
    defaultValues: UserCreateFormModel,
    isSubmitting: boolean
};

export type UserAddFormController = FormController<UserAddFormState, UserAddFormActions, UserAddFormComputed>;