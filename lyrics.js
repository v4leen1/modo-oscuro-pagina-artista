function letra(){
    const lyricName = document.getElementById('lyricName').value;
    fetch(`https://api.lyrics.ovh/v1/Maria Becerra/${lyricName}`)
    .then(response => response.json())
      .then(data => {
      console.log(data);
      parrafo = document.getElementById("Letra");
      const {lyrics} = data;
      parrafo.innerHTML = `${lyrics}`;
      }
    )
    .catch(error => console.error('Error:', error));
}