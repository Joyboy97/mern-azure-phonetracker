import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props){
        super(props);
        //bind the this keyword to the methods
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //use state to create variables
        //this will update the page when the state is changed
        this.state = {
            username: '',

        }

    }
    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username,   
        }
        console.log(user);
        //this is where you would send the data to the backend
        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));
        
        
        this.setState({
            username: ''
        })
    }
    render() {
        return (
            <div>
                <h3>Create New User Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        {/* //this is the text box */}
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User Log" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}