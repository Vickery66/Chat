import React from 'react';
import {useQuery,gql,useApolloClient,useMutation} from '@apollo/client'; 
import { useState } from 'react';
const New_Note=gql`
    mutation newNote($content: String!, $to: String!){
  newNote(content: $content, to: $to){
    content
  }
}
`

export function Input(){
    const [newNote, { data, loading, error }] = useMutation(New_Note);
    const [value,setValue]=useState('');
    const handleChange=(e)=>{
        setValue(e.target.value);
    }
    const handleClick=()=>{
        newNote({variables:{
            content:value,
            to:sessionStorage.getItem("aim_toid")
        }});
        setValue('');
    }
    const handleKeyDown=(e)=>{
        if(e.key==='Enter'){
            newNote({variables:{
                content:value,
                to:sessionStorage.getItem("aim_toid")
            }});
            setValue('');
        }
    }
    return(
        <>
        <textarea className='input' value={value} onChange={handleChange} onKeyDown={handleKeyDown}/>
        <button className='send' onClick={handleClick}>发送</button>
        </>
    );
}


