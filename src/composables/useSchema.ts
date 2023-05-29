import * as yup from "yup";

export const RegSchema = () => {
    return yup.object({
        name: yup
            .string()
            .required(() => required()),
        age: yup
            .number()
            .min(1, () => min1())
            .required(() => required()),
        childrens: yup
            .array()
            .of(
                yup.object().shape({
                    name: yup
                        .string()
                        .required(() => required()),
                    age: yup
                        .string()
                        .min(1, () => min1())
                        .required(() => required()),
                })
            )
            .strict(),
    });
};

const required = () => "Это обязательное поле";
const number = () => "Возраст должен быть числом";
let min1 = () => "Минимальная длина пароля 1 символ";