import React, { Component } from 'react';
import BpkCalendar from 'bpk-component-calendar';
import BpkInput, { INPUT_TYPES } from 'bpk-component-input';
import format from 'date-fns/format';

const formatDateFull = date => format(date, 'dddd, Do MMMM YYYY');
const formatMonth = date => format(date, 'MMMM YYYY');
const daysOfWeek = [
  {
    name: 'Sunday',
    nameAbbr: 'Sun',
    index: 0,
    isWeekend: true,
  },
];

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedDate: null,
    };
  }

  handleDateSelect = (date) => {
    this.setState({
      selectedDate: date,
    });
  };

  render() {
    return (
      <div>
        <BpkInput
          id="dateInput"
          name="date"
          placeholder="Departure date"
          type={INPUT_TYPES.text}
          value={(this.state.selectedDate || '').toString()}
        />
        <BpkCalendar
          changeMonthLabel="Change month"
          date={this.state.selectedDate}
          daysOfWeek={daysOfWeek}
          formatDateFull={formatDateFull}
          formatMonth={formatMonth}
          id="calendar"
          onDateSelect={this.handleDateSelect}
        />
      </div>
    );
  }
}
