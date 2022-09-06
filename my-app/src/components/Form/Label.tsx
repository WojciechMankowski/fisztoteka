import {LabelProps} from '../../Types/props'
import { Input } from './Input'
export const Label = (props: LabelProps) => {
    return <label >{props.text}
    <Input class={props.class} type={props.type} />
    </label>
}