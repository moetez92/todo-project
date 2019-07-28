import React, { Component } from 'react'
import './style-card.css' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faBriefcase, faTasks } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom' ; 

export default class List extends Component {

   
    render() {
       
       const{label,color,icon}=this.props;
       const badge = `bagde text-center  mx-auto badge-pill badge-${color} text-white mt-1`;
       const  cardstyle= `d-flex justify-content-center card  shadow text-info  inside-card bg-${color}`;
       const buttonstyle=`btn btn-outline-${color} my-auto m-1`;
       const textstyle=` text-${color} text-center  mt-3`
       const link = `${label}` ;
        return (
     
             <div className="card  d-flex  mx-auto my-card">
            <div className={cardstyle} ><FontAwesomeIcon className="inside-icon mx-auto"icon={icon}/></div>
            <div className={badge}><h4>3</h4></div>
            <div className={textstyle}><h5 className="text-card ">{label}</h5></div>
            <div  className="dividor mt-3"></div>
            <Link className={buttonstyle} to={link}>Add a task <FontAwesomeIcon icon={faTasks}/></Link>
            
           
 
         </div>
   
        )
    }
}
