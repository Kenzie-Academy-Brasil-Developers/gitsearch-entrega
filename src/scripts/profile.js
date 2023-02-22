import { baseUrl } from "./request.js";


export async function createHeaderProfile(user) {

    const profile = document.querySelector('.container--profile')

    profile.innerHTML = ''

    const html = `
    <figure>
    <img src="${user.avatar_url}" alt="${user.name}">
  </figure>
  <h2>${user.name}</h2>
    `; 

    profile.insertAdjacentHTML('beforeend',html)
}

export async function renderListRepo() {

    const actualyUser = JSON.parse(localStorage.getItem('user'))

    const users = await fetch(`${baseUrl}${actualyUser.login}/repos`,{
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        } 
    })

    .then(function(response){ return response.json()})

    .then(function(responseJson){

    responseJson.map(repository => {
        console.log(repository)
        createListProfile(repository)
    })

})
}



export async function createListProfile(repository) {

    const ul = document.querySelector('ul')

    const html = `
    <li class="card flex-column">
        <h3>${repository.name}</h3>
        <p>${repository.description}</p>
        <a href="${repository.html_url}">
        <button class="card--button">Repositório</button>
      </a>
    </li>
    `

    ul.insertAdjacentHTML('beforeend',html)
}

export async function renderUserProfile() {
    
    const user = JSON.parse(localStorage.getItem('user'))
    createHeaderProfile(user)
}


async function changeUser() {

    const button = document.querySelector('.profile--change__user')

    if (button) {
        button.addEventListener('click', ()=>{
            window.location.replace('/index.html')
            // returnToIndex()
        })
    }else{
        console.log("button nao existe")
    }

    
}

changeUser()
renderUserProfile()
renderListRepo()
// renderUserProfile('jonatasneres')

