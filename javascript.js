const notes = [
  {
    id: 1,
    title: "first note",
    body: "one day can go",
    updated: "2023-12-20T14:03:14.556Z",
  },
  {
    id: 2,
    title: "second note",
    body: "one day can go",
    updated: "2023-12-20T15:03:14.556Z",
  },
  {
    id: 3,
    title: "therd note",
    body: "one day can go",
    updated: "2023-12-20T11:03:14.556Z",
  },
];

class NotesAPI {
  static getAllNotes() {
    const savedNotes = JSON.parse(localStorage.getItem("notes-app")) || [];
    return savedNotes.sort((a, b) => {
      return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
    });
  }
  //JSON.parse(localStorage.getItem("notes-app"))
  static saveNote(noteToSave) {
    //1. existes or 2. not
    const notes = NotesAPI.getAllNotes();

    const existedNote = notes.find((n) => n.id == noteToSave.id);

    if (existedNote) {
      existedNote.title = noteToSave.title;
      existedNote.body = noteToSave.body;
      existedNote.updated = new Date().toISOString();
    } else {
      noteToSave.id = new Date().getTime();
      noteToSave.updated = new Date().toISOString();
      notes.push(noteToSave);
    }
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }

  static deleteNote(id) {
    const notes = NotesAPI.getAllNotes();
    const filterNotes = notes.filter((n) => n.id != id);
    localStorage.setItem("notes-app", JSON.stringify(filterNotes));
  }
}
console.log(NotesAPI.deleteNote(3));
