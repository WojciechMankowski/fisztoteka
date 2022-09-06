let name_set: string[] = [];

export const dowlandNameSet = () => {
	const url = `http://127.0.0.1:8000/wojtek/sets`;
	fetch(url)
		.then((res) => res.json())
		.then((res) => {
			for (let i = 0; i < res.length; i++) {
				console.log(res[i].name_set);
				if (name_set.indexOf(res[i].name_set) === -1) {
					name_set.push(res[i].name_set);
				}
			}
		});

	return name_set;
};
