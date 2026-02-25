const search = document.getElementById("search-box");
const submitButton = document.getElementById("submit-button");
const kata = document.getElementById("kamus-div");

submitButton.addEventListener("click", searchWord);

async function searchWord(event) {
    event.preventDefault();

    const request = await fetch(`http://localhost:3000/kamus/${search.value}`, {
        method: "POST"
    });
    const result = await request.json();
    console.log(result);
    //kamus
    const p = document.createElement("p");
    const add = document.createElement("button");
    add.textContent = "Add";
    p.textContent = `${result.data.kata}-----------${result.data.makna[0].submakna}-----------${result.data.contoh[0]}`
    kata.appendChild(p);
    kata.appendChild(add);

    //contoh
}