type Options = {
  value: string; label: string;
}
export const creatOptions = (values: string[]) => {
  let options: Options[] = []
  for (let i = 0; i < values.length; i++) {
    options.push({ value: values[i], label: values[i] })
  }
  return options
};
