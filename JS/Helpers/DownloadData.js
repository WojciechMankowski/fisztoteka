
const DownloadDataFromForm = (word) => {
    const url = `http://127.0.0.1:8000//translated/${word}`
    fetch(url)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => console.error(error))
}
export const dowloadDataFromInput = (word) => {
    DownloadDataFromForm(word)  
 }