import React, { useEffect, useState } from 'react'

export default function Intencidad() {
  const [iVatios, setIvatios] = useState(JSON.parse(localStorage.getItem('IntencidadVatios')) ?? 0);
  const [iVoltios, setIVoltios] = useState(JSON.parse(localStorage.getItem('IntencidadVoltios')) ?? 0);

  useEffect(()=>{
    localStorage.setItem('IntencidadVatios', JSON.stringify(iVatios))
    localStorage.setItem('IntencidadVoltios', JSON.stringify(iVoltios))
  },[iVatios, iVoltios])

  return (
    <div className="mt-4 shadow rounded-xl">
      <h1 className="mx-auto w-max text-3xl text-blue-700 font-bold uppercase max-md:text-lg">Intensidad</h1>
      <h1 
        className="mx-auto text-3xl text-gray-700 font-bold uppercase max-md:text-ms max-md:text-lg whitespace-normal text-center"
      >
        Ingresa Vatios y Voltios (W / V)
      </h1>
      <form className="mx-auto w-3/4 bg-white rounded-lg shadow-lg p-5 max-md:w-full">
        <div className="flex flex-col mb-2">
          <label className="text-md text-gray-800" htmlFor="Vatios">Vatios</label>
          <input
            className="border rounded-md w-full px-2 py-1 text-gray-600 placeholder:text-gray-600"
            type="number"
            name="Vatios"
            id="Vatios"
            placeholder="Vatios"
            value={iVatios}
            onChange={(e) => setIvatios(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-gray-800 ml-0.5 mb-0.2" htmlFor="amperios">Voltios</label>
          <input
            className="border rounded-md w-full px-2 py-1 text-gray-600 placeholder:text-gray-600"
            type="number"
            name="Voltios"
            id="Voltios"
            placeholder="Voltios"
            value={iVoltios}
            onChange={(e) => setIVoltios(e.target.value)}
          />
        </div>
      </form>
      <div className="w-full mt-2">
        <p className="w-3/4 mx-auto px-2 py-1 rounded-lg"><span className="font-bold text-gray-600">Intencidad: A</span> = {iVoltios!=0 && iVatios!=0 ? iVatios / iVoltios : "0"}</p>
      </div>
      <div className="w-full mt-2">
        <p className="w-3/4 mx-auto px-2 py-1 rounded-lg">
          <span className="font-bold text-gray-600">Recistencia: R</span> = {iVoltios!=0 && (iVatios / iVoltios) != 0 ? iVoltios/(iVatios / iVoltios) : "0"}
        </p>
      </div>
    </div>
  )
}
