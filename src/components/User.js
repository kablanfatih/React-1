import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UserConsumer from "../context";

class User extends Component {
    static defaultProps = {
        name: "Bilgi Yok",
        salary: "Bilgi Yok",
        department: "Bilgi Yok"
    };

    onDeleteUser = (dispatch, e) => {
        const {id} = this.props;

        dispatch({type : "DELETE_USER", payload : id})

    };

    render() {
        // Destructing
        const {name, department, salary} = this.props;

        return <UserConsumer>
            {
                value => {
                    const {dispatch} = value;

                    return (
                        <div className="col-md-8 mb-4">
                            <div className="card">
                                <div className="card-header d-flex justify-content-beetween">
                                    <h4 className="d-inline">{name}</h4>
                                    <i className="far fa-trash-alt pull-left" style={{cursor: "pointer"}}
                                       onClick={this.onDeleteUser.bind(this, dispatch)}/>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Maaş: {salary}</p>
                                    <p className="card-text">Department: {department}</p>
                                </div>
                            </div>

                        </div>
                    )
                }

            }
        </UserConsumer>

        /*
          );*/
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired
};

export default User;