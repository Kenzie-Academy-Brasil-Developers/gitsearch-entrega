function returnToIndex() {
    const button = document.querySelector('button')

    button.addEventListener('click', ()=>{
        console.log("click")
        window.location.replace('/index.html')
    })
}

returnToIndex()