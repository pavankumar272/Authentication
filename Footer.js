import React, {Component} from 'react';
class Footer extends Component {
render() {
return (
<>
<div id="footer" class="container-filud bg-dark">
<div class="row  p-3">
    <div class="col-sm-2">
<h3 class="text-light">About</h3>
   <a href="#" >Contact Us </a><br></br>
   <a href="#" > About Us</a><br></br>
   <a href="#" > Careersa</a><br></br>
   <a href="#" >  Flipkart Stories</a><br></br>
   <a href="#" > Press</a><br></br>
   <a href="#" >  Flipkart Wholesale</a><br></br>
   <a href="#" >Corporate Information</a>
    </div>
    <div class="col-sm-2">
        <h3 class="text-light">Help</h3>
           <a href="#" >Payments</a><br></br>
           <a href="#" >Shoping</a><br></br>
           <a href="#" >Cancellation and return</a><br></br>
           <a href="#" >FAQ</a><br></br>
           <a href="#" >Report infrigement</a><br></br>
           <a href="#" >Privacy</a><br></br>
           <a href="#" >Sitemap</a>
            </div>
            <div class="col-sm-6 text-center">
                <h3 class="text-light">DatagraM</h3>
                <p class="text text-light" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ratione culpa possimus perferendis, esse eius doloremque sapiente est vero, facere quis itaque tenetur! Sed delectus quisquam rerum aperiam tempore tempora?</p>
  <button class="btn btn-primary">Share Now!</button>
            </div>
            <div class="col-sm-2">
                <i id="i" class="fas fa-shopping-bag p-2"></i><br></br>
               <i class="fab fa-facebook-square-primary p-2"></i>
            </div>

</div>
     </div>
            </>
);
}
}
export default Footer;