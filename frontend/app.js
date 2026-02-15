const showButton = document.getElementById("show-button");
const kamusContainer = document.getElementById("kamus-container");
const listKamus = document.getElementById("list-kamus");

showButton.addEventListener("click", showKamus);

async function showKamus() {
    const response = await fetch("https://kpbi-production.up.railway.app:8080/kamus")
    const data = await response.json();
    for (i=0; i < data.length; i++) {
        const newElement = document.createElement("li");
        newElement.textContent = `${data[i].kata}: ${data[i].definisi}`
        listKamus.appendChild(newElement);
    }
    showButton.textContent = "Sembunyikan";
    showButton.addEventListener("click", hideKamus);
}

async function hideKamus() {
    kamusContainer.textContent = ""
    showButton.textContent = "Tampilkan";
    showButton.addEventListener("click", showKamus);
}