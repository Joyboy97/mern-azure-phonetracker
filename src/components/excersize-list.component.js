import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Outlet} from 'react-router-dom';

const Excersize = props => (
    <tr>
        <td>{props.excersize.username}</td>
        <td>{props.excersize.description}</td>
        <td>{props.excersize.duration}</td>
        <td>{props.excersize.date.substring(0,10)}</td>
        <td>
            <Link to={"/edit/"+props.excersize._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExcersize(props.excersize._id) }}>delete</a>
        </td>
    </tr>
)

export default class ExcersizeList extends Component {
    constructor(props){
        super(props);

        this.deleteExcersize = this.deleteExcersize.bind(this);

        this.state = {excersizes: []};
    }

    componentDidMount(){
       
        axios.get('http://localhost:5000/excersizes/')
            .then(response => {
                this.setState({excersizes: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteExcersize(id){
        axios.delete('http://localhost:5000/excersizes/'+id)
            .then(res => console.log(res.data));
        this.setState({
            excersizes: this.state.excersizes.filter(el => el._id !== id)
        })
    }

    excersizeList(){
        return this.state.excersizes.map(currentexcersize => {
            return <Excersize excersize={currentexcersize} deleteExcersize={this.deleteExcersize} key={currentexcersize._id}/>;
        })
    }


    render() {
        return (

            <div>
                <h3>Logged Excersizes</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        { this.excersizeList() }
                    </tbody>
                </table>
                <Outlet />
                <p>You are on the Excersize List component!</p>
            </div>
        )
    }
}