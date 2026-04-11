const searchBar = document.getElementById('search-bar')
const searchButton = document.getElementById('search-button')
const kbbi = document.getElementById("kbbi")
const llm = document.getElementById("llm")

searchButton.addEventListener('click', getFunc)

async function getFunc(e) {
    e.preventDefault()

    kbbi.replaceChildren()
    llm.replaceChildren()

    const kata = searchBar.value

    const request = await fetch(`http://localhost:3000/api/kamus/${kata}`)
    const data = await request.json()

    const kbbiList = document.createElement("ol")
    kbbi.appendChild(kbbiList)

    for (let i=0;i<data.message.definisi.length;i++) {

        const definisi = document.createElement("li")
        definisi.classList.add('definisi')

        definisi.textContent = data.message.definisi[i].key
        kbbiList.appendChild(definisi)

        const keterangan = document.createElement('ul')
        definisi.appendChild(keterangan)

        for (let v in data.message.definisi[i]) {
            if (v == 'kelas' || v == 'submakna') {
                const list = document.createElement('li')
                list.classList.add(v)
                list.textContent = data.message.definisi[i][v]
                keterangan.appendChild(list)
            }
        }
    }

    const kbbiNote = document.createElement('p')
    kbbiNote.classList.add('note')
    kbbiNote.textContent = "Bersumber dari KBBI"
    kbbi.appendChild(kbbiNote)

    const p = document.createElement('p')
    llm.classList.add('llm-style')
    p.textContent = 'Generating text...'
    llm.appendChild(p)

    const response = await fetch(`http://localhost:3000/api/kamus/generate/${kata}`)
    const generatedData = await response.json()

    llm.replaceChildren()

    for (let i=0;i<generatedData.response.length;i++) {
        const p = document.createElement('p')
        p.textContent = generatedData.response[i]
        llm.appendChild(p)
    }

    const llmNote = document.createElement('p')
    llmNote.classList.add('note')
    llmNote.textContent = "Teks ini dibuat oleh model Qwen2.5"
    llm.appendChild(llmNote)
}