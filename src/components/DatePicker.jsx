import React from 'react';
import { Form } from 'react-bootstrap';
import './DatePicker.css'; // Certifique-se de que o caminho está correto

const DatePicker = ({ onSearch }) => {
  const [selectedDate, setSelectedDate] = React.useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(selectedDate);
  };

  return (
    <div className="date-picker-container mb-3">
      <Form onSubmit={handleSubmit} className="d-flex">
        <Form.Group controlId="datePicker" className="mb-0">
          <Form.Control
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="date-picker-input"
          />
        </Form.Group>
        <button type="submit" className="custom-button">
          Search
        </button>
      </Form>
    </div>
  );
};

export default DatePicker;
