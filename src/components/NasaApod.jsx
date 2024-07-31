import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";
import DatePicker from "./DatePicker";

const NasaApod = () => {
  const [apodData, setApodData] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    fetchApodData();
  }, [selectedDate]);

  const fetchApodData = async () => {
    const dateParam = selectedDate ? `&date=${selectedDate}` : "";
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY${dateParam}`
    );
    setApodData(response.data);
  };

  const handleSearch = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="nasa-apod">
      <DatePicker onSearch={handleSearch} />
      {apodData && (
        <NasaCard
          title={apodData.title}
          url={apodData.url}
          explanation={apodData.explanation}
          date={apodData.date}
          mediaType={apodData.media_type}
        />
      )}
    </div>
  );
};

export default NasaApod;
