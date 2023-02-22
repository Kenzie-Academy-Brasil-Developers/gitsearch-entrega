import { renderUserProfile,renderListRepo } from "./profile.js";

export const baseUrl = 'https://api.github.com/users/'

async function searchUser(user) {

    const users = await fetch(`${baseUrl}${user}`,{
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        } 
    })

    .then((response)=>{
        if (response.ok) {
            response.json().then(responseJson =>{
                localStorage.setItem('user', JSON.stringify(responseJson))
            })
            window.location.replace('./src/pages/profile.html')
            return response.json()
        }else{
            window.location.replace('./src/pages/error.html')
        }
    })

    return users
}

export async function searchUserByName() {
    const input = document.querySelector('input') 
    const button = document.querySelector('button')


    button.addEventListener('click', async (event)=>{
        event.preventDefault()

        const user = await searchUser(input.value)
    })
}

