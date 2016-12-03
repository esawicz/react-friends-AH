import React, { Component } from 'react';

class Friend extends Component{
  constructor(props){
    super(props);
    // console.log(345678765432123, this.props)

  };

  render() {
    return(
      <li className="friend">
        <img className="profile-pic" src="http://placebear.com/50/50.jpg"/>

          <h3>{ this.props.name }</h3>

          <div className="location">
            Location:  Location: { this.props.currentLocation.city }, { this.props.currentLocation.state }, { this.props.currentLocation.country }
          </div>

          <div className="status">
            Status: { this.props.status }
          </div>

          <div className="num-friends">
            Friends: { this.props.friendCount }
          </div>

      </li>

    )
  }
}

export default Friend;
