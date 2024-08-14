import React from 'react';
import {useQuery,gql,useApolloClient,useMutation} from '@apollo/client'; 
import { User } from './User';
import { Friends } from './friends';
import {BrowserRouter as Router,Route, Routes,Outlet, Link} from 'react-router-dom';
import Notes from './Note';
import { Input } from './Input';
import { Chat } from './Chat';
const Me=gql`
    query{
  me{
    id
    username
    email
  }
}
`

export function Home(){
    const {data,loading,error}=useQuery(Me);
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error!</p>;
    return (
        <div className='home'>
          <div>
            个人信息:
            <User data={data.me}/>
          </div>
          <div>
            好友:
            <Friends/>
          </div>
          <p className='leader'>点击<Link to='/Home/Chat'>开始聊天</Link>后选择好友即可开始聊天</p>
          <Outlet/>
        </div>
    );
}