import { albums, artists } from "./data.js"
import createComponent from "./w1Components.js"

let headerComponent = createComponent(
    "header",
    "<h1>Assignment 1: JavaScript Review</h1>",
    { color: "slateblue", size: "2rem", columns: 1 },
    []
)

let subTextComponent = createComponent(
    "p",
    "Music Edition",
    { color: "slateblue", size: "1rem", columns: 1 },
    []
)

headerComponent.appendChildComponent(subTextComponent)
headerComponent.render()

albums
artists