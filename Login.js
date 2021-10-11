import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {PostData} from '../../services/PostData';

class Login extends Component {
constructor(){
super();
this.state = {
username: '',
password: '',
redirectToReferrer: false
};
this.login = this.login.bind(this);
this.onChange = this.onChange.bind(this);
}
login() {
if(this.state.username && this.state.password){
PostData('login',this.state).then((result) => {
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
if (this.state.redirectToReferrer) {
return (<Redirect to={'/home'}/>)
}
if(sessionStorage.getItem('userData')){
return (<Redirect to={'/home'}/>)
}
return (
    <>
<div id="com" class="container pt-4">
            <div id="form" class="form-group mt-5">
            <a id="annar" href="#">  <h1 id="h1" for="name" class=" p-3">SIGN <span>UP</span></h1></a>
             
              <input type="text" name="username" id="username" class="form-control p-2 m-2" placeholder="Username" aria-describedby="helpId" onChange={this.onChange}/>
              <input type="password" name="password" id="password" class="form-control p-4 m-2" placeholder="Password" aria-describedby="helpId" onChange={this.onChange}/><br></br>
            <button type="submit" id="sam"  value="signin" onClick={this.login}>Continue..</button><br></br>
            <br></br>
<a href="/Signup">Create new account</a>
              
            </div>
            </div>
            <br></br>
            </>
);
}
}
export default Login;