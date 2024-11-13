function addNotes() {
    var input = document.getElementById("input");
    var inputValue = document.getElementById("input").value;

    if (inputValue == "") {
        alert("please task");
        return
    }
    var notesContainer = document.getElementById("notesContainer");;
    var notes = `<div class="notes" id="notes" >
    
    <p id="output"  onclick ="ticked(this)">${inputValue}</p>
    <div class="iconsdiv"  >
    <button onclick ="editNotes(this)"><i class="fa-solid fa-pen-to-square"></i></button>
    <button onclick ="deleteNotes(this)"><i class="fa-solid fa-trash"></i></button></div>
    </div>`
    notesContainer.innerHTML += notes;

    
    input.value = ""
}

function deleteNotes(e) {
    e.parentNode.parentNode.remove();
}

function editNotes(b) {
    var userpormpt = prompt("Enter Notes");
    b.parentNode.parentNode.firstElementChild.innerHTML = userpormpt;
}





function ticked(c) {
        notes.classList.toggle("ticked");
}