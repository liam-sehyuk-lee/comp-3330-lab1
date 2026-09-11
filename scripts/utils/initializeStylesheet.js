let initializeStyles = () => {
    let styleTag = document.createElement("style")

    styleTag.textContent = `
html {
 font-family: sans-serif;
 line-height: 1.6;
 }
 h1, h2, h3, h4 {
 margin-bottom: 0;
 }
 .w1-component {
 display: grid;
 gap: 0.5rem;
 border: silver 0.5rem solid;
 padding: 0.5rem;
 border-radius: 0.5rem;
 box-sizing: border-box;
 }
.liked {
 border: .5em solid green !important;
 }
    `;

    document.head.append(styleTag)
};

initializeStyles()