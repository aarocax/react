import React, { Component } from 'react';

class User extends Component {
	

  render () {
    return (
    	<div>	
      <li>
        {this.props.name} - {this.props.name2} - {this.props.email}
      </li>
      <button onClick={this.props.onClick}>click! desde el componente</button>
      </div>
    );
  }
}

export default User;