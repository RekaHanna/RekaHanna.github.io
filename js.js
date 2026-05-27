async function getCharacter(){

  const id = Math.floor(Math.random() * 826) + 1;
 // Véletlen szám generálása 1 és 826 között
  // Math.random() -> 0 és 1 közötti szám
  // * 826 -> 0–825 közé skálázza
  // Math.floor() -> lefelé kerekít egész számra
  // +1 -> hogy 1-től induljon
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    // Lekérés küldése az API-nak a kiválasztott karakterhez
  const data = await res.json();
  // A válasz JSON formátumának átalakítása JavaScript objektummá
  document.getElementById("card").innerHTML = `

    <div class="card">

      <img src="${data.image}">

      <h2>${data.name}</h2>
      <p>status: ${data.status}</p>
      <p>species: ${data.species}</p>

    </div>

  `;
}
