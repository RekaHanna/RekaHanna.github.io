async function getCharacter(){

  const id = Math.floor(Math.random() * 826) + 1;

  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await res.json();

  document.getElementById("card").innerHTML = `

    <div class="card">

      <img src="${data.image}">

      <h2>${data.name}</h2>
      <p>status: ${data.status}</p>
      <p>species: ${data.species}</p>

    </div>

  `;
}
