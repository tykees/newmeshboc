"use client";

import { useState } from "react";
import Link from "next/link";
import {IoIosAddCircleOutline} from 'react-icons/io';

export default function Update() {
    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [phone, setPhone] = useState(" ");
    const [subject, setSubject] = useState(" ");
    const [medium, setMedium] = useState(" ");
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
                medium,
            }),
        });

        const {msg, success} = await res.json();
        setError(msg);
        setSuccess(success)
        console.log(error)

        setTimeout(() => {
            setError([]);
            setSuccess(false);
        }, 3000);

        if (success) {
            setName("")
            setEmail("")
            setPhone("")
            setSubject("")
            setMedium("")
        }

    };

    return <>
        <form onSubmit={handleSubmit} className="flex my-5 flex-col gap-4 w-auto">
            <div>
                <label className="text-slate-500" htmlFor="businessname">Full Name</label>
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" id="Fullname"/>
            </div>
            <div>
                <label className="text-slate-500" htmlFor="email">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" />
            </div>
            <div>
                <label  className="text-slate-500" htmlFor="businessphone">Phone</label>
                <input onChange={(e) => setPhone(e.target.value)} value={phone} type="number" id="phone" />
            </div>
            <div>
                <label  className="text-slate-500" htmlFor="productone"></label>
                <select className="text-slate-500"  onChange={(e) => setSubject(e.target.value)} value={subject}  type="text" id="productone" name="">
                <option value="Select Course">Select Course</option>
                    <option value="Full Stack Engineering">Full Stack Engineering</option>
                    <option value="Frontend Engineering">Front End Engineering</option>
                    <option value="Backend Engineering">Backend Engineering</option>
                    <option value="Coding Fundamentals">Coding Fundamentals</option>
                    <option value="Intro to HTML">Intro to HTML</option>
                    <option value="Intro to CSS">Intro to CSS</option>
                    <option value="Into to Python">Into to Python</option>
                    <option value="Intro to JavaScript">Intro to JavaScript</option>
                    <option value="Pro Javascript">Pro Javascript</option>
                    <option value="Next Js">Next Js</option>
                    <option value="TypeScript">TypeScript</option>
                    <option value="Content writing">Content writing</option>
                </select>
            </div>
            <div>
                <label  className="text-slate-500" htmlFor="medium"></label>
                <select className="text-slate-500"  onChange={(e) => setMedium(e.target.value)} value={medium}  type="text" id="medium" name="">
                    <option value="Training Medium">Training Medium</option>
                    <option value="Meshboc School">Meshboc School</option>
                    <option value="Home">Home</option>
                    <option value="Online">Online</option>
                </select>
            </div>
            <button className=" p-3 font-bold text-black bg-cyan-500" type="submit">Send</button>
        </form>
        <div className="bg-slate-100 text-sm flex flex-col">
  {error &&
    error.map((e, index) => (
      <div key={index} className={`${success ? "text-green-800" : "text-red-600"} px-5 text-md py-2`}>
        {e}
      </div>
    ))}
</div>

    </>
}