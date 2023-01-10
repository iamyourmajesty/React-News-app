import React from 'react'


const Contact = () => {
  return (
     
        <section id="contact">
       <h1 class="h-primary center">Contact Us</h1>

    

       <div id="contact-box">
        <form action="POST" data-netlify="true">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" name="name" id="name" placeholder="Enter your name" />
            </div>
            <div class="form-group">
             <label for="name">Email:</label>
             <input type="text" name="email" id="email" placeholder="Enter your email" />
         </div>
         <div class="form-group">
             <label for="name">Phone Number:</label>
             <input type="phone" name="phone" id="phone" placeholder="Enter your Phone num" />
         </div>
         <div class="form-group">
             <label for="name">Message:</label>
             <textarea name="message" id="message" cols="30" rows="10"></textarea>
         </div>
         <div class="form-group">
             <input type="submit" class="btn1" value="send message" />
         </div>
        </form>
       </div>
   </section>
    
    
  )
}

export default Contact