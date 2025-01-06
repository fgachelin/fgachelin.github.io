const sub = {
  "#" : "!",
  "-" : "&rarr;"  
}

let affiche = function(data){
  var d = data
  for(let k in sub){d = d.replace(k, sub[k])}
  document.body.innerHTML += d 
}

//fetch('./index.md', {})
fetch('http://194.167.100.167:8080/gachelin.web/terminale_nsi/index.md', {mode:'cors', method: 'GET'})
  .then(response => response.text())
  .then(data=> affiche(data))
  .catch(error => console.error(error))
