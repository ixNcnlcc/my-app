import React, { useState } from 'react';
function App() {
  const [image, setImage] = useState('https://upload.wikimedia.org/wikipedia/commons/e/ec/Persian_Cat_7_UK.jpg'); 
  const [caption, setCaption] = useState('Cat');  // Initialize state with the word 'Cat'
  const toggleImage = () => {
    // Use an if statement to toggle between the words 'Hello' and 'Goodbye'
    if (image === 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Persian_Cat_7_UK.jpg') {
      setImage('https://upload.wikimedia.org/wikipedia/commons/1/18/Dog_Breeds.jpg');
      setCaption('Dog');
    } else {
      setImage('https://upload.wikimedia.org/wikipedia/commons/e/ec/Persian_Cat_7_UK.jpg');
      setCaption('Cat');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Display the current image */}
      <img src={image} alt="Toggle" style={{ width: '50%', maxWidth: '500px' }} />
      {/* Display the current caption */}
    <p>{caption}</p>
      {/* Button to toggle the image */}
      <div>
        <button onClick={toggleImage} style={{ marginTop: '20px' }}>Toggle Image</button>
      </div>
    </div>
  );
}

export default App;