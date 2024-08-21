import React from 'react';
import {useQuery,gql} from '@apollo/client'; 
const me=gql`
    query{
  me{
    id
    username
    avatar
    email
  }
}
`

export function Me(){
    const {data,loading,error}=useQuery(me);
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error!</p>;
    return (
        <div className='me'>
          {data.me.username}
          <div className='avatarContain' backgroundImage={data.me.avatar}>
          </div>
        </div>
    );
}