fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
    .then(pokemon => pokemon.json())
    .then(data => {
        return pokemones(data.results);

    });



function pokemones(data) {
    data.map(bichos => {
        fetch(bichos.url)
            .then(resultado => resultado.json())
            .then(data_ => {
                console.log(data_)
                let nombre = `
                <div class = "col-3">
                    <div class="card tarj">
                    <img src="${data_.sprites.front_default}" class="card-img-top" width = "50px"   alt="...">
                    <div class="card-body">
                        <p class="card-text">${data_.name}</p>
                        </div>
                    </div>
                </div>
                `;
                let datos = document.getElementById('tarjetas')
                datos.innerHTML += nombre;
            });
    });
}