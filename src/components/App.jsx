import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./createArea";

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(note) {
        setNotes([...notes, note]);
    }

    function removeNote(id) {
        
        setNotes(prevNotes  => {
            return prevNotes.filter( (item, index) => (index !== id))
        });
    }

    return <div>
        <Header />
        <CreateArea addNote={addNote} />
        {notes.map( (note, index) => (
            <Note removeNote={removeNote} id={index} key={index} title={note.title} content={note.content} />
        ))}
        <Footer />
    </div>
}

export default App;