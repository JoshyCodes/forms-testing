import React from 'react';


class Message extends React.Component{

  render(){

    return (

      <div className="m-message" data-status={this.props.status}>
        <p>{this.props.message}</p>
      </div>

    )

  }

}

export default Message;
