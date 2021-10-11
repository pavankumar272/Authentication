import React, { Component } from 'react';
import './styles/foundation.min.css';
import './styles/custom.css';
import Routes from './routes';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

class App extends Component {
constructor(){
super();
this.state={
appName: "ReactJS  Example",
home: false
}
}
render() {
return (
<div className="off-canvas-wrapper">
<div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
<div className="off-canvas-content" data-off-canvas-content>

<Header name={this.state.appName}/>
<Routes name={this.state.appName}/>
<hr/>
<Footer/>
</div>
</div>
</div>
);
}
}
export default App;