const container = document.createElement('div')
container.classList.add(`container`)
document.body.appendChild(container)

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(response =>{
        for (const item of response) {
            const userblock = document.createElement('div')
            userblock.classList.add('userblock')
            container.appendChild(userblock)
            userblock.innerText = `${item.id}. -- ${item.name}`
            const button = document.createElement('button')
            button.classList.add('user_button')
            userblock.appendChild(button)
            button.innerText = 'Detailed info'
            button.onclick = function (){
                window.location = 'user-details.html?id=' + item.id;
            }
        }

    })
