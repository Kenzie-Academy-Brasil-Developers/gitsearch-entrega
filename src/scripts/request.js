

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
            const userSearch = response.json().then(responseJson =>{
                localStorage.setItem('user', JSON.stringify(responseJson))
                return responseJson
            })
            window.location.replace('./src/pages/profile.html')
            return userSearch
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

        // .then((response)=>{
        //     return response.json()
        // }) 
        // .catch(err => {
        //     alert('erro');
        //     console.log(err);
        //   })
        return user
    })
}

