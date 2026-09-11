import { albums, artists } from "./data.js"
import createComponent from "./w1Components.js"

let headerComponent = createComponent(
    "header",
    "<h1>Assignment 1: JavaScript Review</h1><p>Music Edition</p>",
    { color: "slateblue", size: "2rem", columns: 1 },
    []
)

let artistsContainer = createComponent(
    "main",
    "",
    { color: "black", size: "1rem", columns: 2 },
    []
)

artists.forEach((artist) => {
    let { name, artistID } = artist

    let artistComponent = createComponent(
        "article",
        `<h2>Artist Name: ${name}</h2><h3>Albums</h3>`,
        { color: "darkorange", size: "1.5rem", columns: 1 },
        []
    )

    let albumListComp = createComponent(
        "dl",
        "",
        { color: "darkblue", size: "1rem", columns: 3 },
        []
    )

    let artistAlbums = albums.filter((album) => album.artistID === artistID)

    let albumComponents = artistAlbums.map((album) => {
        let { name: albumName, year } = album
        return createComponent(
            "div",
            `<dt>Name: ${albumName}</dt><dd>Artist: ${name}</dd><dd>Year released: ${year}</dd>`,
            { color: "purple", size: "0.9rem", columns: 1 },
            [
                {
                    type: "click",
                    handler: (event) => {
                        event.currentTarget.classList.toggle("liked")
                    }
                }
            ]
        )
    })

    albumComponents.forEach((albumComp) => {
        albumListComp.appendChildComponent(albumComp)
    })

    artistComponent.appendChildComponent(albumListComp)
    artistsContainer.appendChildComponent(artistComponent)
})

headerComponent.render()
artistsContainer.render()