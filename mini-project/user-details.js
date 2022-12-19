const url = new URL(location.href)
const id = url.searchParams.get('id')

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(response =>{
        for (const item in response) {
            const user_info = document.createElement('div')
            user_info.classList.add('user_info')
            document.body.appendChild(user_info)
            if (typeof response[item] !== 'object') {
                user_info.innerText = `${item} -- ${response[item]}`
            }else {
                user_info.innerText = `${item} :`
                for (const data in response[item]) {
                    const adress_info = document.createElement('div')
                    if (typeof response[item][data] !== 'object'){
                        adress_info.innerText = `${data} -- ${response[item][data]}`
                    }else {
                        adress_info.innerText = `${data} :`
                        for (const element in response[item][data]) {
                            const company_info = document.createElement('div')
                            if (typeof response[item][data][element] !== 'object'){
                                company_info.innerText = `${element} -- ${response[item][data][element]} `
                            }
                            adress_info.appendChild(company_info)
                        }
                    }
                    user_info.appendChild(adress_info)

                }
            }
        }
    })