import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NasaCard from './NasaCard.jsx';
import DatePicker from './DatePicker';

const NasaApod = () => {
  const [apodData, setApodData] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');

  const fetchApod = async (date) => {
    try {
      const apiKey = import.meta.env.VITE_NASA_API_KEY;
      const url = date
        ? `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`
        : `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
      const response = await axios.get(url);
      setApodData(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados da API NASA:', error);
    }
  };

  useEffect(() => {
    if (selectedDate) {
      fetchApod(selectedDate);
    } else {
      fetchApod(); // Busca a imagem do dia atual
    }
  }, [selectedDate]);

  const handleDateSearch = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="nasa-apod-container">
      <DatePicker onSearch={handleDateSearch} />
      {apodData ? (
        <NasaCard
          title={apodData.title}
          url={apodData.url}
          explanation={apodData.explanation}
          date={apodData.date}
        />
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default NasaApod;
