import React, { Component } from 'react'
import logo from './to-do.png'
export default class navbar extends Component {
    render() {
        return (

        <div>


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#"><img src={logo}/>To-Do-App</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
         
      </li>
      
    </ul>
    <form class="form-inline ">
      <input class="form-control " type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>


        </div>
            
        )
    
    }
}
