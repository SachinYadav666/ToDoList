import React, { useState } from 'react';

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
 const [expand,setExpand]=useState(false);

 const expandIt=()=>{
     setExpand(true);
 }

 const btoNormal=()=>{
  setExpand(false);
}
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  };

  const handleAddNote = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: ""
    });
  };

  return (
    <div className="main_note" onDoubleClick={btoNormal}>
    {expand?
      <input
        type="text"
        name="title"
        value={note.title}
        onChange={handleChange}
        placeholder="Title"
      />
    :null}
      <textarea
        name="content"
        value={note.content}
        onChange={handleChange}
        placeholder="Take a note..."
        rows="3"
        onClick={expandIt}
        
      />
     {expand?
      <button onClick={handleAddNote}>Add</button>:null}
    </div>
  );
};

export default CreateNote;
