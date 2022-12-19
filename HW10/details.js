const url = new URL(location.href)
const id = url.searchParams.get('id')


fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
.then(response => response.json())
.then(response =>{
    for (const item in response) {
        const div = document.createElement('div')
        document.body.appendChild(div)
        if (typeof response[item] !== 'object') {
            div.innerText = `${item} -- ${response[item]}`
        }else {
            div.innerText = `${item} :`

            for (const data in response[item]) {
                const h3 = document.createElement('h3')
                if (typeof response[item][data] !== 'object'){
                    h3.innerText = `${data} -- ${response[item][data]}`
                }else {
                    h3.innerText = `${data} :`
                    for (const element in response[item][data]) {
                        const h4 = document.createElement('h4')
                        if (typeof response[item][data][element] !== 'object'){
                            h4.innerText = `${element} -- ${response[item][data][element]} `
                        }
                        h3.appendChild(h4)
                    }
                }
                div.appendChild(h3)

            }
            }
        }


})