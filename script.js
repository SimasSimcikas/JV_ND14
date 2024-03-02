"use strict";

const countries = [
  {
    name: "Jungtinės Amerikos Valstijos",
    area: 9833520,
    population: "334,914,895",
  },
  {
    name: "Kanada",
    area: 9984670,
    population: "40,528,396",
  },
  {
    name: "Brazilija",
    area: 8515767,
    population: "203,062,512",
  },
  {
    name: "Argentina",
    area: 2780400,
    population: "47,327,407",
  },
  {
    name: "Čilė",
    area: 75610196,
    population: "19,629,588",
  },
];

for (let i = 0; i < countries.length; i++) {
  print(countries[i].name, countries[i].area, countries[i].population);
  console.log("-------------------------------");
}

function print(name, area, population) {
  const areaByPerson = (area / 1000000).toFixed(2);
  console.log(`Šalis: ${name}, joje gyvena ${population} mln. gyventojų`);
  console.log(
    `Valstybės plotas: ${area} km², plotas tenkantis vienam gyventojui: ${areaByPerson} m²`
  );
}
