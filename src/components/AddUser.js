import React, {Component} from 'react';
import posed from 'react-pose';
import UserConsumer from "../context";
import axios from "axios";

const Animation = posed.div(
    {
        visible: {
            opacity: 1,
            applyAtStart: {
                display: "block"
            }
        },
        hidden: {
            opacity: 0,
            applyAtEnd: {
                display: "none"
            }
        }
    }
);

class AddUser extends Component {

    state = {
        visible: true,
        name: "",
        department: "",
        salary: ""
    };

    changeVisibility = (e) => {

        this.setState({
            visible: !this.state.visible
        });
    };

    changeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    };

    addUser = async (dispatch, e) => {

        const {name, department, salary} = this.state;

        const newUser = {
            name,
            salary,
            department
        };

        const response = await axios.post("http://localhost:3001/users", newUser);

        dispatch({type: "ADD_USER",payload:response.data});

        e.preventDefault();
    };

    /*changeName = (e) => {

        this.setState({
            name: e.target.value
        })
    };
    changeDepartment = (e) => {

        this.setState({
            department: e.target.value
        })
    };

    changeSalary = (e) => {

        this.setState({
            salary: e.target.value
        })
    };*/

    render() {
        const {visible, name, department, salary} = this.state;

        return <UserConsumer>

            {
                value => {

                    const {dispatch} = value;
                    return (

                        <div className="col-md-8 mb-4">

                            <button onClick={this.changeVisibility}
                                    className="btn btn-dark btn-block mb-2">{visible ? "Hide Form" : "Show Form"}</button>

                            <Animation pose={visible ? "visible" : "hidden"}>
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Add User Form</h4>
                                    </div>
                                    <div className="card-body">

                                        <form onSubmit={this.addUser.bind(this, dispatch)}>
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
                                            <button className="btn btn-danger btn-block" type="submit">Add User</button>
                                        </form>
                                    </div>
                                </div>
                            </Animation>

                        </div>
                    );
                }
            }
        </UserConsumer>
    }
}

export default AddUser;