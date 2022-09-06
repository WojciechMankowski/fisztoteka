import axios from 'axios';
let name_set: string[] = [];
type Response = {
	name_user: string;name_set: string; set_flashcards: number; id: number;
}
export const dowlandNameSet = () => {
	const url = `http://127.0.0.1:8000/wojtek/sets`;
	// axios(url)
	// .then(response => {
	// 	const Response: Response[] = response.data;
	// 	const data = Response.map((item) => {
	// 		return item.name_set;
	// 	});
	// })
	fetch(url)
		.then((res) => res.json())
		.then((res) => {
			for (let i = 0; i < res.length; i++) {
				if (name_set.indexOf(res[i].name_set) === -1) {
					name_set.push(res[i].name_set);
				}
			}
		});
	
    return name_set;
	
};
