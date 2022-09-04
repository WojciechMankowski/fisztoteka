let name_set: string[] = [];
const sets: string[] = [];
type sets = {
  name_set: string;
  id: number;
  set_flascards: number;
  name_user: string;
};

export const dowlandNameSet = () => {
  const url = `http://127.0.0.1:8000/wojtek/sets`;
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      for (let i = 0; i != res.lenght; i++) {
       
        let obj = res[i];
        console.log(obj != undefined)
        if (obj != undefined) {
          let nameset;
          // nameset = obj.name_set;
          // if (name_set.indexOf(nameset) == -1) {
          //   name_set.push(nameset);
          // }
        }
      }
    });
  return name_set;
};
