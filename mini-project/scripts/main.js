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
            userblock.innerText = `${item.id}.  -- ${item.name}`
            const button = document.createElement('button')
            button.classList.add('user_button')
            userblock.appendChild(button)
            button.innerText = 'Detailed info'
            button.onclick = function (){
                window.location = 'user-details.html?id=' + item.id;
            }
        }

    })

const futter = document.createElement('div')
futter.classList.add('futter')
document.body.appendChild(futter)
const git = document.createElement('i')
git.classList.add('fa-brands', 'fa-github')
const gitlink = document.createElement('a')
gitlink.classList.add('gitlink')
gitlink.appendChild(git)
gitlink.href = 'https://github.com/yuriybobyk';
gitlink.target = '_blank'
futter.appendChild(gitlink)
const telegram = document.createElement('i')
telegram.classList.add('fa-brands', 'fa-telegram')
const telegramlink = document.createElement('a')
telegramlink.classList.add('telegramlink')
telegramlink.appendChild(telegram)
telegramlink.href = 'https://t.me/yura_bobyk'
telegramlink.target = '_blank'
futter.appendChild(telegramlink)
const insta = document.createElement('i')
insta.classList.add('fa-brands', 'fa-instagram')
const instalink = document.createElement('a')
instalink.classList.add('instalink')
instalink.appendChild(insta)
instalink.href = 'https://www.instagram.com/yurii__bobyk_/'
instalink.target = '_blank'
futter.appendChild(instalink)
const twitter = document.createElement('i')
twitter.classList.add('fa-brands', 'fa-twitter')
const twitlink = document.createElement('a')
twitlink.classList.add('twitlink')
twitlink.appendChild(twitter)
twitlink.href = 'https://twitter.com/YuriiBobyk'
twitlink.target = '_blank'
futter.appendChild(twitlink)
const signy = document.createElement("h5")
signy.classList.add('signy')
signy.innerText = '© 2022 Yurii Bobyk'
futter.appendChild(signy)
