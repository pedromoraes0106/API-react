import "./styles.css";
import React, { Component } from "react";

const api_key = "?api_key=c882e937809f77ac59b795976d1e9c56";
const api_url =
  "https://api.themoviedb.org/3/movie/550?api_key=c882e937809f77ac59b795976d1e9c56";

const img_path = "https://image.tmdb.org/t/p/w1280";

// url + chave + pesquisa com região en
const search_pi =
  "https://api.themoviedb.org/3/search/movie" + api_key + "&region=EN&query=";

class Content extends Component {
  render() {
    return (
      <div>
        <div id="content">oi</div>
      </div>
    );
  }

  componentDidMount() {
    let content = document.getElementById("content");
    content.innerHTML = "";
    console.log("montou");
  }
}

async function getMovies(url) {
  const resp = await fetch(url);

  const respData = await resp.json();

  showMovies(respData.results);
}

function escolhefilme() {
  const rndInt = Math.floor(Math.random() * 6) + 1;
  var filme = "";

  switch (rndInt) {
    case 1:
      filme = "Que horas ela volta";
      break;

    case 2:
      filme = "Jurassic World Dominion";
      break;

    case 3:
      filme = "amelia";
      break;

    case 4:
      filme = "turning-red";
      break;

    case 5:
      filme = "Downton Abbey 2";
      break;
    case 6:
      filme = "Os vingadores";
      break;

    default:
      filme = "";
      break;
  }

  getMovies(search_pi + filme);
  console.log(filme);
}

function showMovies(filmes) {
  let content = document.getElementById("content");

  content.innerHTML = "";

  var i = 0;

  while (i < 1) {
    var filme = filmes[0];
    const { poster_path, title, overview } = filme;

    const moviesEl = document.createElement("div");
    moviesEl.classList.add("movie");
    moviesEl.innerHTML = `
      <img src="${img_path + poster_path}" alt="${title}"/>
      <div class="movie-info">
        <h3>${title}</h3>
      </div>

      <div class="overview">
        <h3>${overview}</h3>
      </div>
    `;

    content.appendChild(moviesEl);
    i++;
  }
}

function Botaoescolherfilme() {
  return (
    <div>
      <button onClick={escolhefilme}>Clique aqui</button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Recomendar filme</h1>
      <h2>Clique no botão para escolher um filme aleatório</h2>
      <Botaoescolherfilme />
      <Content />
    </div>
  );
}
