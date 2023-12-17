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
    const savedNotes = notes || [];
    return savedNotes.sort((a, b) => {
      return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
    });
  }
  //JSON.parse(localStorage.getItem("notes-app"))
  static saveNote() {
    //1. existes or 2. not
  }

  deleteNote() {}
}
console.log(NotesAPI.getAllNotes());
