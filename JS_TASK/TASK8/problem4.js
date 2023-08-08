function findCityWithMaxCharsAndPopulation(records){
    let maxCharsAndPopulationCity = null;
    records.forEach(city =>{
        if(!maxCharsAndPopulationCity || city.name.length > maxCharsAndPopulationCity.name.length || (city.name.length === maxCharsAndPopulationCity.name.length && city.population > maxCharsAndPopulationCity.population)){
            maxCharsAndPopulationCity = city;
        }
    });
    return maxCharsAndPopulationCity;
}


const cityRecords = [
    { name: "New York", population: 8537673 },
    { name: "Los Angeles", population: 3976322 },
    { name: "Chicago", population: 2693976 },
    { name: "Houston", population: 2132920 },
    { name: "Phoenix", population: 1680992 },
    { name: "Philadelphia", population: 1584138 },
    { name: "San Antonio", population: 1547253 },
    { name: "San Diego", population: 1423851 },
    { name: "Dallas", population: 1343573 },
    { name: "San Jose", population: 1030119 }
];


let maxCharsAndPopulationCity = findCityWithMaxCharsAndPopulation(cityRecords);
console.log(`The Max Characer Contain City is ${maxCharsAndPopulationCity.name} and it's population is ${maxCharsAndPopulationCity.population}`);
