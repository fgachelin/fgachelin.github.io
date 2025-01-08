const sub = {
  "#" : "!",
  "-" : "&rarr;"  
}

let affiche = function(data){
  var d = data
  for(let k in sub){d = d.replace(k, sub[k])}
  document.body.innerHTML += d 
}

async function cherche(c)
{
    //const r = await fetch('http://194.167.100.167/gachelin.web/api.php?doc='+c, 
    const r = await fetch('./index.md', 
    {
        mode:'same-origin', 
        method:'GET'
    })
    document.body.innerHTML += await r.text();
}

//cherche('testapi.md')

const author = {prenom:"Frz", nom:"Gachelin"}
let a = document.createElement('h4')
a.innerHTML = `Auteur: ${author.prenom} ${author.nom}</h4>`
document.body.appendChild(a)

