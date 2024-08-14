import React from 'react';
import {useQuery,gql,useApolloClient,useMutation} from '@apollo/client'; 
import { User } from './User';
const Friend=gql`
    query{
  users{
    id
    username
    email
  }
}
`
export function Friends(){
    const {data,loading,error,fetchMore}=useQuery(Friend);
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error!</p>;
    return (
        <div className='friends'>
            {
                data.users.map((user)=>{
                    return (<User data={user}/>)
                })
            }
        </div>
    )
}