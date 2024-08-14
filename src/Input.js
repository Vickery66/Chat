import React from 'react';
import {useQuery,gql,useApolloClient,useMutation} from '@apollo/client'; 

const New_Note=gql`
    mutation newNote($content: String!, $to: String!){
  newNote(content: $content, to: $to){
    content
  }
}
`
export function Send(){
    const [newNote, { data, loading, error }] = useMutation(New_Note);
    return (
        <button className='send' onClick={
            ()=>{
                newNote({variables:{
                    content:localStorage.getItem("content"),
                    to:localStorage.getItem("aim_toid")
                }});
            }
        }>发送</button>
    )
}
export class Input extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:""
        }
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        e.preventDefault();
        this.setState({value:e.target.value});
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        localStorage.setItem("content",this.state.value);
        this.setState({value:''});
    }
    render(){
        const value=this.state.value;
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" className='input' value={value} onChange={this.handleChange}/>
            </form>
        )
    }
}


