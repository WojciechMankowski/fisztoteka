import { data_env } from "../env.js";

export const connect_api_unsplash = () => {
    const url = `https://api.unsplash.com/search/photos?query=cat/?client_id=${data_env.ACCES_KEY}`
    // const url = `https://api.unsplash.com/photos/?client_id=${data_env.ACCES_KEY}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}