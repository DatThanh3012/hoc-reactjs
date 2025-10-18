import React from "react";
import './DisplayInfor.scss';
import logo from '../logo.svg';

class DisplayInfor extends React.Component {
    constructor(props){
        console.log(">>> call constructor:1 ");
        super(props);
        this.state = {
            isShowListUser: true
        }
    }


    componentDidMount(){
        console.log(">>> run componentDidMount");
        setTimeout(() => {
            document.title = "New message"
        }, 3000);
    }
componentDidUpdate(prevProps, prevState){
    console.log(">>> run componentDidUpdate: ", "prevState:", prevState, "currentState:", this.state);
}

    handleShowHide = () =>{
      this.setState({
        isShowListUser: !this.state.isShowListUser
      })
    }
    render() {
       console.log(">>> call render: ");
        const {listUsers} = this.props;
            
        console.log("check listUsers:", listUsers);
        return (
       <div className="display-infor-container">
                    <img src={logo} alt="Logo"/>
                    <div>
                        <span onClick={() =>{this.handleShowHide()}}>
                            {this.state.isShowListUser === true ? "Hide" : "Show"}

                        </span>
                    </div>

                    
                    {this.state.isShowListUser &&
                <>
                {listUsers.map((user, index) => {

                    return (
                        <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                            <div>My name is {user.name} </div>
                            <div>I am {user.age} years old</div>
                            <button onClick={()=>this.props.handleDeleteUser(user.id)}>Delete</button>
                            <hr/>
                        </div>
                    )                
                })}
                </>
                   }
       </div>
        );
    }
}

export default DisplayInfor;