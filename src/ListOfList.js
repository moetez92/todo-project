import React, { Component } from 'react';
import List from './List';
import { faBriefcase, faHome, faGamepad, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
export default class ListOfList extends Component {
    constructor(props){
        super(props)
        this.state = {
                       list:[
                           {label:"professional",icon:"pro",description:"pro",color:"primary",icon:faBriefcase},
                           {label:"Homesection",icon:"home",description:"home",color:"warning",icon:faHome},
                           {label:"Entertainement",icon:"entertainment",description:"Entertainment",color:"danger",icon:faGamepad},
                           {label:"Others",icon:"others",description:"others",color:"success",icon:faBoxOpen}
                            
                    
                    
                    
                    ],
                     
        }
     
    }

   
    render() {
        console.log(this.state.open);
        const list =   this.state.list.map(item => {
            return <List icon = {item.icon} color={item.color} label={item.label}/>
         });
        return (
            <div className="container" >
            <div className="row">
            {list}
            </div>
          
   
            </div>
                
         
        )
    }
}
