"use strict"

let allCountries = `https://restcountries.eu/rest/v2/all`;
let country;
const min = 0;
const max = 250;
let title = {
    // elem: [0, 1, 2],
    // name: ["Country Name", "Calling Code"],
    // id: ["countyName", "callingCode"],
    // apititle: ["name", "callingCode"],

    info: [{
        name: 'Country Name',
        apititle: 'name'
    }, {
        name: 'Sub Region',
        apititle: 'subregion'
    }, {
        name: 'Region',
        apititle: 'region'
    }],

    showOutput: function (random) {
        countryName.innerHTML = `${title.info[0].name} : ${country[random].name}`;
        subRegion.innerHTML = `${title.info[1].name} : ${country[random].subregion}`;
        region.innerHTML = `${title.info[2].name} : ${country[random].region}`;



        capitalName.innerHTML = `
                $ {
                    title.info[0].name
                }: $ {
                    country[random].name
                }
                `;
        region.innerHTML = `
                $ {
                    title.info[0].name
                }: $ {
                    country[random].name
                }
                `;
        population.innerHTML = `
                $ {
                    title.info[0].name
                }: $ {
                    country[random].name
                }
                `;
    }
}
// function showCountry() {
//     fetch(allCountries)
//         .then(res => res.json())
//         .then(data => console.log(data));
// }


async function getCountry() {
    let response = await fetch(allCountries);
    let countryapi = await response.json()
    return countryapi;
}
getCountry()
    .then(countryapi => country = countryapi);

async function declareID() {
    let countryName = document.getElementById("countryName");
    let subRegion = document.getElementById("subRegion");
    let capitalName = document.getElementById("capitalName");
    let region = document.getElementById("region");
    let population = document.getElementById("population");
    let location = document.getElementById("location");

}

function randomCountry() {
    var random =
        Math.floor(Math.random() * (+max - +min));
    console.log(country);
    console.log(country[random].name);
    title.showOutput(random);
    var elmnt = document.getElementById("outputScreen");
    elmnt.scrollIntoView({
        behavior: 'smooth'
    });
}