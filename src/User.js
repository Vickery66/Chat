import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { useState } from 'react';
// export class User extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             username:props.data.username,
//             email:props.data.email,
//             id:props.data.id
//         }
//         this.handleClick=this.handleClick.bind(this);
//     }
//     handleClick(e){
//         e.preventDefault();
//         localStorage.setItem("aim_username",this.state.username);
//         localStorage.setItem("aim_toid",this.state.id);
//     }
//     render(){
//         return(   
//             <div className='user' onClick={this.handleClick}>
//                 <span className='Name'>{this.state.username}</span>
//                 <span className='Email'>{this.state.email}</span>
//             </div>
//         )
//     }
// }

export const User=({data})=>{
    const [username,setUsername]=useState(data.username);
    const [email,setEmail]=useState(data.email);
    const [id,setId]=useState(data.id);
    const handleClick=()=>{
        localStorage.setItem("aim_username",username);
        localStorage.setItem("aim_toid",id);
    }
    useEffect(()=>{
        setUsername(data.username);
        setEmail(data.email);
        setId(data.id);
    },[data]);
    return(   
        <div className='user' onClick={handleClick}>
            <span className='Name'>{username}</span>
            <span className='Email'>{email}</span>
        </div>
    );
}
