import React, { useEffect, useState } from 'react'

export default function Tencion() {
  const [tAmperios, setTamperios] = useState(JSON.parse(localStorage.getItem('TencionAmperios')) ?? 0);
  const [tVatios, setTvatios] = useState(JSON.parse(localStorage.getItem('TencionVatios')) ?? 0);

  useEffect(()=>{
    localStorage.setItem('TencionAmperios', JSON.stringify(tAmperios))
    localStorage.setItem('TencionVatios', JSON.stringify(tVatios))
  },[tAmperios, tVatios])
  console.log(tAmperios)
  console.log(tVatios)
  return (
    <div className="mt-4">
      <h1 className="mx-auto w-max text-3xl text-blue-700 font-bold uppercase">Tencion</h1>
      <h1 
        className="mx-auto w-max text-3xl text-gray-700 font-bold uppercase"
      >
        Ingresa los valores de Amperios y Vatios (A / W)
      </h1>
      <form className="mx-auto w-3/4 bg-white rounded-lg shadow-lg p-5">
        <div className="flex flex-col mb-2">
          <label className="text-md text-gray-800" htmlFor="Vatios">Amperios</label>
          <input 
            className="border rounded-md w-full px-2 py-1 text-gray-600 placeholder:text-gray-600" 
            type="number" 
            name="Amperios" 
            id="Amperios" 
            placeholder="Amperios"
            value={tAmperios}
            onChange={e=>setTamperios(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-gray-800 ml-0.5 mb-0.2" htmlFor="amperios">Vatios</label>
          <input 
            className="border rounded-md w-full px-2 py-1 text-gray-600 placeholder:text-gray-600" 
            type="number" 
            name="Vatios" 
            id="Vatios" 
            placeholder="Vatios"
            value={tVatios}
            onChange={e=>setTvatios(e.target.value)}
          />
        </div>
      </form>
      <div className="w-full mt-2">
        <p className="w-3/4 mx-auto px-2 py-1 rounded-lg">
          <span className="font-bold text-gray-600">Tencion: V</span> = {tAmperios!=0 && tVatios!=0 ? (tVatios/tAmperios) : "0"}
        </p>
      </div>
      <div className="w-full mt-2">
        <p className="w-3/4 mx-auto px-2 py-1 rounded-lg">
          <span className="font-bold text-gray-600">Recistencia: R</span> = {(tVatios/tAmperios)/tAmperios}
        </p>
      </div>
    </div>
  )
}
