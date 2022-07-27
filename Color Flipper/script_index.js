const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]
const btn = document.getElementById('btn')
const color = document.querySelector(".color")

// Action the button 
btn.addEventListener("click", function() {
    // Get random number [0 .. 3]
    const randomColor = colors[getRandomNumber()];

    document.body.style.backgroundColor = randomColor
    color.textContent = randomColor
})


const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
}

// Adding css to my head
const styles = `
        #simple { 
            color: green;
        }
        #hex {
            color: black;
        }
`
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)