var trList = document.querySelector('table').querySelectorAll('tr');
var pp = []
trList.forEach(tr => {
    const tdList = tr.querySelectorAll('td');
    const pName = tdList[1].innerText
    if (!pName.includes('画中画') && !pName.includes('单音轨')) {
        pp.push({
            name: tdList[1].innerText,
            url: tdList[2].innerText
        })
    }
})

var text = pp.map(p => {
    return `${p.name},http://192.168.100.1:10000/rtp/${p.url}`
}
).join('\n');

console.log(text);
