'use client'
import React, { useState, useEffect } from 'react';

const Dbdisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/enrol');
        if (!response.ok) {
          throw new Error('Failed to fetch data from the server');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className='mt-10'>Your Page</h1>
      <ul> 
        {data.map((item, index) => (
          <li key={index}>{item.yourFieldName}</li> // Replace 'yourFieldName' with the field name in your MongoDB collection
        ))}
      </ul>
    </div>
  );
};

export default Dbdisplay;
