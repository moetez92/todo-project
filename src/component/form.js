import React, { Component } from 'react'
import uuid from "uuid"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCalendarDay, faFlag} from '@fortawesome/free-solid-svg-icons';
import DatePicker from "react-datepicker";
import './form.css';
export default class form extends Component {
    constructor(props){
    super(props)
    this.state={
        id  :  uuid(),
        affiche: true ,
        startDate: new Date(),
        text:"",
        category:this.props.category,
         addtask:this.props.addtask
    }
    this.addToogle=this.addToogle.bind(this);
    this.datechange=this.datechange.bind(this);
    this.addfinal=this.addfinal.bind(this);
    this.changetext=this.changetext.bind(this);
    }
    addfinal(){
     const task = {id:this.state.id,
        text:this.state.text,
        priority:1,
        date:this.state.startDate,
        status:"undone",
        user_id:1,
        category:this.state.category};
     this.state.addtask(task);
   
    }

    addToogle(){
        this.setState({
            affiche:!this.state.affiche
        })
      
       }
       
    datechange(d){
        this.setState({
            startDate:d 
        })
     
    }
    changetext(e){
       this.setState({
           text:e.target.value
       })
    }
    render() {
       
        let addfinal ; 
        let second =  <div className=" second mx-auto mt-3 d-flex"><div className="add add a task d-inline-block" onClick={this.addToogle}><FontAwesomeIcon icon={faPlus}/><span className="text-lead ml-3">Add a Task</span></div></div>
        let first= <div className="addform mx-auto card-body text-center bg-info">
       <div className="input-group ">
        <input type="text" class="form-control" onChange={this.changetext}/>
       <div className="input-group-append">
         <span className="input-group-text"><FontAwesomeIcon icon={faCalendarDay} /></span>
         <DatePicker className="form-control" dateFormat="MMMM d, yyyy"  selected={this.state.startDate}  onChange={this.datechange}/>
        </div>
       
        </div>
        <div className="mt-2 mb-2">
            <FontAwesomeIcon className="ml-2 text-warning" icon={faFlag}/>
            <FontAwesomeIcon className="ml-2 text-danger " icon={faFlag}/>
            <FontAwesomeIcon className="ml-2  text-success" icon={faFlag}/>
           
         
            </div>
        <button className="btn btn-secondary my-2 " onClick={this.addfinal}>Save</button>
        <button className="btn btn-warning ml-2 my-2 " onClick={this.addToogle}>Cancel</button>
       
         </div>
      addfinal = this.state.affiche? second : first;
        
       
       
         return   addfinal ; 
    }
   
}
