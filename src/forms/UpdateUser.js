import React, {Component} from 'react';

import UserConsumer from "../context";
import axios from "axios";


class UpdateUser extends Component {

    state = {
        name: "",
        department: "",
        salary: ""
    };
    changeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    };


     componentDidMount = async () => {

         const {id} = this.props.match.params;
         const response = await axios.get(`http://localhost:3001/users/${id}`);
         const {name, salary, department} = response.data;

         this.setState({
             name,
             salary,
             department
         });
     };


    updateUser = async (dispatch, e) => {
        e.preventDefault();

        const {id} = this.props.match.params;

        const {name, salary, department} = this.state;
        const updatedUser = {
            name,
            salary,
            department
        };
        const response = await axios.put(`http://localhost:3001/users/${id}`,updatedUser);

        dispatch({type: "UPDATE_USER", payload : response.data});

        this.props.history.push("/");

    };

    render() {
        const {name, department, salary} = this.state;

        return <UserConsumer>

            {
                value => {

                    const {dispatch} = value;
                    return (

                        <div className="col-md-8 mb-4">

                                <div className="card">
                                    <div className="card-header">
                                        <h4>Update User Form</h4>
                                    </div>
                                    <div className="card-body">

                                        <form onSubmit={this.updateUser.bind(this, dispatch)}>
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input type="text" name="name" id="id" placeholder="Enter Name"
                                                       className="form-control" value={name} onChange={this.changeInput}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">Department</label>
                                                <input type="text" name="department" id="department" placeholder="Enter department"
                                                       className="form-control" value={department}
                                                       onChange={this.changeInput}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">Salary</label>
                                                <input type="text" name="salary" id="salary" placeholder="Enter salary"
                                                       className="form-control" value={salary} onChange={this.changeInput}/>
                                            </div>
                                            <button className="btn btn-danger btn-block" type="submit">Update User</button>
                                        </form>
                                    </div>
                                </div>

                        </div>
                    );
                }
            }
        </UserConsumer>
    }
}

export default UpdateUser;