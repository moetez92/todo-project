import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import DatePicker from "react-datepicker";
import './rightmenu.css'
export default class rightmenu extends Component {
    constructor(props){
        super(props);
        this.state={
            startDate:new Date()
        }
    }
    render() {
        return (
            <div className="col-3 right text-center">
               <div className="mt-4">
               <div className="btn mb-5 mt-5 btn-secondary">
                     <FontAwesomeIcon  className="settings" icon={faCogs}/>
                 </div>
                 <div className="text-secondary"><h3>Today</h3></div>
                 <div>
                 <DatePicker className="datepicker my-auto mt-5"
                   inline
                   selected={this.state.startDate}
                   
                     />
                 </div>


               </div>
            </div>
        )
    }
}
