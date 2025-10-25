const countries = csv.split(',');
console.log(countries);

const countriesString = countries.join('-');
console.log(countriesString);

console.log(Array.isArray(csv));
console.log(Array.isArray(countries));

countries.sort();
console.log(countries);

countries.reverse();
console.log(countries);

countries.shift();
console.log(countries);

countries.pop();
console.log(countries);

countries.unshift('Spain', 'Portugal');
console.log(countries);

console.log(countries.includes('Germany'));

console.log(countries.indexOf('Germany'));

const extractedCountries = countries.splice(2, 3);
console.log(extractedCountries);

console.log('---------------------');

for (let i = 0; i < cities.length; i++) {
    if (cities[i].continent === "NA") {
        console.log(cities[i].city);
    }
}

console.log('---------------------');

for (let i = 0; i < galleries.length; i++) {
    if (galleries[i].location.country === "USA") {
        console.log(galleries[i].name);
    }
}

console.log('---------------------');

const colors = JSON.parse(colorsAsString);

for (let i = 0; i < colors.length; i++) {
    if (colors[i].luminance < 75) {
        console.log(colors[i].name);
    }
}

console.log('---------------------');

for (let i = 0; i < colors.length; i++) {
    let sum = 0;
    for (let j = 0; j < colors[i].rgb.length; j++) {
        sum += colors[i].rgb[j];
    }
    console.log(`${colors[i].name}: ${sum}`);
}

console.log('---------------------');

document.write('<ul>');
for (let i = 0; i < galleries.length; i++) {
    document.write(`<li><a href="${galleries[i].url}">${galleries[i].name}</a></li>`);
}
document.write('</ul>');
