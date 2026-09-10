import createComponent from "./w1Components.js"

let headerComponent = createComponent(
    "header",
    "<h1>Assignment 1: JavaScript Review</h1><p>Music Edition</p>",
    { color: "slateblue", size: "2rem", columns: 1 },
    []
)
headerComponent.render()