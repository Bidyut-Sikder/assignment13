import { useState } from 'react';
import Calendar from 'react-calendar';

let ValuePiece = Date | null;

let Value = ValuePiece | [ValuePiece, ValuePiece];

function Calendar() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default Calendar;