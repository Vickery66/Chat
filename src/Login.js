import React from 'react';
import {useQuery,gql,useApolloClient,useMutation} from '@apollo/client'; 
import { Link } from "react-router-dom"
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
export class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            email:"",
            password:"",
        }
        this.handleUsernameChange=this.handleUsernameChange.bind(this);
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handlePasswordChange=this.handlePasswordChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleUsernameChange(e){
        e.preventDefault();
        this.setState({username:e.target.value});
    }
    handleEmailChange(e){
        e.preventDefault();
        this.setState({email:e.target.value});
    }
    handlePasswordChange(e){
        e.preventDefault();
        this.setState({password:e.target.value});
    }
    handleSubmit(e){
        e.preventDefault();
        localStorage.setItem("username",this.state.username);
        localStorage.setItem("email",this.state.email);
        localStorage.setItem("password",this.state.password);
        localStorage.setItem("submited",1);
    }   
    render(){
        return(
            <form className="form" onSubmit={this.handleSubmit}>
                <span>
                    <label> username:</label>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/>
                </span>
                <span>
                    <label>    email:</label>
                    <input type='text' value={this.state.email} onChange={this.handleEmailChange}/>
                </span>
                <span>
                    <label> password:</label>
                    <input type='password' value={this.state.password} onChange={this.handlePasswordChange}/>
                </span>
                <button className="btn" type='submit'> 提交 </button>
            </form>
        )
    }
}

export function Login_UP(){
     const [signUp, { data, loading, error }] = useMutation(SignUp,{onCompleted:data=>{
        localStorage.setItem('token',data.signUp);
     }});
    return(
       <button className="btn1" onClick={()=>{
        signUp({variables:{
            username:localStorage.getItem("username"),
            email:localStorage.getItem("email"),
            password:localStorage.getItem("password")}});
       }}><Link to="/Home">创建</Link></button>
       
    );
}

export function Login_IN(){
    const [signIn, { data, loading, error }] = useMutation(SignIn,{onCompleted:data=>{
        localStorage.setItem('token',data.signIn);
     }});
   return(
      <button className="btn2" onClick={()=>{
       signIn({variables:{
           username:localStorage.getItem("username"),
           email:localStorage.getItem("email"),
           password:localStorage.getItem("password")}});
      }}><Link to="/Home">登录</Link></button>
   );
}
