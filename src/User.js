import React, { useEffect } from 'react';
import { useState } from 'react';

export const User=({data})=>{
    const [username,setUsername]=useState(data.username);
    const [email,setEmail]=useState(data.email);
    const [id,setId]=useState(data.id);
    const handleClick=()=>{
        sessionStorage.setItem("aim_username",username);
        sessionStorage.setItem("aim_toid",id);
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
