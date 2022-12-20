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

const commenturl = parse.id + '/comments'
fetch('https://jsonplaceholder.typicode.com/posts/' + commenturl)
    .then(response => response.json())
    .then(response =>{
        const commentbtn = document.createElement('button')
        commentbtn.classList.add('commentbtn')
        commentbtn.innerText = 'Comments to post'
        detailcontainer.appendChild(commentbtn)
        commentbtn.onclick = function (){
            const commentdiv = document.createElement('div')
            commentdiv.classList.add('commentdiv')
            document.body.appendChild(commentdiv)
            for (const element of response) {
                const commentdesc = document.createElement('div')
                commentdesc.classList.add('commentdesc')
                commentdesc.innerText = `${element.postId} -- ${element.body}`
                commentdiv.appendChild(commentdesc)
            }
        }
    })


