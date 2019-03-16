import React, {Component} from 'react';

const UserContext = React.createContext();
 // Provider, Consumer

const reducer = (state, action) => {
    switch (action.type) {

        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => action.payload !== user.id)
            };
        default:
            return state;
    }
};

 export class UserProvider extends Component {

    state = {
        users: [
            {
                id : 1,
                name : "Javascript ",
                salary : "50002",
                department : "Bilişim"
            },
            {
                id : 2,
                name : "React ",
                salary : "5300",
                department : "Bilişim"
            },
            {
                id : 3,
                name : "React-Native",
                salary : "5000",
                department : "Bilişim"
            }
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    };

    render() {
        return (
            <UserContext.Provider value = {this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;