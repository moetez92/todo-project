import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './navbar' ;
import Leftmenu from './Leftmenu' ;
import Rightmenu from './rightmenu' ;
import Home from './component/home';
import Done from './component/done';
import Undone from './component/undone';
import Today from './component/today'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ListOfList from './ListOfList';
import Todoslist from './todoslist';
import Professional from './component/professional';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { throws } from 'assert';
import Homesection from './component/Homesection';
import Entertainement from './component/entertainement';
import Others from './component/others';
import axios  from 'axios';
import professional from './component/professional';
import Tomorrow from './component/tomorrow';
import Notification from './component/notification'


class App  extends Component{
  constructor(props){
    super(props)
    this.state={
      users:[{id: 1 , username:"moetez",password:"honoloulou"}],
      tasks:[{
        id:1,
        id_user:2,
        text:"hi",
        category:"professional",
        status:"done",
        priority:1,
        date:new Date()
      }, 
      {
        id:2,
        id_user:2,
        text:"halay",
        category:"professional",
        status:"undone",
        priority:1,
        date:new Date()
      }
    ],
        connecte:false ,
        notifications:[{text:"hhhh"}]   
    }
    this.addtask=this.addtask.bind(this);
    this.deletetask=this.deletetask.bind(this);
    this.updatetask=this.updatetask.bind(this);
    this.connect=this.connect.bind(this);
    this.pup=this.pup.bind(this);
    this.dup=this.dup.bind(this);
    this.updatedate=this.updatedate.bind(this);
    this.addnotification = this.addnotification.bind(this);
  }

  addnotification(id){
    const message=[{text:"you've added a new todo-item"},{text:"you've modified a  todo-item"},{text:"you've deleted a todo-item"}];
    const notiftoadd=message[id];
    const newnotifications=[...this.state.notifications,notiftoadd];
    this.setState({
      notifications:newnotifications
    })
  }
  





















  connect(){
    this.setState({
      connecte:!this.connecte
    })
  }

  updatetask(id,task){
    const text=task;
    console.log(text);
   const newtasks=this.state.tasks.map(item=>{
     if(id===item.id)    {return{...item,text}}
     else return item 
        }
   )
   this.setState({
     tasks:newtasks
   })
   setTimeout(() => {
    this.addnotification(1);
 }, 1000);
   }
  
 
 
pup(id,p){
  const priority=p;
   
 const newtasks=this.state.tasks.map(item=>{
   if(id===item.id)    {return{...item,priority}}
   else return item 
      }
 )
 this.setState({
   tasks:newtasks
 })
 }

 dup(id,p){
   console.log("hi");
  const date=p;
   
 const newtasks=this.state.tasks.map(item=>{
   if(id===item.id)    {return{...item,date}}
   else return item 
      }
 )
 this.setState({
   tasks:newtasks
 })
 }

 

 

updatedate(id,d){
  const date=d;
   
 const newtasks=this.state.tasks.map(item=>{
   if(id===item.id)    {return{...item,date}}
   else return item 
      }
 )
 this.setState({
   tasks:newtasks
 })
 }


 


  addtask(example){

   const newtasks=[...this.state.tasks,example]
     this.setState({
       tasks:newtasks
     })
     setTimeout(() => {
        this.addnotification(0);
     }, 1000);
  }
  deletetask(id){
    const newtasks = this.state.tasks.filter(item =>item.id!=id);
    this.setState({
      tasks:newtasks
    })
    setTimeout(() => {
      this.addnotification(2);
   }, 1000);
  }
 render(){
    
    const size = this.state.tasks.length ; 
    this.state.tasks.sort((a,b)=>(a.priority>b.priority)?-1:1);
     console.log(this.state.tasks);
    const xx =   <Router>
    <main>

<div className="container-fluid ">
<div className="row  ">
<Leftmenu/>
<div className="col-7">


<Switch>
      <Route path='/listoflist' exact component={ListOfList}/>
      <Route path='/todos' component={Todoslist}/>
       
      <Route path='/professional' component={()=>
      <Professional size ={size} updatetask={this.updatetask}
       deletetask={this.deletetask} addtask={this.addtask} tasks={this.state.tasks}
        pup={this.pup} updatedate={this.updatedate} dup={this.dup}
       />}/>

     <Route path='/notification' component={()=>
      <Notification notifications={this.state.notifications} size ={size} updatetask={this.updatetask}
       deletetask={this.deletetask} addtask={this.addtask} tasks={this.state.tasks}
        pup={this.pup} updatedate={this.updatedate} dup={this.dup}
       />}/>
        <Route path='/done' component={()=>
      <Done size ={size} updatetask={this.updatetask}
       deletetask={this.deletetask} addtask={this.addtask} tasks={this.state.tasks}
        pup={this.pup} updatedate={this.updatedate} dup={this.dup}
       />}/>
         <Route path='/notification' component={()=>
      <Notification size ={size} updatetask={this.updatetask}
       deletetask={this.deletetask} addtask={this.addtask} tasks={this.state.tasks}
        pup={this.pup} updatedate={this.updatedate} dup={this.dup}
       />}/>

        <Route path='/undone' component={()=>
      <Undone size ={size} updatetask={this.updatetask}
       deletetask={this.deletetask} addtask={this.addtask} tasks={this.state.tasks}
        pup={this.pup} updatedate={this.updatedate} dup={this.dup}
       />}/>
        <Route path='/today' component={()=>
      <Today size ={size} updatetask={this.updatetask}
       deletetask={this.deletetask} addtask={this.addtask} tasks={this.state.tasks}
        pup={this.pup} updatedate={this.updatedate} dup={this.dup}
       />}/>
        <Route path='/tomorrow' component={()=>
      <Tomorrow size ={size} updatetask={this.updatetask}
       deletetask={this.deletetask} addtask={this.addtask} tasks={this.state.tasks}
        pup={this.pup} updatedate={this.updatedate} dup={this.dup}
       />}/>


      <Route path='/Homesection' component={()=>
      <Homesection size ={size} updatetask={this.updatetask}
       deletetask={this.deletetask} addtask={this.addtask} tasks={this.state.tasks}
        pup={this.pup} updatedate={this.updatedate} dup={this.dup}
       />}/> 

       <Route path='/Entertainement' component={()=>
      <Entertainement size ={size} updatetask={this.updatetask}
       deletetask={this.deletetask} addtask={this.addtask} tasks={this.state.tasks}
        pup={this.pup} updatedate={this.updatedate} dup={this.dup}
       />}/> 

      <Route path='/others' component={()=>
      <Others size ={size} updatetask={this.updatetask}
       deletetask={this.deletetask} addtask={this.addtask} tasks={this.state.tasks}
        pup={this.pup} updatedate={this.updatedate} dup={this.dup}
       />}/> 
 
        
      
      </Switch>
</div>

 <Rightmenu/>
</div>

</div>

    
    </main>
  </Router>

   const homefinal = this.state.connecte?"":<Home connect={this.connect}/>
   const router = this.state.connecte?xx:""

  return (
    <div className="App">
     <Navbar/>
     {homefinal}
     {router}
  
    </div>
  );
 }
}

export default App;
