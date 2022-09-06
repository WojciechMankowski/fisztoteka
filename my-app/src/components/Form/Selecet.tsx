import { creatOptions } from '../../Helpers/creatOptions';
import Select, {ActionMeta} from 'react-select';

type select_props = { values: string[] };
// SelectCategories: Function
type Option = {
	value: string;
	label: string;
};
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
		<div className='div_select' >
			<select className="select_props" onFocus={creat_select}></select>
		</div>
	);
};

export default Select_and_options;
