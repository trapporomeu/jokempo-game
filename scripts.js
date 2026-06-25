const optionImages = document.querySelectorAll(".option-image");
const container = document.querySelector(".container");
const resultText = document.querySelector(".result-text");
const computerResult = document.querySelector('.computer-result img')
const userResult = document.querySelector('.user-result img')

const computerSrcImages = [
    'images/pedra.png', 
    'images/papel.png', 
    'images/tesoura.png'
]

const winner = {
    RR: "Empate",
    RP: "Computador",
    RS: "Você",
    PP: "Empate",
    PR: "Você",
    PS: "Computador",
    SS: "Empate",
    SR: "Computador",
    SP: "Você"
}


function handleOptionClick(event) {
    const clickedImage = (event.currentTarget)
    const userIndex = Array.from(optionImages).indexOf(clickedImage)

    container.classList.add("start")
    resultText.textContent = "Carregando..."

    userResult.src = computerResult.src = 'images/pedra.png'

    setTimeout(() => {
    container.classList.remove("start")

    userResult.src = computerSrcImages[userIndex]

    const randomNumber = Math.floor(Math.random() * computerSrcImages.length)
    computerResult.src = computerSrcImages[randomNumber]

    const userValue = ['R', 'P', 'S'][userIndex]
    const computerValue = ['R', 'P', 'S'][randomNumber]
    const userComputerResult = userValue + computerValue
    const finalResult = winner[userComputerResult]


        resultText.textContent = userValue === computerValue ? 'Empate' : finalResult + ' Ganhou'

    }, 2000);
}



optionImages.forEach(img => {
    img.addEventListener("click", handleOptionClick)
})