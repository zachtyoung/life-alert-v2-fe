import React from 'react'
import { Calendar } from 'antd';
function onPanelChange(value, mode) {
    console.log(value, mode);
  }
function CalendarComponent() {
    return (
     
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
   
    )
}

export default CalendarComponent
