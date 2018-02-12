import React from 'react';
import PropTypes from 'prop-types';
import words from 'random-words';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as roomActions from '../actions/roomActions';
import {Form, FormGroup, FormControl, Button, ControlLabel} from 'react-bootstrap';

function generateID(){
    return words({exactly: 3, join: '-'});
}

class CreateRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: generateID() };

        this.createRoom = this.createRoom.bind(this);
    }

    createRoom(e){
        e.preventDefault();
        this.props.actions.createRoom(this.state.id, this.props.userName);
        this.setState({ id: generateID() });
    }

    render() {
        return (
            <Form inline>
                <FormGroup controlId="formInlineUserName">
                    {!this.props.userName ? <p>You need a Name to create a room</p> : ''}
                    <Button type="submit" onClick={this.createRoom} disabled={!this.props.userName}>
                        Create room {this.state.id}
                    </Button>
                </FormGroup>
            </Form>
        );
    }
}

function mapStateToProps(state) {
    return {userName: state.currentUser};
}
  
function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(Object.assign(roomActions), dispatch)};
}

CreateRoom.propTypes = {
    userName: PropTypes.string.isRequired,
    actions: PropTypes.shape({
        createRoom: PropTypes.func.isRequired
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoom);