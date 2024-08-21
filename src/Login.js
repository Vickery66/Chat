import React from 'react';
import { useState } from 'react';
import {useQuery,gql,useApolloClient,useMutation} from '@apollo/client'; 
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
const SignUp=gql`
    mutation($username: String!, $email: String!, $password: String!){
  signUp(username: $username, email: $email, password: $password)
}
`;

const SignIn=gql`
  mutation($username: String!, $email: String!, $password: String!){
  signIn(username: $username, email: $email, password: $password)
}
`;

export function Login(){
    const [signUp] = useMutation(SignUp,{onCompleted:data=>{
        sessionStorage.setItem('token',data.signUp);
     }});
    const [signIn] = useMutation(SignIn,{onCompleted:data=>{
        sessionStorage.setItem('token',data.signIn);
    }});
    const navigate=useNavigate();
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleUsernameChange=(e)=>{
        setUsername(e.target.value);
    }
    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
    }
    const handleSignIn=()=>{
        sessionStorage.setItem("username",username);
        sessionStorage.setItem("email",email);
        sessionStorage.setItem("password",password);
        signIn({variables:{
            username:username,
            email:email,
            password:password}}
        );
        navigate('/Home');
    }
    const handleSignUp=()=>{
        sessionStorage.setItem("username",username);
        sessionStorage.setItem("email",email);
        sessionStorage.setItem("password",password);
        signUp({variables:{
            username:username,
            email:email,
            password:password}}
        );
        navigate('/Home');
    }
    return(
        <form className="form">
            <span>
                <label> username:</label>
                <input type='text' value={username} onChange={handleUsernameChange}/>
            </span>
            <span>
                <label>    email:</label>
                <input type='text' value={email} onChange={handleEmailChange}/>
            </span>
            <span>
                <label> password:</label>
                <input type='password' value={password} onChange={handlePasswordChange}/>
            </span>
            <button className='btn1' onClick={handleSignUp}>创建</button>
            <button className='btn2' onClick={handleSignIn}>登录</button>
        </form>
    );
}
