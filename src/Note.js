import {useQuery,gql} from '@apollo/client'

import { useState,React,useEffect } from 'react';
//这是获取所有聊天记录
const Get_notes=gql`
query notes($to: String!) {
  notes(to: $to) {
    content
    to
  }
}
`


function divide(notes){
    const rev_notes=[...notes].reverse();
    return (
        <div>
            {
                rev_notes.map((note,index)=>{
                    if(note.to===sessionStorage.getItem("aim_toid"))
                        return (
                            <div className='my' key={index}>
                                <span className='chat_name_my'>{sessionStorage.getItem("username")}</span>
                                <span className='chat_content_my'>{note.content}</span>
                                <hr></hr>
                            </div>
                        )
                    else
                        
                        return (
                            <div className='his' key={index}>
                                <span className='chat_name_his'>{sessionStorage.getItem("aim_username")}</span>
                                <span className='chat_content_his'>{note.content}</span>
                                <hr></hr>
                            </div>
                        )
                    })
                  
            }
        </div>
    )
}
function Notes(){
    const [aim_id, setAimId] = useState(sessionStorage.getItem("aim_toid") || '');
    const {data,loading,error,refetch}=useQuery(Get_notes,{variables:{to:aim_id},});//pollInterval:500,
    useEffect(() => {  
        const timer = setInterval(() => {  
            const newAimId = sessionStorage.getItem("aim_toid");
            setAimId(newAimId); // 更新 aim_id 并触发 useQuery 重新运行
            refetch({ fetchPolicy: 'network-only' });
        }, 500);  
         return () => clearInterval(timer); // 组件卸载时清理定时器  
      }, [aim_id,refetch]); 
    
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error!</p>;
    return (
        <div className='notes'>
            {divide(data.notes)}
        </div>
    )
}

export default Notes;
