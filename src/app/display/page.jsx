import React from 'react';


async function fetchData() {
  try {
    const res = await fetch('/api/enrol');
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array or handle the error appropriately
  }
}

export default async function DisplayPage() {
  const data = await fetchData();

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
}
