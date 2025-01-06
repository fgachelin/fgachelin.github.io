const sub = {
  "#" : "!",
  "-" : "&rarr;"  
}

let affiche = function(data){
  var d = data
  for(let k in sub){d = d.replace(k, sub[k])}
  document.body.innerHTML += d 
}

fetch('./index.md', {})
  .then(response => response.text())
  .then(data=> affiche(data))
  .catch(error => console.error(error))
