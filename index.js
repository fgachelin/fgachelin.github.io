let affiche = function(t){document.body.innerHTML += "<p>"+t+"</p>";

fetch('./test.md', {mode: 'no-cors'})
  .then(response => response.text())
  .then(data=> affiche(data))
  .catch(error => console.error(error));
