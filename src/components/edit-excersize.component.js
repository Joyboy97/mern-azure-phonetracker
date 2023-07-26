import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';

export default class EditExcersize extends Component {
    constructor(props){
        super(props);
        //bind the this keyword to the methods
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //use state to create variables
        //this will update the page when the state is changed
        this.state = {
            username: '',
            description: '',
            duration: 0,
            users: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/excersizes/'+this.props.match.params.id)
        .then(response => {
            this.setState({
                username: response.data.username,
                description: response.data.description,
                duration: response.data.duration,
                date: new Date(response.data.date),

            })
        })
        .catch(function(error){
            console.log(error);
        })
    }

    onChangeUsername(e){
        this.setState({

            username: e.target.value
        });
    }
    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });
    }
    onChangeDuration(e){
        this.setState({
            duration: e.target.value
        });
    }
    onChangeDate(date){
        this.setState({
            date: date
        });
    }
    onSubmit(e){
        e.preventDefault();

        const excersize = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }
        console.log(excersize);
        //this is where you would send the data to the backend
        axios.post('http://localhost:5000/excersizes/update/'+this.props.match.params.id, excersize)
            .then(res => console.log(res.data));

        window.location = '/';
    }



    render() {
        return (
            <><div>
                <h3>Edit Excersize Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        {/* //this is the text box */}
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername} />
                        {this.state.users.map(function (user) {
                            return (
                            <option
                                key={user}
                                value={user}>{user}
                            </option>)
                        })}
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    {/* this is a text box */}
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription} />
                </div><div className="form-group">
                    <label>Duration (in minutes): </label>
                    {/* this is a text box */}
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.duration}
                        onChange={this.onChangeDuration} />
                </div><div className="form-group">
                    <label>Date: </label>
                    {/* this is a date picker */}
                    <div>
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate} />
                    </div>
                </div><div className="form-group">
                    <input type="submit" value="Edit Excersize Log" className="btn btn-primary" />
                </div>
               </form>
            </div>
            </>
        )
    }
}