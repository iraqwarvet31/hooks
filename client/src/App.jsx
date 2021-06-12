import React, { useState } from 'react';

const App = () => {
  const [ count, setCount ] = useState(0);

  return (
    <div className="main">
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrememnt</button>
      <span>{count}</span>
    </div>
  )
}

export default App;