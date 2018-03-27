import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ClassList extends Component {
  constructor(props) {
    super(props)
    this.state={
      students: []
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(res => this.setState({students: res.data}))
  }

  render() {
    console.log(this.props.match)
    const { students } = this.state;
    let studentNames = students.map((cur,ind) => <Link to={`/student/${cur.id}`} key={ind}><h3>{cur.first_name} {cur.last_name}</h3></Link>)
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {studentNames}
      </div>
    )
  }
}