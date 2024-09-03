//getting random pokemon link generator

const pokemonUrl = "https://pokeapi.co/api/v2/pokemon"
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(1000);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
let randomGen = `${pokemonUrl}/${getRandomInt()}/`;
console.log(randomGen);

const getPokemonRandom = async () => {
    const response = await axios.get(randomGen)
    console.log(response)
    
    let randomPokemonImg = response.data.sprites.front_default
    let randomPokemonName = response.data.name
    console.log(randomPokemonImg);
    
    let teamCardImg = document.querySelector(".team__card-img")
    let teamCardName = document.querySelector(".team__name")

    teamCardImg.addEventListener('click', (e) => {
        teamCardImg.src = randomPokemonImg;
    })
    teamCardName.addEventListener('click', (e) => {
        teamCardName.textContent = randomPokemonName;
    })
}
getPokemonRandom();



const pokemonUrl2 = "https://pokeapi.co/api/v2/pokemon"
function getRandomInt2(min, max) {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(1000);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
let randomGen2 = `${pokemonUrl2}/${getRandomInt2()}/`;
console.log(randomGen2);

const getPokemonRandom2 = async () => {
    const response = await axios.get(randomGen2)
    console.log(response)
    
    let randomPokemonImg = response.data.sprites.front_default
    let randomPokemonName = response.data.name
    console.log(randomPokemonImg);
    
    let teamCardImg = document.querySelector(".team__card-img--2")
    let teamCardName = document.querySelector(".team__name--2")

    teamCardImg.addEventListener('click', (e) => {
        teamCardImg.src = randomPokemonImg;
    })
    teamCardName.addEventListener('click', (e) => {
        teamCardName.textContent = randomPokemonName;
    })
}
getPokemonRandom2();



const pokemonUrl3 = "https://pokeapi.co/api/v2/pokemon"
function getRandomInt3(min, max) {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(1000);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
let randomGen3 = `${pokemonUrl3}/${getRandomInt3()}/`;
console.log(randomGen3);

const getPokemonRandom3 = async () => {
    const response = await axios.get(randomGen3)
    console.log(response)
    
    let randomPokemonImg = response.data.sprites.front_default
    let randomPokemonName = response.data.name
    console.log(randomPokemonImg);

    let teamCardImg = document.querySelector(".team__card-img--3")
    let teamCardName = document.querySelector(".team__name--3")

    teamCardImg.addEventListener('click', (e) => {
        teamCardImg.src = randomPokemonImg;
    })
    teamCardName.addEventListener('click', (e) => {
        teamCardName.textContent = randomPokemonName;
    })
}
getPokemonRandom3();



const pokemonUrl4 = "https://pokeapi.co/api/v2/pokemon"
function getRandomInt4(min, max) {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(1000);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
let randomGen4 = `${pokemonUrl4}/${getRandomInt4()}/`;
console.log(randomGen4);

const getPokemonRandom4 = async () => {
    const response = await axios.get(randomGen4)
    console.log(response)
    
    let randomPokemonImg = response.data.sprites.front_default
    let randomPokemonName = response.data.name
    console.log(randomPokemonImg);
    
    let teamCardImg = document.querySelector(".team__card-img--4")
    let teamCardName = document.querySelector(".team__name--4")

    teamCardImg.addEventListener('click', (e) => {
        teamCardImg.src = randomPokemonImg;
    })
    teamCardName.addEventListener('click', (e) => {
        teamCardName.textContent = randomPokemonName;
    })
}
getPokemonRandom4();



const pokemonUrl5 = "https://pokeapi.co/api/v2/pokemon"
function getRandomInt5(min, max) {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(1000);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
let randomGen5 = `${pokemonUrl5}/${getRandomInt5()}/`;
console.log(randomGen5);

const getPokemonRandom5 = async () => {
    const response = await axios.get(randomGen5)
    console.log(response)
    
    let randomPokemonImg = response.data.sprites.front_default
    let randomPokemonName = response.data.name
    console.log(randomPokemonImg);
    
    let teamCardImg = document.querySelector(".team__card-img--5")
    let teamCardName = document.querySelector(".team__name--5")

    teamCardImg.addEventListener('click', (e) => {
        teamCardImg.src = randomPokemonImg;
    })
    teamCardName.addEventListener('click', (e) => {
        teamCardName.textContent = randomPokemonName;
    })
}
getPokemonRandom5();



const pokemonUrl6 = "https://pokeapi.co/api/v2/pokemon"
function getRandomInt6(min, max) {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(1000);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
let randomGen6 = `${pokemonUrl6}/${getRandomInt6()}/`;
console.log(randomGen6);

const getPokemonRandom6 = async () => {
    const response = await axios.get(randomGen6)
    console.log(response)
    
    let randomPokemonImg = response.data.sprites.front_default
    let randomPokemonName = response.data.name
    console.log(randomPokemonImg);
    
    let teamCardImg = document.querySelector(".team__card-img--6")
    let teamCardName = document.querySelector(".team__name--6")

    teamCardImg.addEventListener('click', (e) => {
        teamCardImg.src = randomPokemonImg;
    })
    teamCardName.addEventListener('click', (e) => {
        teamCardName.textContent = randomPokemonName;
    })
}
getPokemonRandom6();



// TEAM B





const pokemonUrl7 = "https://pokeapi.co/api/v2/pokemon"
function getRandomInt7(min, max) {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(1000);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
let randomGen7 = `${pokemonUrl7}/${getRandomInt7()}/`;
console.log(randomGen7);

const getPokemonRandom7 = async () => {
    const response = await axios.get(randomGen7)
    console.log(response)
    
    let randomPokemonImg = response.data.sprites.front_default
    let randomPokemonName = response.data.name
    console.log(randomPokemonImg);
    
    let teamCardImg = document.querySelector(".team__card-img--7")
    let teamCardName = document.querySelector(".team__name--7")

    teamCardImg.addEventListener('click', (e) => {
        teamCardImg.src = randomPokemonImg;
    })
    teamCardName.addEventListener('click', (e) => {
        teamCardName.textContent = randomPokemonName;
    })
}
getPokemonRandom7();

const pokemonUrl8 = "https://pokeapi.co/api/v2/pokemon"
function getRandomInt8(min, max) {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(1000);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
let randomGen8 = `${pokemonUrl8}/${getRandomInt8()}/`;
console.log(randomGen8);

const getPokemonRandom8 = async () => {
    const response = await axios.get(randomGen8)
    console.log(response)
    
    let randomPokemonImg = response.data.sprites.front_default
    let randomPokemonName = response.data.name
    console.log(randomPokemonImg);
    
    let teamCardImg = document.querySelector(".team__card-img--8")
    let teamCardName = document.querySelector(".team__name--8")

    teamCardImg.addEventListener('click', (e) => {
        teamCardImg.src = randomPokemonImg;
    })
    teamCardName.addEventListener('click', (e) => {
        teamCardName.textContent = randomPokemonName;
    })
}
getPokemonRandom8();

const pokemonUrl9 = "https://pokeapi.co/api/v2/pokemon"
function getRandomInt9(min, max) {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(1000);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
let randomGen9 = `${pokemonUrl9}/${getRandomInt9()}/`;
console.log(randomGen9);

const getPokemonRandom9 = async () => {
    const response = await axios.get(randomGen9)
    console.log(response)
    
    let randomPokemonImg = response.data.sprites.front_default
    let randomPokemonName = response.data.name
    console.log(randomPokemonImg);
    
    let teamCardImg = document.querySelector(".team__card-img--9")
    let teamCardName = document.querySelector(".team__name--9")

    teamCardImg.addEventListener('click', (e) => {
        teamCardImg.src = randomPokemonImg;
    })
    teamCardName.addEventListener('click', (e) => {
        teamCardName.textContent = randomPokemonName;
    })
}
getPokemonRandom9();

const pokemonUrl10 = "https://pokeapi.co/api/v2/pokemon"
function getRandomInt10(min, max) {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(1000);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
let randomGen10 = `${pokemonUrl10}/${getRandomInt10()}/`;
console.log(randomGen10);

const getPokemonRandom10 = async () => {
    const response = await axios.get(randomGen10)
    console.log(response)
    
    let randomPokemonImg = response.data.sprites.front_default
    let randomPokemonName = response.data.name
    console.log(randomPokemonImg);
    
    let teamCardImg = document.querySelector(".team__card-img--10")
    let teamCardName = document.querySelector(".team__name--10")

    teamCardImg.addEventListener('click', (e) => {
        teamCardImg.src = randomPokemonImg;
    })
    teamCardName.addEventListener('click', (e) => {
        teamCardName.textContent = randomPokemonName;
    })
}
getPokemonRandom10();

const pokemonUrl11 = "https://pokeapi.co/api/v2/pokemon"
function getRandomInt11(min, max) {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(1000);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
let randomGen11 = `${pokemonUrl11}/${getRandomInt11()}/`;
console.log(randomGen11);

const getPokemonRandom11 = async () => {
    const response = await axios.get(randomGen11)
    console.log(response)
    
    let randomPokemonImg = response.data.sprites.front_default
    let randomPokemonName = response.data.name
    console.log(randomPokemonImg);
    
    let teamCardImg = document.querySelector(".team__card-img--11")
    let teamCardName = document.querySelector(".team__name--11")

    teamCardImg.addEventListener('click', (e) => {
        teamCardImg.src = randomPokemonImg;
    })
    teamCardName.addEventListener('click', (e) => {
        teamCardName.textContent = randomPokemonName;
    })
}
getPokemonRandom11();

const pokemonUrl12 = "https://pokeapi.co/api/v2/pokemon"
function getRandomInt12(min, max) {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(1000);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
let randomGen12 = `${pokemonUrl12}/${getRandomInt12()}/`;
console.log(randomGen12);

const getPokemonRandom12 = async () => {
    const response = await axios.get(randomGen12)
    console.log(response)
    
    let randomPokemonImg = response.data.sprites.front_default
    let randomPokemonName = response.data.name
    let randomPokemonCry = response.data.cries
    
    let teamCardImg = document.querySelector(".team__card-img--12")
    let teamCardName = document.querySelector(".team__name--12")

    teamCardImg.addEventListener('click', (e) => {
        teamCardImg.src = randomPokemonImg;
    })
    teamCardName.addEventListener('click', (e) => {
        teamCardName.textContent = randomPokemonName;
    })
}
getPokemonRandom12();
