import React from 'react';
import { Link } from 'react-router-dom'; 

export class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:props.data.username,
            email:props.data.email,
            id:props.data.id
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(e){
        e.preventDefault();
        localStorage.setItem("aim_username",this.state.username);
        localStorage.setItem("aim_toid",this.state.id);
    }
    render(){
        return(   
            <div className='user' onClick={this.handleClick}>
                <span className='Name'>{this.state.username}</span>
                <span className='Email'>{this.state.email}</span>
            </div>
        )
    }
}

