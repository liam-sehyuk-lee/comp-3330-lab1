import "./utils/initializeStylesheet.js"

let createComponent = (
    type = "div",
    content = "",
    styles = {},
    eventsInfo = []
) => {
    let element = document.createElement(type)
    element.classList.add("w1-component")

    if (content) {
        element.innerHTML = content
    }

    let { color = "black", size = "1rem", columns = 1 } = styles

    element.style.color = color
    element.style.fontSize = size

    let gridColumns = ""
    for (let i = 0; i < columns; i++) {
        gridColumns = `${gridColumns}1fr `
    }
    element.style.gridTemplateColumns = gridColumns.trim()

    if (eventsInfo && eventsInfo.length > 0) {
        eventsInfo.forEach((event) => {
            element.addEventListener(event.type, event.handler)
        })
    }

    let componentObject = {
        element: element,
        render: () => document.body.append(element),
        appendChildComponent: (childComponent) => element.append(childComponent.element)
    }
    return componentObject
}

export default createComponent