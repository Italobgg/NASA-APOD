import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './DatePicker.css'; // Importe o CSS

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
    <Form onSubmit={handleSubmit} className="date-picker-form">
      <Form.Group controlId="datePicker" className="d-flex align-items-center mb-0">
        <Form.Label className="form-label">Select Date</Form.Label>
        <Form.Control
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Buscar
      </Button>
    </Form>
  );
};

export default DatePicker;
