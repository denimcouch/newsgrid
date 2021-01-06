import React from "react";

export default function FooterNewsletter() {
 return (
    <div>
      <h3>Email Newsletter</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      <form >
        <input type="email" placeholder="Enter Email"/>
        <input type="submit" value="Subscribe" className='btn btn-primary'/>
      </form>
    </div>
  );
}