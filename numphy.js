function mmd2html(dom_mmd)
{
    let mmd = dom_mmd.innerHTML
    let lignes = mmd.split("\n")
    let html = ''
    for(let ligne of lignes)
    {
        html += `<p style='color:red'>${ligne}</p>`
    }
    return `<h1 style='color:red'>mmd2html</h1>${html}`
}

for(let mmd of document.querySelectorAll('mmd'))
{   
    mmd.innerHTML = mmd2html(mmd)
}
