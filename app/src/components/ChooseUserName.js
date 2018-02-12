import React from 'react';
import PropTypes from 'prop-types';
import {Form, FormGroup, FormControl, Button, ControlLabel} from 'react-bootstrap';

class ChooseUserName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userName: '', editing: false};
    
    this.toggleEditing = this.toggleEditing.bind(this);
    this.triggerChooseUserName = this.triggerChooseUserName.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  triggerChooseUserName(e) {
    e.preventDefault();
    this.props.chooseUserName(this.state.userName);
    this.setState({editing: false});
  }

  updateState(e) {
    this.setState({userName: e.target.value});
  }

  toggleEditing(e) {
    e.preventDefault();
    this.setState({editing: true});
  }

  editForm() {
    return (
      <Form inline>
        <FormGroup controlId="formInlineUserName">
          <FormControl type="text" defaultValue={this.props.userName} onChange={this.updateState}/>
          {' '}
          <Button type="submit" onClick={this.triggerChooseUserName}>
            Change
          </Button>
        </FormGroup>
      </Form>
    );
  }

  editButton() {
    return (
      <Form inline>
        <FormGroup controlId="formInlineUserName">
          <FormControl type="text" defaultValue={this.props.userName} disabled/>
          {' '}
          <Button type="submit" onClick={this.toggleEditing}>
            Change
          </Button>
        </FormGroup>
      </Form>
    );
  }

  render() {  
    return (
      <div>
        {this.state.editing ? this.editForm() : this.editButton()}
      </div>
    );
  }
}

ChooseUserName.propTypes = {
  chooseUserName: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired
};

export default ChooseUserName;