import App from "./App.js";

const root = document.getElementById("app");
const app = new App(root);

// const view = new NotesView(app, {
//   onNoteAdd() {
//     console.log("note has been add");
//   },
//   onNoteEdit(newTitle, newBody) {
//     console.log(newTitle, newBody);
//   },
//   onNoteSelect(noteId) {
//     console.log(noteId);
//   },
//   onNoteDelete(noteId) {
//     console.log(noteId);
//   },
// });

// view.updateNoteList(NotesAPI.getAllNotes());
// view.updateActiveNote(NotesAPI.getAllNotes()[1]);
