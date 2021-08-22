import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import img from './images/CreateRepository.png';
import CreateRepositoryNameDesc from './NameDesc'

function PublicPrivateFunction() {
  return (
      <div style={{padding: '10px'}}>
          <CssBaseline/>
          <div id='RadioGroup'>
          <input type="radio" id="html" name="fav_language" value="HTML" style={{verticalAlign: '-6px'}}/> <span><strong>Public</strong></span>
            <br/>
              <span style={{marginLeft: '25px'}}>Anyone on the internet can see ths repository/. You choose who can commit.</span>
            <br/>
            <br/>
            
          <input type="radio" id="html" name="fav_language" value="HTML" style={{verticalAlign: '-6px'}}/> <span><strong>Private</strong></span>
            <br/>
              <span style={{marginLeft: '25px'}}>You choose who can see and commit to this repository. </span>
            <br/>
          </div>

          <br />
          
          {/* Header line */}
          <hr style={{width: 'auto'}}/>

      </div>
  );
}

export default PublicPrivateFunction;