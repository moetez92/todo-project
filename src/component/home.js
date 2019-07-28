import React, { Component } from 'react';
import {Link,BrowserRouter as Router} from 'react-router-dom';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

export default class home extends Component {
    constructor(props){
        super(props);
        this.state={
        username:"",
        password:"",
        confirmedpassword:"",
        coulissant: true ,
         
        show:false,
        showsuccess:false,
        showfail:false
          
        
        }
      this.coulisser=this.coulisser.bind(this);
      this.usernamechange=this.usernamechange.bind(this);
      this.passwordchange=this.passwordchange.bind(this);
      this.passwordconfirmedchange=this.passwordconfirmedchange.bind(this);
      this.show=this.show.bind(this);
      this.success=this.success.bind(this);
      this.fail=this.fail.bind(this);
      
    }
    fail(){
         
        this.setState({
            showfail:true,
            showsuccess:false,
            show:true
           
        })
        this.show();
    }

    success(){
        this.setState({
            
            showsuccess:true,
            show:true 
        })
    }
    show(){
      
        this.setState({
            show:false 
        })
    }

   usernamechange(d){
     this.setState({
        username:d.target.value
     })
      
   }
   passwordchange(d){
       this.setState({
           password:d.target.value
       })
   }
   passwordconfirmedchange(d){
    this.setState({
        confirmedpassword:d.target.value
    })
}
   





    coulisser(){
        this.setState(
           {
            coulissant:!this.state.coulissant
           } 
           
        )
    }

    render() {
        console.log(this.state.show)
        const usernamesize = this.state.username.length

        const match= this.state.password===this.state.confirmedpassword?true:false;
       
        const matchtext=match?<p className="text-success">passwords match</p>:
       
        <p className="text-danger">passwords don't match</p>
        const matchfinal=this.state.password.length&&this.state.confirmedpassword.length?matchtext:"";
        console.log(this.state.confirmedpassword);
        console.log(this.state.password);
        const usernameok=usernamesize>5?<p className="text-success">Looks good</p>:"";
        
        const{connect}=this.props;
        const coulissant =this.state.coulissant?" text-center coulissant gauche ":"coulissant droit" ; 









const display=this.state.show?"":"hide";
     const successstyle = `alert alert-success   ${display}`;
     const failstyle = `alert alert-danger    ${display}`;
if(this.state.show & this.state.showsuccess){
    alert=<div className={successstyle} role="alert">
    <strong>Bingo !</strong> you have successfully signed Up
    <button type="button"  onClick={this.show} className="close"  >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
}
else if (this.state.show & this.state.showfail){
    alert=<div className={failstyle} role="alert">
    <strong>NO !</strong> Check your data
    <button type="button"  onClick={this.show} className="close"  >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
}

 
const linksuccess =    <Link onClick={this.success}   className="btn ml-4 btn-primary" >Sign Up</Link>
const linkfail =    <Link onClick={this.fail}   className="btn ml-4 btn-primary" >Sign Up</Link>


const alertsucess= <div className={successstyle} role="alert">
<strong>Bingo !</strong> you have successfully signed Up
<button type="button"  onClick={this.show} className="close"  >
  <span aria-hidden="true">&times;</span>
</button>
</div>;



        return (
            <div className="home">
<Router><main>
 
 {alertsucess}
 





<div className={coulissant}>
              <h3 className="mt-5"> Plan your activities and control</h3>  
              <h3> your progress online </h3>
             <div className="icon-div">
             <FontAwesomeIcon className="icon" icon={faRocket}/> 
             </div>
               
              
             </div>


        










           <div className="main-block   mx-auto d-flex ">
               <div className="left-block  ">
                 <div className="text-block d-flex mt-5">
                     <p className="ml-4 mr-2 textbold mb-1" onClick={this.coulisser}>Sign in </p> <p className="  mr-2 mt-3">or Sign Up</p>
                 </div>

                  <form>                

                  <div className="form-group ml-4">
                     <label>Username</label>
                     <input type="text" onChange={this.usernamechange} className=" input-field form-control" required/>
                     {usernameok}
                 </div>
                 <div className="form-group ml-4">
                     <label>Password</label>
                     <input onChange={this.passwordchange}type="password" className=" input-field form-control" required />
                 </div>
                
                 <div className="form-group ml-4">
                     <label>Confirm password</label>
                     <input onChange={this.passwordconfirmedchange} type="password" className="input-field form-control" required/>
                     {matchfinal}
                 </div>
                 <div className="button-section d-flex">
                     
                     {linkfail}
                     <p className="membership-text ml-4 my-auto  ">I'm already a member</p>
                 </div>
                      
                  </form>
             
      
               </div>

               <div className="right-block ">

                
                 <div className="text-block d-flex mt-5">
                <div className="d-flex "> <p className="ml-4 mr-2 mt-3">Sign in  or </p> <p className="textbold mb-1" onClick={this.coulisser}>Sign Up</p></div>
                 </div>
                 <div className="form-group ml-4">
                     <label>Username</label>
                     <input type="text" className=" input-field form-control"/>
                 </div>
                 <div className="form-group ml-4">
                     <label>Password</label>
                     <input type="password" className=" input-field form-control"/>
                 </div>
                 
                 <div className="button-section d-flex ">
                    

                     <Link  to='/listoflist' className="btn ml-4 btn-primary mx-auto" onClick={connect}>Sign in</Link>
                     
                    
                   
                 </div>



               </div>
           </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </main></Router>
             
           </div>



           
                
            
            
             
        )
    }
}
