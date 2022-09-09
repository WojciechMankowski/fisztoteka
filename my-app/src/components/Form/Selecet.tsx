import { creatOptions } from '../../Helpers/creatOptions';
import { select_props } from '../../Types/props';

const Select_and_options = ({ values, class_name }: select_props) => {
	const options = creatOptions(values);
	const creat_select = () => {
		// console.log('select')
		const select = document.querySelector(`.${class_name}`)
		options.forEach(element => {
			const opt = document.createElement('option')
			opt.value = element.value
			opt.innerText = element.label
			select?.appendChild(opt)
		})
	}
	return (
		<label >
			Wybór zestawu:
			<select className={class_name} onFocus={creat_select}>
				<option value="wybór">
				Wybierz zestaw
				</option>
				</select></label>
	);
};

export default Select_and_options;
