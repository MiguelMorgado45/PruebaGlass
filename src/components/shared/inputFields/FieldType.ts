import { RecoilState } from "recoil"

export type FieldType = {
    name: string,
    label: string,
    placeholder: string,
<<<<<<< HEAD
    options? : [string, string, string, string?]
=======
    options? : [string,string, string],
>>>>>>> operadores-89
    formikState: RecoilState<{}>
}