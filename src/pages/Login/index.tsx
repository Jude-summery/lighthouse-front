import React from 'react';
import { connect } from 'umi';

class Login extends React.Component{
  render(){
    return(
      null
    )
  }
}

export default connect( state => state['Login'] )(Login)