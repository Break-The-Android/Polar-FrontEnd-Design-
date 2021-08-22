import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import img from './images/CreateRepository.png';
import CreateRepositoryNameDesc from './NameDesc'
import PublicPrivateFunction from './publicPrivate';
import InitRepo from './initRepo';
import Button from './Button';

function CreateRepository() {
  return (
      <div style={{padding: '10px'}}>
          <CssBaseline/>
          <img src={img} alt="Create Repository" width={600} height={630}/>

          <br/>
          <br/>
          <CreateRepositoryNameDesc/>
          <PublicPrivateFunction/>
          <InitRepo/>
          <Button/>
      </div>
  );
}

export default CreateRepository;
