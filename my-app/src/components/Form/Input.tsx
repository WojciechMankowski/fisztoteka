import { InputProps } from "../../Types/props"
export const Input = (props: InputProps) => {
    return <input className="{props.class}" type={props.type}/>
}