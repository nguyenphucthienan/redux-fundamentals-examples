import React, { useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.scss';

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className='container center'>
      <h1>Redux</h1>
    </div>
  );
}

export default App;
