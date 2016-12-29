import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message } from 'antd';
import moment from 'moment';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  handleChange(date) {
    message.info('Selected Date: ' + date.toString());
    this.setState({ date });
  }



  render() {
    return (
      <div style={{ width: 400, margin: '100px auto' }}>
       
 <DatePicker disabledDate={disabledDate} showToday/>

        <div style={{ marginTop: 20 }}>Date: {this.state.date.toString()}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
function disabledDate(current) {
        var myDate = new Date();
	myDate.setFullYear(2017);
        myDate.setDate(31);
	myDate.setMonth(7);
  
  return current > myDate ||  current < Date.now();
}