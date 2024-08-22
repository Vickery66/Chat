import React, { useEffect } from 'react';
import {useQuery,gql} from '@apollo/client'; 
import { User } from './User';
const Friend=gql`
   query{
  friends{
    username
    email
    id
  }
}
`
export function Friends(){
    const {data,loading,error}=useQuery(Friend);
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error!</p>;
    return (
        <div className='friends'>
            {
                data.friends.map((user,index)=>{
                    return (<User data={user} key={index}/>)
                })
            }
        </div>
    )
}