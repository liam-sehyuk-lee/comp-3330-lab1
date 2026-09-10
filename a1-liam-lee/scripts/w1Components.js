import "./utils/initializeStylesheet.js"

let createComponent = (type) => {
    let element = document.createElement(type)
    element.innerText = "hello world!"

    let componentObject = {
        element: element,
        render: () => document.body.append(element)
    }
    return componentObject
}

export default createComponent