import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import img from './images/CreateRepository.png';
import { InputOutlined } from '@material-ui/icons';
import './index.css'
import * as Placeholder from './images/sample1.png';

function CreateRepositoryNameDesc() {
  return (
      <div style={{padding: '10px'}}>
          <CssBaseline/>
          {/* Heading Line */}
          <h1>Create a new Repository</h1>

          {/* Description Line */}
          <p>
              A repository contains all project file, including the revision history. Already have a project repository elsewhere? <b><a href="" style={{color: '#3399cc', textDecoration: 'none'}}>Import a repository</a></b>
          </p>

            {/* Header line */}
            <hr style={{width: 'auto'}}/>

            {/* Grid Formatting for multicolumn design */}
            <div className='row'>

                {/* Column A */}
                <div className="column">
                    <p>
                        <b>Owner<span style={{color: 'red'}}> *</span></b>
                        <br/>
                        <select style={{borderRadius: '8px', marginTop: '3px', padding: '8px', color: 'black', boxShadow: '0 0 7px #24c7db'}} name="OwnerList" id="OwnerDropdownID">
                            <option value="Polar-app">Polar-App</option>
                        </select>
                    </p>
                </div>

                {/* Column B */}
                <div className="column">
                    <span style={{fontSize: "30px", verticalAlign: '-50px', marginLeft: '-40px'}}><strong>/</strong></span>
                </div>

                {/* Column C */}
                <div className="column">
                    <p style={{marginLeft: '-175px'}}>
                        <b>Repository Name<span style={{color: 'red'}}> *</span></b>
                        <br/>
                        <input style={{borderRadius: '8px', marginTop: '3px', padding: '8px', color: 'black', width: '250px'}} name="RepoNameTXT"/>
                    </p>
                </div>
            </div>

            <br/>

            {/* Repo Name Hint/Help */}
          <span>
            Great Repository names are short and memorable. Need inspiration? How about <span style={{color: '#43bc74'}}><strong>super-dallop</strong></span>?
          </span>

          <br/><br/>

            {/* Description Line */}
            <span>
                <strong style={{fontSize: '14px'}}>Description</strong><span style={{fontSize: '10px'}}> (optional)</span>
            </span>

          <br/>

          <span>
              <input style={{borderRadius: '8px', marginTop: '5px', padding: '8px', marginBottom: '6px', color: 'black', width: '950px'}}/>
          </span>
          <hr style={{width: 'auto'}}/>
      </div>
  );
}

export default CreateRepositoryNameDesc;