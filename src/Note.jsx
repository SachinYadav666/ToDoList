import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="btn" onClick={deleteNote}>
        <DeleteIcon className="deleteIcon" />
      </button>
    </div>
  );
}

export default Note;
