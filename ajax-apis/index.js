// JSON is a string format that looks like JS objects. 
// We use JSON.parse() to turn it into an object we can use.

// Using The Fetch API (Modern Standard)
const loadStarWarsPeople = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/1/");
        const data = await res.json();
        console.log("FETCH RESPONSE:", data.name);
    } catch (e) {
        console.log("ERROR!", e);
    }
};

// Axios is a library that makes requests even easier. 
// It automatically parses JSON for you
const getBitcoinPrice = async () => {
    try {
        const res = await axios.get("https://api.cryptonator.com/api/ticker/btc-usd");
        console.log("AXIOS BTC PRICE:", res.data.ticker.price);
    } catch (e) {
        console.log("API ADRESS NOT FOUND", e);
    }
};

// Some APIs require specific headers (like 'Accept: application/json')
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        console.log("JOKE:", res.data.joke);
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE :(";
    }
};

// Combining DOM and APIs to build a search tool
const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } };
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    displayImages(res.data);
    form.elements.query.value = '';
});

const displayImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
};