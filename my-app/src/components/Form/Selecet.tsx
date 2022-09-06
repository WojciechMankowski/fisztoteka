import { creatOptions } from '../../Helpers/creatOptions';
import { select_props } from '../../Types/props';

const Select_and_options = ({ values }: select_props) => {
	const options = creatOptions(values);
	const creat_select = () => {
		const select = document.querySelector('.select_props')
		options.forEach(element => {
			const opt = document.createElement('option')
			opt.value = element.value
			opt.innerText = element.label
			select?.appendChild(opt)
		})
	}
	return (
			<select className="select_props" onFocus={creat_select}></select>
	);
};

export default Select_and_options;
