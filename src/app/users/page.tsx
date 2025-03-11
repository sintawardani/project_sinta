"use client";

import { useEffect, useState } from "react";

export default function User() {
   const [total, seTotal] = useState(0)
   
   const tambah = () => {
    seTotal(1)
   } 

   useEffect(() => {

   },[])
  return (
    <div>
      <h1>{'1'}</h1>
      <button onClick {(tambah) => alert("Tombol diklik!")}>Klik Saya
        Click Button
      </button>
    </div>
  );
}