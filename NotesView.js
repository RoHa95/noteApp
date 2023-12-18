export default class NotesView {
  constructor(root, handlers) {
    this.root = root;
    const { onNoteAdd, onNoteEdit, onNoteSelect } = handlers;
    this.onNoteEdit = onNoteEdit;
    this.onNoteAdd = onNoteAdd;
    this.onNoteSelect = onNoteSelect;
    this.root.innerHTML = `
    <div class="notes__sidebar">
    <div class="notes__logo">NOTE APP</div>
    <div class="notes__list"></div>
    <button class="notes__add">ADD NOTE</button>
  </div>
  <div class="notes__preview">
    <input type="text" class="notes__title" placeholder="note title ...." />
    <textarea name="" class="notes__body">Take Some Note...</textarea>
  </div>
  `;
    const addNoteBtn = this.root.querySelector(".notes__add");
    const inputTitle = this.root.querySelector(".notes__title");
    const inputBody = this.root.querySelector(".notes__body");

    addNoteBtn.addEventListener("click", () => {
      this.onNoteAdd();
    });

    [inputTitle, inputBody].forEach((inputField) => {
      inputField.addEventListener("blur", () => {
        const newBody = inputBody.value.trim();
        const newTitle = inputTitle.value.trim();
        this.onNoteEdit(newTitle, newBody);
      });
    });
  }
  _createListItemHTML(id, title, body, updated) {
    const max_body_length = 50;
    return `
    <div class="notes__list-item" data-note-id="${id}">
    <div class="notes__small-title">${title}</div>
    <div class="notes__small-body">
    ${body.substring(0, max_body_length)}
    ${body.length > max_body_length ? "..." : ""}</div>
    <div class="notes__small-updated">
    ${new Date(updated).toLocaleString("en", {
      dateStyle: "full",
      timeStyle: "short",
    })}
    </div>
    </div>
    `;
  }
  updateNoteList(notes) {
    const notesContainer = this.root.querySelector(".notes__list");

    //empty note list
    notesContainer.innerHTML = "";
    let noteList = "";
    for (const note of notes) {
      const { id, title, body, updated } = note;
      const html = this._createListItemHTML(id, title, body, updated);
      noteList += html;
    }
    notesContainer.innerHTML = noteList;
    notesContainer.querySelectorAll(".notes__list-item").forEach((noteItem) => {
      noteItem.addEventListener("click", () => {
        this.onNoteSelect(noteItem.dataset.noteId);
      });
    });
  }
}
