const url = new URL(location.href)
const id = url.searchParams.get('id')

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(response =>{
        const details_container = document.createElement('div')
        details_container.classList.add('details_container')
        document.body.appendChild(details_container)
        for (const item in response) {
            const user_info = document.createElement('div')
            user_info.classList.add('user_info')
            details_container.appendChild(user_info)
            if (typeof response[item] !== 'object') {
                user_info.innerText = `${item}: ${response[item]}`
            }else {
                user_info.innerText = `${item} :`
                for (const data in response[item]) {
                    const address_info = document.createElement('div')
                    if (typeof response[item][data] !== 'object'){
                        address_info.innerText = `${data}: ${response[item][data]}`
                    }else {
                        address_info.innerText = `${data} :`
                        for (const element in response[item][data]) {
                            const company_info = document.createElement('div')
                            if (typeof response[item][data][element] !== 'object'){
                                company_info.innerText = `${element}: ${response[item][data][element]} `
                            }
                            address_info.appendChild(company_info)
                        }
                    }
                    user_info.appendChild(address_info)

                }
            }
        }
    })

const posturl = new URL(location.href)
const postid = posturl.searchParams.get('id') + '/posts';
fetch('https://jsonplaceholder.typicode.com/users/' + postid)
    .then(value => value.json())
    .then(value => {
        const postbtn = document.createElement('button')
        postbtn.classList.add('post-btn')
        postbtn.innerText = 'post of current user';
        document.body.appendChild(postbtn)
        postbtn.onclick = function (){
            const titlediv = document.createElement('div')
            titlediv.classList.add('title')
            document.body.appendChild(titlediv)
            for (const item of value) {
                const desc = document.createElement('div')
                desc.classList.add('desc')
                titlediv.appendChild(desc)
                desc.innerText = `${item.id} -- ${item.title}`
                const detailbtn = document.createElement('button')
                detailbtn.classList.add('detailbtn')
                detailbtn.innerText = 'Post details'
                detailbtn.onclick = function (){
                    window.location = 'post-details.html?post=' + JSON.stringify(item)
                }
                desc.appendChild(detailbtn)
            }
            postbtn.disabled = 'true';
        }
    })
