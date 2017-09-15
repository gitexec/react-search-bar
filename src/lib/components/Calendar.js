import React from 'react';
import 'react-simple-datepicker/dist/index.css';
import DatePicker from 'react-simple-datepicker';

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      date: new Date()
    }
  }

  render () {
    return <DatePicker date={this.state.date} />;
  }
}
