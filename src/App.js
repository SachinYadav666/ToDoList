import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

function App() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (newNote) => {
    setAddItem((prevData) => {
      return [...prevData, newNote];
    });
  };

  const onDelete = (id) => {
    setAddItem((olddata) =>
      olddata.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={() => onDelete(index)} // Pass the index to onDelete
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
