import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponents extends React.Component {


    state = {
        listUsers: [
            {id:1, name:"Dat", age:21},
            {id:2, name:"Mike", age:15},
            {id:3, name:"John", age:25},
        ]
    }

    handleAddNewUser = (userObj) =>{
        this.setState({
            listUsers: [userObj,...this.state.listUsers]
        })
    }
    handleDeleteUser = (userId) =>{
        let listUsersClone = [...this.state.listUsers];
        listUsersClone = listUsersClone.filter(item => item.id !== userId)
        this.setState({
            listUsers: listUsersClone
        })
    }
    //JSX
    render() {
        
    return (
        <>
            <div className="a"> 

                <AddUserInfor 
                        handleAddNewUser={this.handleAddNewUser}
                />
                <DisplayInfor  
                    listUsers={this.state.listUsers}
                    handleDeleteUser={this.handleDeleteUser}
                />

            </div>
            <div className="b">
                
            </div>
        </>
    );
    




    }
}
export default MyComponents;