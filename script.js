// you can use this variable like this: videoGames.N64 to get the N64 video games list
const videoGames = require('./load-games.js');
const allVideoGames = videoGames.PS2.concat(videoGames.N64).concat(videoGames.GBA);
// DEMO CODE

// IMPORTANTE
// Para las primeras 2 respuestas realizamos un metodo para las preguntas 1 y 2

// Recomendar 2 juegos para una consola
console.log('\nRecomendar 2 juegos para una consola');
const consoleForTwoGamesPerConsoleRecommender = 'GBA';
const categoryForTwoGamesPerConsoleRecommender = 'video_console';
const numberOfRecommendedGamesPerConsole = 2;
recommendedVideoGames(categoryForTwoGamesPerConsoleRecommender, consoleForTwoGamesPerConsoleRecommender, numberOfRecommendedGamesPerConsole);

// Recomendar 3 juegos para un género
console.log('\nRecomendar 3 juegos para un género');
const genreForThreeGamesPerGenresRecommender = 'RPG';
const categoryForThreeGamesPerGenresRecommender = 'genres';
const numberOfRecommendedGamesPerGenresRecommender = 3;
recommendedVideoGames(categoryForThreeGamesPerGenresRecommender, genreForThreeGamesPerGenresRecommender, numberOfRecommendedGamesPerGenresRecommender)

// Recomendar 1 juego para una consola y un género específico
console.log('\nRecomendar 1 juego para una consola y un género específico');
const consoleForOneGamePerGenreAndConsoleRecommender = 'PS2';
const genreForOneGamePerGenreAndConsoleRecommender = 'Sports';
recommendedVideoGamesByConsoleAndGenre(consoleForOneGamePerGenreAndConsoleRecommender, genreForOneGamePerGenreAndConsoleRecommender);

// Buscar un juego por su nombre
console.log('\nBuscar un juego por su nombre');
const nameForSearchGameByName = 'GraND ThEft auto Iii';
showVideoGameByName(nameForSearchGameByName);


// Obtener listado de juegos de un género en particular
console.log('\nObtener listado de juegos de un género en particular');
const genreForList = 'Survival Horror';
listGamesByGenre(genreForList);


// Show all video games from specific console
function showVideoGamesFromConsole(cons) {
  console.log(videoGames[cons]);
}

// Show all video games by console
function showVideoGamesByConsole() {
  console.log(videoGames.GBA);
  console.log(videoGames.PS2);
  console.log(videoGames.N64);
}


function recommendedVideoGames(key, value, num) {
  const videoGamesFiltered = allVideoGames.filter(v => v[key].includes(value));

  for (let i = 0; i < num; i++) {
    let randomNumber = numeroRandom(videoGamesFiltered.length);
    let random = videoGamesFiltered[randomNumber];
    console.log(`${random.name} - ${random.video_console} - ${random.genres}`);
    videoGamesFiltered.splice(randomNumber, 1);
  }
}


function recommendedVideoGamesByConsoleAndGenre(cons, genre) {
  const videoGamesFilteredByGenres = allVideoGames.filter(v => v.genres.includes(genre));
  const videoGamesFilteredByConsole = videoGamesFilteredByGenres.filter(v => v.video_console.includes(cons))
  let randomNumber = numeroRandom(videoGamesFilteredByConsole.length);
  let random = videoGamesFilteredByConsole[randomNumber];
  console.log(`${random.video_console} - ${random.genres} - ${random.name}`);
}

function showVideoGameByName(name) {
  const videoGame = allVideoGames.filter((g) => g.name.toLowerCase() === name.toLowerCase());

  if (videoGame.length === 0) {
    console.log("Juego no encontrado en nuestra base de datos");
  } else {
    const videoGameDetail = videoGame.map(
      (v) => `${v.video_console} - ${v.genres}`
    );
    console.log(videoGameDetail[0]);
  }
}

function listGamesByGenre(genre) {
  const videoGamesFiltered = allVideoGames.filter(v => v['genres'].includes(genre));
  videoGamesFiltered.forEach(v => {
    if (v.genres.length > 1) {
      v.isMultiGenre = true;
      console.log(`\nNombre: ${v.name}\nConsola: ${v.video_console}\nGénero: ${v.genres}\n¿Es multigénero?: ${v.isMultiGenre}`);
    } else {
      console.log(`\nNombre: ${v.name}\nConsola: ${v.video_console}\nGénero: ${v.genres}`);
    }
  });
}

function numeroRandom(num) {
  return Math.floor(Math.random() * num);
}
