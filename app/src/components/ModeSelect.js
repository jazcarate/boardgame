import React from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

const ModeSelect = (props) => {
  function triggerChangeMode(e) {
    props.changeMode(e.target.value);
  }

  function renderModeSelect() {
    const modes = ["ruby", "javascript", "clojure", "coffeescript", "crystal", "erlang", "php", "python", "swift"];
    return modes.map((mode, i) => {
      return <option key={i} value={mode}>{mode}</option>;
    });
  }
  
  return (
    <FormGroup controlId="formControlsSelect" onChange={triggerChangeMode}>
      <ControlLabel>change language</ControlLabel>
      <FormControl componentClass="select" defaultValue={props.mode}>
        {renderModeSelect()}
      </FormControl>
    </FormGroup>
  );
};

export default ModeSelect;

