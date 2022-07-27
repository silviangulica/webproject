const btn = document.getElementById('btn')
const color = document.querySelector(".color")

btn.addEventListener("click", function() {
    // Generate a random color and apply that color to 
    // the background
    const randomColor = "#" + getRandomSeed().toString(16)
    
    document.body.style.backgroundColor = randomColor
    color.textContent = randomColor
})

const getRandomSeed = () => {
    return Math.floor(Math.random()*16777215)
}

// Adding css to my script
const styles = `
        #simple { 
            color: black;
        }
        #hex {
            color: green;
        }
`
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)