import './App.scss'
import React from 'react';
import {useDispatch, useSelector} from "react-redux";

function App() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  return (
    <div className="App">
      <div className="container border border-info">
        container
      </div>

      <pre>
        {JSON.stringify(state,null,2)}
      </pre>
    </div>
  );
}

export default App;
