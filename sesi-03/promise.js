import fetch from "node-fetch";

const fetchApi = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/ability/?limit=5");

    let data = await response.json();

    console.log(data);
}

fetchApi();

const setTimeoutPromise = (duration) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    });
};

setTimeoutPromise(1000).then(() => console.log("tick"));
