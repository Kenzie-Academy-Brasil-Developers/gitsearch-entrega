function returnToIndex() {
    const button = document.querySelector('button')

    button.addEventListener('click', ()=>{
        window.location.replace('/index.html')
    })
}

returnToIndex()