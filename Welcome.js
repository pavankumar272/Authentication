import React, {Component} from 'react';
import './Welcome.css';
class Welcome extends Component {
render() {
return (
    <>
    <br></br>
  <div id="commit" className="container-fiuld mt-4">
      <h1  class="text text-dark p-3">DATAGRAM</h1>
      <h2 class="text text-primary pb-4">Share Your Photos With Friends</h2>
      <p class="text pb-4"> Effective feedback shows learners their current level of performance, and lets them know what they need to do to reach a higher level. </p>
       <a id="btn" class="btn m-2" href="/Signup" role="button">Signup</a><br></br>
       <a  id="btn" class="btn m-2 " href="/Login" role="button">Login</a>
  </div>


   
    </>
);
}
}
export default Welcome;