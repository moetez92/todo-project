import React, { Component } from 'react'
import './professional.css'
import  bored from '../bored.png' ; 
import "react-datepicker/dist/react-datepicker.css";
import ProfessionalCard from './professionalCard'

 
export default class done extends Component {
 
    render() {
        
    const{tasks,addtask,deletetask,updatetask,pup,updatedate,size,dup}=this.props ; 
     const a = tasks.map(item =>{
if(item.status=="done") return item ; 
     } )
     console.log(a);
      {/*  add section section*/}
     const notask = size==0? <img className="icon " src={bored}/> :"";
    
    {/*  card section*/}
        const cards=tasks.map(item => {
          
           if(item.status==="done"){
            return  <ProfessionalCard key={item.id} 
            id={item.id}
            text={item.text} 
            priority={item.priority}
            date={item.date}
            deletetask={()=>deletetask(item.id)}
            updatetask={updatetask}
            pup={pup}
            dup={dup}
            updatedate={updatedate}
            
            
            />
        
           }
           });
        return (
           <div> 
               
                
              
                
                 {cards}
                 
           </div>
        )
    }
}
