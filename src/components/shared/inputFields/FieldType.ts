import { RecoilState } from "recoil"

export type FieldType = {
    name: string,
    label: string,
    placeholder: string,
    options? : [string, string, string, string?]
    formikState: RecoilState<{}>
}