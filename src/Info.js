import React from 'react';
import {useQuery,gql} from '@apollo/client'; 
import { User } from './User';
import { Friends } from './friends';
import {BrowserRouter as Router,Outlet} from 'react-router-dom';

const Me=gql`
    query{
  me{
    id
    username
    email
  }
}
`

export function Info(){
    const {data,loading,error}=useQuery(Me);
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error!</p>;
    return (
        <div className='info'>
          <div>
            好友:
            <Friends/>
          </div>
          <Outlet/>
        </div>
    );
}