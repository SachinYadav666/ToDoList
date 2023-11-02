import React from 'react'

function Footer() {
    const year =new Date().getFullYear();
  return (
   <>
    <footer className='foot'>
<p>copyright ©️ {year}</p>
    </footer>
   </>
  );
}

export default Footer