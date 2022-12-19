const detailurl = new URL(location.href);
const detail = detailurl.searchParams.get('post')
const parse = JSON.parse(detail)

const detailcontainer = document.createElement('div')
detailcontainer.classList.add('detailcontainer')
document.body.appendChild(detailcontainer);

for (const item in parse) {
    const infodiv = document.createElement('div')
    infodiv.classList.add('infodiv')
    detailcontainer.appendChild(infodiv)
    infodiv.innerText = `${item} -- ${parse[item]}`
}




