import React, { useState } from 'react'

function Notes() {
    const [notes, setNotes] = useState([]);
    const [curNote, setCurNote] = useState("");

    // const [car, setCar] = useState({

    // })

    // setCar({ ...Card, color: 'red' });

    function updateCurNote(event) {
        setCurNote(event.target.value);
    }

    function addNote(event) {
        const newNotesArray = [...notes, curNote];
        setNotes(newNotesArray);
    }

    const ulStyle = {
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '20px'
    }
    return (
        <>
            <input type="text" onChange={updateCurNote} />
            <button onClick={addNote}>Submit</button>
            <ul style={ulStyle}>
                {
                    notes.map((note, index) => {
                        return <li key={index}>
                            <SingleNote note={note} />
                        </li>
                    })
                }
            </ul>
        </>
    );
}

export default Notes;