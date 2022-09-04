export const creatOptions = (
  namesets: string[],
  elementSelect: HTMLSelectElement
) => {
    console.log('select');
  const lengtNameSet = namesets.length;
  let length = elementSelect.options.length - 1;
  if (elementSelect.options.length == 1) {
    let index = 0;
    while (lengtNameSet != index) {
      elementSelect.options[length + 1] = new Option(
        namesets[index],
        namesets[index]
      );
      index++;
      length++;
    }
  }
};
