"use client";

import { useState } from "react";
import Link from "next/link";
import {IoIosAddCircleOutline} from 'react-icons/io';

export default function Update() {
    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [phone, setPhone] = useState(" ")
    const [subject, setSubject] = useState(" ");
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);



    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("api/enrol", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                subject,
            }),
        });

        const {msg, success} = await res.json();
        setError(msg);
        setSuccess(success)
        console.log(error)

        if (success) {
            setName("")
            setEmail("")
            setPhone("")
            setSubject("")
        }
    };

    return <>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-auto">
            <div>
                <label className="text-white" htmlFor="businessname">Full Name</label>
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" id="Fullname"/>
            </div>
            <div>
                <label className="text-white" htmlFor="email">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" />
            </div>
            <div>
                <label  className="text-white" htmlFor="businessphone">Phone</label>
                <input onChange={(e) => setPhone(e.target.value)} value={phone} type="number" id="phone" />
            </div>
            <div>
                <label  className="text-white" htmlFor="productone">Desired Subject(s)</label>
                <input onChange={(e) => setSubject(e.target.value)} value={subject} type="text" id="productone" placeholder="" />
            </div>
            <button className=" p-3 font-bold text-black bg-cyan-500" type="submit">Send</button>
        </form>
        <div className="bg-slate-100 flex flex-col">
  {error &&
    error.map((e, index) => (
      <div key={index} className={`${success ? "text-green-800" : "text-red-600 "} px-5 text-xl py-2`}>
        {e}
      </div>
    ))}
</div>

    </>
}