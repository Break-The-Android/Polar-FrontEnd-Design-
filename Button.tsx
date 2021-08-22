import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import img from './images/CreateRepository.png';
import CreateRepositoryNameDesc from './NameDesc'

function Button() {
  return (
      <div style={{padding: '10px'}}>
          <CssBaseline/>
          <button style={{borderRadius: '6px', backgroundColor: "#85e199", padding: '6px', border: 'none', color: 'white', paddingLeft: '15px', outline: 'none', paddingRight: '15px', textDecoration: 'none'}}>Create Repository</button>
      </div>
  );
}

export default Button;