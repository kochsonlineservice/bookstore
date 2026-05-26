import "./js/ui.js";
import "./js/storage.js";



/* =========================
View notes
========================= */
let notesTitle = []
let notes = [];
let trashNotes = [];



/* =========================
local storage
========================= */

function saveToLocalStorage() {

  localStorage.setItem("notes", JSON.stringify(notes));

  localStorage.setItem("notesTitle", JSON.stringify(notesTitle));

  localStorage.setItem("trashNotes", JSON.stringify(trashNotes));

}


function loadFromLocalStorage() {

  let storedNotes = localStorage.getItem("notes");

  let storedTitles = localStorage.getItem("notesTitle");

  let storedTrash = localStorage.getItem("trashNotes");


  if (storedNotes) {
    notes = JSON.parse(storedNotes);
  }

  if (storedTitles) {
    notesTitle = JSON.parse(storedTitles);
  }

  if (storedTrash) {
    trashNotes = JSON.parse(storedTrash);
  }

}

/* =========================
Render  notes
========================= */


window.renderNotes = function () {

  let contentRef = document.getElementById("content");

  contentRef.innerHTML = "";

  for (let indexNote = 0; indexNote < notes.length; indexNote++) {

    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
};


/* =========================
Render trash notes
========================= */

window.renderTrashNotes = function () {

  let trashContentRef = document.getElementById("trash_content");

  trashContentRef.innerHTML = "";

  for (let indextrashNote = 0; indextrashNote < trashNotes.length; indextrashNote++) {

   trashContentRef.innerHTML += getTrashTemplate(indextrashNote);
  }
};


/* =========================
Note template
========================= */

function getNoteTemplate(indexNote) {

  return `
    <p class="note">  ${notesTitle [indexNote]} = ${notes[indexNote]}

      <button class="delete"
       onclick="deleteNote(${indexNote})">
        X
      </button>
    </p>
  `;
}


/* =========================
Trash template
========================= */

function getTrashTemplate(indextrashNote) {

  return `
    <p class="note">
     ${trashNotes[indextrashNote]}
      
     <button class="delete"
       onclick="deleteTrashNotes(${indextrashNote})">
        X
      </button>

    </p>
  `;
}



/* =========================
add notes
========================= */

window.addNotes = function () {

  let noteInputRef = document.getElementById("note_Input");

  let noteInput = noteInputRef.value;

  if (noteInput.trim() == "") {
    return;
  }

  notes.push(noteInput);

  notesTitle.push(`Nummer ${notesTitle.length + 1}`);

  renderNotes();

  saveToLocalStorage();

  noteInputRef.value = "";
};



/* =========================
delete notes
========================= */
window.deleteNote = function (indexNote) {

    let deletedNote = notes[indexNote];

    trashNotes.push(deletedNote);

    notes.splice(indexNote, 1);

    notesTitle.splice(indexNote, 1);

    saveToLocalStorage();

    renderNotes();

    renderTrashNotes();
};
/* =========================
delete trashnotes
========================= */

window.deleteTrashNotes = function (indextrashNote) {

    trashNotes.splice(indextrashNote, 1);

    saveToLocalStorage();

    window.renderTrashNotes();
};

/* =========================
local storage rendern
========================= */
     loadFromLocalStorage();

        renderNotes();
        renderTrashNotes();


/* =========================
Enter onkey push
========================= */

window.handleEnter = function(event){

    if(event.key === "Enter"){
        addNotes();
    }
}