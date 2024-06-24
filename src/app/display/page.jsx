"use client"
import React, { useEffect, useState } from 'react';

const fetchData = async () => {
  try {
    const res = await fetch('https://www.meshboc.com/api/enrol');
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Handle the error appropriately
  }
};

const DisplayPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };
    loadData();
  }, []);

  return (
    <>
    <div className='bg-blue-900 text-slate-200'>
    <h1 className='pt-32 text-4xl text-center'>Fetching the Database</h1>
    <div className='container mx-auto flex flex-col-reverse'>
      {data.map((item) =>(
      <ul className='mt-10' key={item._id}>
        <li className='text-xl font-extrabold'>{item.name}</li>
        <li>{item.email}</li>
        <li>{item.phone}</li>
        <li>{item.subject}</li>
        <li>{item.medium}</li>
        <li>{item.date}</li>
      </ul>
      ))}
      </div>
      </div>
      </>
  );
};

export default DisplayPage;
