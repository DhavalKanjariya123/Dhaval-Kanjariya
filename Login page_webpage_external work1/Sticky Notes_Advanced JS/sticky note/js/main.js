
const addbutton = document.getElementById("add");

const updateldata = () => {
    const textareadata = document.querySelectorAll("textarea");
    const notes = [];
    console.log(textareadata);
    textareadata.forEach((note) => {
        return notes.push(note.value);
    })
    console.log(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
}
const addnewnote = (text = "") => {

    const note = document.createElement("div")
    note.classList.add("note");
    note.classList.add("row");
    note.classList.add("d-inline-block");
    const htmlData = `
    <div class="m-0 p-0">
    <div class="operation d-flex bg-warning">
        <button class="edit" data-bs-toggle="tooltip" title="Save/Edit"><i class="bi bi-save"></i><i class="bi bi-pen ps-3"></i></button>
        <button class="delete" data-bs-toggle="tooltip" title="Delete"><i class="bi bi-trash"></i></button>
    </div>
    <div id="save-text" class="main ${text ? "" : "hidden"}"> </div>
    <textarea class="${text ? "hidden" : ""}" ></textarea>
    </div>
            `;
    note.insertAdjacentHTML("afterbegin", htmlData);
    const editbutton = note.querySelector(".edit");
    const delbutton = note.querySelector(".delete");
    const maindiv = note.querySelector(".main");
    const textArea = note.querySelector("textarea");
    textArea.value = text;
    maindiv.innerHTML = text;     
    delbutton.addEventListener("click", () => {
        note.remove();
        updateldata();
    })
    editbutton.addEventListener("click", () => {
        maindiv.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    })
    textArea.addEventListener("change", (event) => {
        const value = event.target.value;
        // console.log(value);
        maindiv.innerHTML = value;
        updateldata();
    })
    document.body.appendChild(note);
}
const notes = JSON.parse(localStorage.getItem("notes"));
if (notes) { notes.forEach((note) => addnewnote(note)) };
addbutton.addEventListener("click", () => {
    addnewnote();
})