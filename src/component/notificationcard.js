import React, { Component } from 'react'
import './mycard.css';
export default class notificationcard extends Component {
    render() {
        const {text,date}=this.props;
        return (
            <div>
           

           <div className="notification-card bg-white mt-4 ">
              <p className="ml-2 my-auto textnotif">{text}</p>  
            </div>



            </div>
            
        )
    }
}
