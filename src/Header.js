import React from 'react';
const name="E-Chat";
export class Header1 extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        return (
            <header className='header1'>{name}</header>
        )
    }
}