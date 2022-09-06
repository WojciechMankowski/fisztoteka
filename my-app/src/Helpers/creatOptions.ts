type Options = {
  value: string; label: string;
}
export const creatOptions = (values: string[]) => {
  let options: Options[] = []
  options.push(
    {value: "wybór", label: "Wybierz zestaw"}
  )
  for (let i = 0; i < values.length; i++) {
    options.push({ value: values[i], label: values[i] })
  }
  return options
};
