import { RecoilState } from "recoil"

export type FieldType = {
    name: string,
    label: string,
    placeholder: string,
    options? : string[]
    formikState: RecoilState<{}>
}