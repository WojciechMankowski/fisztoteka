import { LabelProps } from '../../Types/props';
import { Input } from './Input';
export const Label = (props: LabelProps) => {
    const class_name = `${props.class}_label`
	return (
		<label className={class_name}>
			{props.text}
			<Input class={props.class} type={props.type} />
		</label>
	);
};
