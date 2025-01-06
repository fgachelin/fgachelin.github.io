let affiche = function(t){document.body.innerHTML += "<p>"+t+"</p>"}

fetch('./test.md', {})
  .then(response => response.text())
  .then(data=> affiche(data))
  .catch(error => console.error(error))
