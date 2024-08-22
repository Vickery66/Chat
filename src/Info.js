import React from 'react';
import { Friends } from './friends';

export function Info(){
    return (
        <div className='info'>
          <div>
            好友:
            <Friends/>
          </div>
        </div>
    );
}