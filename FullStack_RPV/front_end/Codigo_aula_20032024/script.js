// const BASE_URL = 'https://randomfox.ca/floof/';
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/pikachu';

const trocaImg = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        // return json.image;
        return json.sprites.front_default;
    }catch(e) {
        console.log(e.message);
    }
};

const loadImg = async () => {
    const img = document.getElementsByTagName('img')[0];
    img.src = await trocaImg();
}

loadImg();

const btn = document.getElementById('trocaImg');
btn.addEventListener('click',loadImg);