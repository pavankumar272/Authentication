import React, {Component} from 'react';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';
import './Signup.css';
class Signup extends Component {
constructor(props){
super(props);
this.state = {
username: '',
password: '',
email: '',
name: '',
redirectToReferrer: false
};
this.signup = this.signup.bind(this);
this.onChange = this.onChange.bind(this);
}

signup() {
if(this.state.username && this.state.password && this.state.email && this.state.name){
PostData('signup',this.state).then((result) => {
let responseJson = result;
if(responseJson.userData){
sessionStorage.setItem('userData',JSON.stringify(responseJson));
this.setState({redirectToReferrer: true});
}
else
alert(result.error);
});
}
}
onChange(e){
this.setState({[e.target.name]:e.target.value});
}
render() {
if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
return (<Redirect to={'/home'}/>)
}
return (
<>
            <div id="com" class="container pt-4">
            <div id="form" class="form-group mt-5">
            <a id="annar" href="#">  <h1 id="h1" for="name" class=" p-3">SIGN <span>UP</span></h1></a>
              <input type="text" name="name" id="name" class="form-control p-2 m-2" placeholder="Name" aria-describedby="helpId" onChange={this.onChange}/>
              <input type="text" name="email" id="email" class="form-control p-2 m-2" placeholder="Email" aria-describedby="helpId" onChange={this.onChange}/>
              <input type="text" name="username" id="username" class="form-control p-2 m-2" placeholder="Username" aria-describedby="helpId" onChange={this.onChange}/>
              <input type="password" name="password" id="password" class="form-control p-2 m-2" placeholder="Password" aria-describedby="helpId" onChange={this.onChange}/><br></br>
            <button type="submit" id="sam"  value="signin" onClick={this.signup}>Continue..</button><br></br>
            <br></br>
<a href="/Login">You are Already Signup</a>
              
            </div>
            </div>
            <br></br>
            </>
);
}
}
export default Signup;