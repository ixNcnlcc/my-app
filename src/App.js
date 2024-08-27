import React, { useState } from 'react';
function App() {
  const [word, setWord] = useState('Hello');  // Initialize state with the word 'Hello'

  const toggleWord = () => {
    // Use an if statement to toggle between the words 'Hello' and 'Goodbye'
    if (word === 'Hello') {
      setWord('Goodbye');
    } else {
      setWord('Hello');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{word}</h1>  {/* Display the current word */}
      <button onClick={toggleWord}>Toggle Word</button>  {/* Button to toggle the word */}
    </div>
  );
}

export default App;