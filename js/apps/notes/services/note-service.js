import { Utils } from "../../../services/utils.service.js";

export const noteService = {
  getNotes,
  addNewNote,
  updateNote,
  deleteNote,
  updateNoteStatus,
};

var gNotes = _createNotes();

function _createNotes() {
  const notes = Utils.loadFromStorage("gNotes");
  if (!notes) {
    let defaultNotes = [
      
      {
        id: Utils.getRandomId(),
        type: "noteTodo",
        isPinned: true,
        createdAt: new Date().toLocaleString(),
        editedAt: "",
        isOnEdit: false,
        info: {
          title:'Todooammmm',
          todos: [
            {
              id: Utils.getRandomId(),
              txt: "Learn Routes in Vue",
              isDone: false,
              doneAt: null,
            },
            {
              id: Utils.getRandomId(),
              txt: "Finish This Sprint!!!!",
              isDone: false,
              doneAt: null,
            },
            {
              id: Utils.getRandomId(),
              txt: "Make Shaksuka",
              isDone: false,
              doneAt: null,
            },
          ],
        },
        style: {
          backgroundColor: "#ffffff",
        },
      },
      {
        id: Utils.getRandomId(),
        type: "noteImage",
        isPinned: true,
        createdAt: new Date().toLocaleString(),
        editedAt: "",
        isOnEdit: false,
        info: {
          title:'Check out my belly',
          url:
            "https://media.tenor.com/images/6afb17492c5b0a711b51afe70e24d3c4/tenor.gif",
        },
        style: {
          backgroundColor: "#ffffff",
        },
      },
      {
        id: Utils.getRandomId(),
        type: "noteText",
        isPinned: true,
        createdAt: new Date().toLocaleString(),
        editedAt: "",
        isOnEdit: false,
        info: {
          title:'Best Team!',
          txt: "Asaf and Idov!!!!",
        },
        style: {
          backgroundColor: "#ffffff",
        },
      },
     
      {
        id: Utils.getRandomId(),
        type: "noteAudio",
        isPinned: false,
        createdAt: new Date().toLocaleString(),
        editedAt: "",
        isOnEdit: false,
        info: {
          title:'Simply Audio',
          url:
            "https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_5MG.mp3",
        },
        style: {
          backgroundColor: "#ffffff",
        },
      },
      {
        id: Utils.getRandomId(),
        type: "noteText",
        isPinned: false,
        createdAt: new Date().toLocaleString(),
        editedAt: "",
        isOnEdit: false,
        info: {
          title:'Check Our App',
          txt: "Kololoooo This Worksss",
        },
        style: {
          backgroundColor: "#ffffff",
        },
      },
      {
        id: Utils.getRandomId(),
        type: "noteText",
        isPinned: false,
        createdAt: new Date().toLocaleString(),
        editedAt: "",
        isOnEdit: false,
        info: {
          title:'Edit This',
          txt: "Edit meeee",
        },
        style: {
          backgroundColor: "#ffffff",
        },
      },
      {
        id: Utils.getRandomId(),
        type: "noteText",
        isPinned: false,
        createdAt: new Date().toLocaleString(),
        editedAt: "",
        isOnEdit: false,
        info: {
          title:'Idovvv',
          txt: "Idov was Here.",
        },
        style: {
          backgroundColor: "#ffffff",
        },
      },
      {
        id: Utils.getRandomId(),
        type: "noteVideo",
        isPinned: false,
        createdAt: new Date().toLocaleString(),
        editedAt: "",
        isOnEdit: false,
        info: {
          title:'Listen To ME',
          url: "https://www.youtube.com/embed/tgbNymZ7vqY",
        },
        style: {
          backgroundColor: "#ffffff",
        },
      },
      {
        id: Utils.getRandomId(),
        type: "noteVideo",
        isPinned: false,
        createdAt: new Date().toLocaleString(),
        editedAt: "",
        isOnEdit: false,
        info: {
          title:'Listen To ME',
          url: "https://www.youtube.com/watch?v=Lq8bpo9KWa8",
        },
        style: {
          backgroundColor: "#ffffff",
        },
      },
    ];
    return defaultNotes;
  } else return notes;
}
function _getNoteIdx(noteId) {
  return gNotes.findIndex((note) => note.id === noteId); //! add if not what happend
}

function getNotes() {
  return Promise.resolve(gNotes);
}

function addNewNote(type, info) {
  var newNote = {
    id: Utils.getRandomId(),
    type,
    title:'Note Title',
    isPinned: false,
    createdAt: new Date().toLocaleString(),
    editedAt: "",
    isOnEdit: false,
    info,
    style: {
      backgroundColor: "#ffffff",
    },
  };
  gNotes.push(newNote);
  Utils.storeToStorage("gNotes", gNotes);
}

function updateNote(updatedNote) {
  updatedNote.editedAt = new Date().toLocaleString();
  const noteIdx = _getNoteIdx(updatedNote.id);
  gNotes.splice(noteIdx, 1, updatedNote);
  Utils.storeToStorage("gNotes", gNotes);
}

function deleteNote(noteId) {
  const noteIdx = _getNoteIdx(noteId);
  gNotes.splice(noteIdx, 1);
  Utils.storeToStorage("gNotes", gNotes);
}

function updateNoteStatus(noteId) {
  const noteIdx = _getNoteIdx(noteId);
  gNotes[noteIdx].isPinned = !gNotes[noteIdx].isPinned;
  Utils.storeToStorage("gNotes", gNotes);
}
