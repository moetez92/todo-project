import React, { Component } from 'react'
import {Link,NavLink} from 'react-router-dom' ; 
import './leftmenu.css' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faBell, faCalendarDay, faCalendarWeek, faFilter, faTimesCircle, faCheck, faHome } from '@fortawesome/free-solid-svg-icons';
export default class Leftmenu extends Component {
    constructor(props){
        super(props);
         this.state={
             inbox:"",
             notification:"",
             Today:"",
             nextweek:"",
             filter:""
         }
         this.initstate=this.initstate.bind(this);
         this.handelinbox=this.handelinbox.bind(this);
         this.handelnotification=this.handelnotification.bind(this);
         this.handeltoday=this.handeltoday.bind(this);
         this.handelnextweek=this.handelnextweek.bind(this);
         this.handelfilter=this.handelfilter.bind(this);
    }
    initstate(){
        this.setState({
            inbox:"",
            notification:"",
            Today:"",
            nextweek:"",
            filter:""
        })

    }

    handelinbox(){
        this.initstate();
        this.setState({
            inbox:"sctive"
        })
    }
    handelnotification(){
        this.initstate();
        this.setState({
            notification:"sctive"
        })
    }
    handeltoday(){
        this.initstate();
        this.setState({
            Today:"sctive"
        })
    }
    handelnextweek(){
        this.initstate();
        this.setState({
            nextweek:"sctive"
        })
    }
    handelfilter(){
        this.initstate();
        this.setState({
            filter:"sctive"
        })
    }



    render() {

        const inboxstyle=`menuitem text-center  d-flex align-items-center my-2 ${this.state.inbox}`;
        const notifstyle=`menuitem text-center  d-flex align-items-center my-2 ${this.state.notification}`;
        const todaystyle=`menuitem text-center  d-flex align-items-center my-2 ${this.state.Today}`;
        const nextweekstyle=`menuitem text-center  d-flex align-items-center my-2 ${this.state.nextweek}`;
        const filterstyle=`menuitem text-center  d-flex align-items-center my-2 ${this.state.filter}`;
        return (
            <div className="col-2 leftmenu    ">

            
            {/* inbox item*/}
            
            {/* notification item*/}
            <Link to='listoflist' className=" d-flex align-items-center my-4"><FontAwesomeIcon className="homeicon mx-auto" icon={faHome}/></Link>
            <Link to="/notification" style={{ textDecoration: 'none' }}  onClick={this.handelnotification}>
            <div className={notifstyle}><FontAwesomeIcon className="ml-1" icon={faBell}/>
            <p className="my-auto ml-4 itemtext">Notifications</p></div>
            </Link>
            {/* Today item*/}
            <Link to="/today" style={{ textDecoration: 'none' }}  onClick={this.handeltoday}>
            <div className={todaystyle}><FontAwesomeIcon className="ml-1" icon={faCalendarDay}/>
            <p className="my-auto ml-4 itemtext">Today</p></div>
            </Link>
            {/* nextweek item*/}
            <Link to="/tomorrow" style={{ textDecoration: 'none' }}  onClick={this.handelnextweek}> 
            <div  className={nextweekstyle}><FontAwesomeIcon className="ml-1" icon={faCalendarWeek}/>
            <p className="my-auto ml-4 itemtext">Tomorrow</p></div></Link>
            {/* Filter item*/}
            <Link to='/done' style={{ textDecoration: 'none' }}  onClick={this.handelfilter}>
            <div className={filterstyle}><FontAwesomeIcon className="ml-1" icon={faCheck}/>
            <p className="my-auto ml-4 itemtext">Done</p></div>
            </Link>
            <Link to='/undone' style={{ textDecoration: 'none' }}  onClick={this.handelinbox}>
            <div className={inboxstyle}><FontAwesomeIcon className="ml-1" icon={faTimesCircle}/>
            <p className="my-auto ml-4 itemtext">Undone</p></div>
            </Link>
             <Link className="btn btn-primary" to='/professional'  >click me</Link>
            </div>
        )
    }
}
