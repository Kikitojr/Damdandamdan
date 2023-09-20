const naoButton = document.getElementById("nao");
const limite = document.getElementById("limite");

naoButton.addEventListener("click", () => {
    const buttonWidth = naoButton.offsetWidth;
    const buttonHeight = naoButton.offsetHeight;

    const limiteWidth = limite.offsetWidth - buttonWidth;
    const limiteHeight = limite.offsetHeight - buttonHeight;

    // Gere posições aleatórias dentro dos limites
    const randomX = Math.random() * limiteWidth;
    const randomY = Math.random() * limiteHeight;

    naoButton.style.left = `${randomX}px`;
    naoButton.style.top = `${randomY}px`;
});
