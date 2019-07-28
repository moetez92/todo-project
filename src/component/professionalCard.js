import React, { Component } from 'react'
import './mycard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DatePicker from "react-datepicker";
import { faPen,  faEllipsisH, faCalendar, faFlag, faEdit, faArrowUp, faArrowDown, faCheck, faTrashAlt, faCalendarPlus, faWindowClose } from '@fortawesome/free-solid-svg-icons';

export default class professionalCard extends Component {
  constructor(props){
    super(props)
    this.state={
        done:false ,
        open: false,
        displaystatus:false,
        editstate:false,
        text:"",
        id:this.props.id,
        priority:this.props.priority,
        ddate:this.props.date
    }
   this.handeltoggle=this.handeltoggle.bind(this);
   this.updatedisplay=this.updatedisplay.bind(this);
   this.edithandel=this.edithandel.bind(this);
   this.textupdate=this.textupdate.bind(this);
   this.changetext=this.changetext.bind(this);
   this.initstate=this.initstate.bind(this);
   this.prup = this.prup.bind(this);
   this.prdown = this.prdown.bind(this);
   this.done = this.done.bind(this);
   this.datechange = this.datechange.bind(this);
   this.changedate = this.changedate.bind(this);
   this.callback = this.callback.bind(this);
    
  }
 
  changedate(){
    const x=this.state.ddate;
    this.props.dup(this.state.id,x)
  }
  callback(){
    console.log("i'm a callback");
  }
  datechange(date,){
    this.setState({
      ddate:date
    })
    setTimeout(() => {
      this.props.dup(this.state.id,this.state.ddate);
   
      
    }, (1000));
  }
 done(){
   this.setState({
     done:!this.state.done
   })
 }
  edithandel(d){
     
     this.setState({
       
       editstate:true,
       text:d.target.value 
     })
  
     
     
  }
  changetext(e){
    this.setState({
      
      text:e.target.value
    })}
  textupdate(){
       
  const text=this.state.text
  
  this.props.updatetask(this.state.id,text)

    this.initstate();

  }
  prup(){
  let newp=null ; 
  const p = this.state.priority ; 
  if(p<3) newp = p+1 ;  
  else newp=p;
 
  this.props.pup(this.state.id,newp);
  }
  prdown(){
    let newp=null ; 
    const p = this.state.priority ; 
    if(p>1) newp = p-1 ; else newp=1 ; 
   
    this.props.pup(this.state.id,newp);
  }
  initstate(){
    this.setState({
   
      editstate:false,
      text:""
    })
   
  }

   updatedisplay(){
     this.setState(
      {
        displaystatus:!this.state.displaystatus
      }
       
     )
  
   }
   handeltoggle(){
    this.setState({
      open:!this.state.open 
    })

     
   }
   

    render() {
       
      const{text,priority,date,id,deletetask,updatetask,dup}=this.props ;
      console.log(this.state.ddate) ;
  const  textundone ="todo-text my-auto ";
  const textdone="todo-text my-auto  done " ;
  const textclass = this.state.done?textdone:textundone ;

      const periorityclass=(priority)=>{
        if(priority==1) return "text-success"
        else if  (priority==2) return "text-warning"
        else return "text-danger"
      };
     
      
      const display=this.state.displaystatus?"show":"";

      const dropdown = `dropdown-menu  ${display}`;
      
      {/* to-do item text sectio */ }
      const textv1= <div className="my-auto p-0 d-flex " > <p className={textclass}>{text} </p>  <span>&nbsp;</span>
      <span className="carditem"><FontAwesomeIcon icon = {faPen}/></span></div>
      const textv2 = <div className="my-auto d-flex "><input onChange={this.changetext}className="form-control input-item" 
      type="text"  placeholder={this.props.text}/>
       <button  onClick={this.textupdate} className="btn btn-success ml-2">Save</button> 
       <button  onClick={this.initstate} className="btn btn-secondary ml-2"><FontAwesomeIcon icon={faWindowClose}/></button> 
      </div>
       
      const textfinal=this.state.editstate?textv2:textv1;
     
      {/* is to day*/}
      const isToday = (date) => {
        const today = new Date()
        return date.getDate() == today.getDate() &&
          date.getMonth() == today.getMonth() &&
          date.getFullYear() == today.getFullYear()
      }
      const isTomorrow = (date) => {
        const today = new Date()
        return date.getDate() == today.getDate()+1 &&
          date.getMonth() == today.getMonth() &&
          date.getFullYear() == today.getFullYear()
      }
       
      const newdate=(date) =>{
        const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
        if(isToday(date)) return "Today"
        else if(isTomorrow(date)) return("Tomorrow")
        else return  date.getDate()+" "+monthNames[date.getMonth()];
      }
       
      
        return (
             
        
          <div className="todo-item d-flex mx-auto  mb-3 mt-3 bg-white">
            
                {/* checkbox section*/ }
                <div onClick={this.done} className="checkbox-border my-auto ml-2 mr-2 text-center">
                <FontAwesomeIcon className="checkbox-symbol " icon={faCheck}/>
                </div>
                {/* text section*/ }
                  {textfinal}
                 <div className=" menu-block d-flex ml-auto ">
                  {/* edit  section*/ }
                 <p className="my-auto todo-item-right edit-pen  " onClick={this.edithandel}><FontAwesomeIcon icon={faPen}/></p>
                {/* date section*/ }
                <p className="ml-2 my-auto ml-auto mr-2">{newdate(date)}</p>

                {/* priority section*/ }
                <p className="ml-2 my-auto ml-auto mr-2"><FontAwesomeIcon className={periorityclass(priority)} icon={faFlag}/></p>


                 {/* dropdown menu  section*/ }
                 <div className="dropdown menu-icon my-auto">
                 <div className=" mr-2 ml-2" data-toggle="dropdown" onClick={this.updatedisplay}><FontAwesomeIcon  icon={faEllipsisH} /></div>
                 <div className={dropdown}>
                 <li className="ml-3 mt-2" onClick={this.edithandel} ><FontAwesomeIcon icon={faPen}/><p className="d-inline-block ml-3">Edit</p> </li>
                 <li className="dropdown-divider"></li>
                 <li className="dropdown-header ml-4">Schedule</li>
                 <div ><DatePicker className="cursor hover mx-auto d-inline-block" dateFormat="MMMM d, yyyy"  onChange={this.datechange} selected={this.state.ddate}/></div>
                 
                 <li className="dropdown-divider"></li>
                 <li className="dropdown-header ml-4">Priority</li>
                 <li className="ml-3 mt-2" onClick={this.prup}><FontAwesomeIcon icon={faArrowUp}/><p className="d-inline-block ml-3">Priority Up</p> </li>
                 <li className="ml-3 mt-2"  onClick={this.prdown} ><FontAwesomeIcon icon={faArrowDown}/><p className="d-inline-block ml-3">Priority Down</p> </li>
                 <li className="dropdown-divider"></li>
                 <li className="ml-3 mt-2" onClick={deletetask}><FontAwesomeIcon icon={faTrashAlt}/><p className="d-inline-block ml-3">Delete</p> </li>
                 
                 </div>
                 </div>
                 </div>
         </div>
        
 


     
        )
    }
}
