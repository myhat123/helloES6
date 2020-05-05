import React from 'react';
import Welcome from './Welcome';

//带后缀.js也可以
//import Welcome from './Welcome.js';

function App() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }

export default App;