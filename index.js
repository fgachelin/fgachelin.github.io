const sub = {
  "#" : "!",
  "-" : "&rarr;"  
}

let affiche = function(data){
  var d = data.split(/\n/)
  //for(let k in sub){d = d.replace(k, sub[k])}
  for(let line of data.split(/\n/)){document.body.innerHTML += `<p>${line}</p>`}
}

async function cherche(c)
{
    //const r = await fetch(`http://194.167.100.167/gachelin.web/api.php?doc=${c}`,
    const r = await fetch('./index.md', 
    {
        //mode:'same-origin', 
        mode:'cors', 
        method:'GET'
    })
    affiche(await r.text())
}

cherche("youpiGH")

const author = {prenom:"Frz", nom:"Gachelin"}
let a = document.createElement('h4')
a.innerHTML = `Auteur: ${author.prenom} ${author.nom}</h4>`
document.body.appendChild(a)

