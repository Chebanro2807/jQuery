function $ (selector){
    const element = document.querySelector(selector)

    element.addClass = (className) => {
        element.classList.add(className)
    }

    element.hide = ()=>{
        element.style.display = 'none'
    }

    return element
}
