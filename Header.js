import React, { Component } from 'react';
import './Header.css';
class Header extends Component {
render() {
return (
<> <br></br>
<nav id="nav" class="navbar navbar-expand-sm navbar-light  fixed-top">
    <a class="navbar-brand text-primary" href="/">DM</a>
    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
                <a class="nav-link text-primary" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-primary" href="#">Link</a>
            </li>
            
        </ul>
        
    </div>
</nav>
</>
);
}
}
export default Header;