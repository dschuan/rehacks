import React, {Component} from 'react';
import {View, Text} from 'react-native';
import db from '../database/config.js';

class RetrieveDBContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {payload: [], payloadEmpty: true}
  }

  componentDidMount() {
    const employeesRef = db.ref('/employees');
    //retrieve DBContainer
  }
  render(){
    return (
      <View>Render Component Here </View>
    )
  }
}

export default RetrieveDBContainer
