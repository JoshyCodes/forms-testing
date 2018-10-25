import React from 'react';


class Form extends React.Component{

  render(){

    return (

      <form className="m-form" name="helpdesk" method="POST" netlify-honeypot="bot-field" data-netlify={true}>

        <input name="bot-field" hidden/>
        <input placeholder="Your Name" required></input>
        <textarea placeholder="What can we help you with?" required></textarea>
        <button type="submit">Submit Ticket</button>

      </form>

      









    )

  }

}

export default Form;
