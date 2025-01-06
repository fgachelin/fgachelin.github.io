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
    const r = await fetch('http://194.167.100.167/gachelin.web/api.php?doc='+c, 
    {
        mode:'cors', 
        method:'GET'
    })
    document.body.innerHTML += await r.text();
}

cherche('testapi.md')
