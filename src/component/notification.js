import React, { Component } from 'react'
import Cardn from './notificationcard';
export default class notification extends Component {
    render() {
        const{notifications}=this.props;
        return (
             notifications.map(item=>{
                 return <Cardn text={item.text}/>
             })
        )
    }
}
