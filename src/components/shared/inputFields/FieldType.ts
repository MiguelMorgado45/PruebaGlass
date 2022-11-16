import { RecoilState } from "recoil"

export type FieldType = {
    name: string,
    label: string,
    placeholder: string,
    formikState: RecoilState<{}>
}