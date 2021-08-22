import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import img from './images/CreateRepository.png';
import CreateRepositoryNameDesc from './NameDesc'

function InitRepo() {
  return (
      <div style={{padding: '10px'}}>
          <CssBaseline/>
          <strong>
            <span>
              Initialize this repository with:
            </span>
            <br />
          </strong>

          <span>
              Skip this step if you're importing an existing repository.
          </span>
          <br />
          <div id="CheckBoxGroup">
            <input style={{marginRight: '8px'}} type="checkbox" id="READMECB" name="READMECheckBox"></input>
            <strong><span>Add a README file</span></strong>
            <p style={{marginLeft: '25px', marginTop: '1px'}}>
              <span>This is where you can write a long description for your project. </span>
              <a href="" style={{textDecoration: 'none'}}><span style={{color: '#25a9da'}}>Learn more</span></a>
            </p>
            <input style={{marginRight: '8px'}} type="checkbox" id="GitIgnoreCB" name="READMECheckBox"></input>
            <strong><span>Add .gitignore</span></strong>
            <p style={{marginLeft: '25px', marginTop: '1px'}}>
              <span>Choose which files not to track froma list of templates. </span>
              <a href="" style={{textDecoration: 'none'}}><span style={{color: '#25a9da'}}>Learn more</span></a>
            </p>
            <input style={{marginRight: '8px'}} type="checkbox" id="LicenseCB" name="READMECheckBox"></input>
            <strong><span>Choose a license</span></strong>
            <p style={{marginLeft: '25px', marginTop: '1px'}}>
              <span>A license tells others what they can and can't do with your code. </span>
              <a href="" style={{textDecoration: 'none'}}><span style={{color: '#25a9da'}}>Learn more</span></a>
            </p>
          </div>
          {/* Header line */}
          <hr style={{width: 'auto'}}/>
      </div>
  );
}

export default InitRepo;