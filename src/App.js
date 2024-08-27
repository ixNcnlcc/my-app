import React, { useState } from 'react';
function App() {
  const [image, setImage] = useState('https://upload.wikimedia.org/wikipedia/commons/e/ec/Persian_Cat_7_UK.jpg');  // Initialize state with the word 'Hello'

  const toggleImage = () => {
    // Use an if statement to toggle between the words 'Hello' and 'Goodbye'
    if (image === 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Persian_Cat_7_UK.jpg') {
      setImage('https://upload.wikimedia.org/wikipedia/commons/1/18/Dog_Breeds.jpg');
    } else {
      setImage('https://upload.wikimedia.org/wikipedia/commons/e/ec/Persian_Cat_7_UK.jpg');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Display the current image */}
      <img src={image} alt="Toggle" style={{ width: '50%', maxWidth: '500px' }} />
      {/* Button to toggle the image */}
      <div>
        <button onClick={toggleImage} style={{ marginTop: '20px' }}>Toggle Image</button>
      </div>
    </div>
  );
}

export default App;