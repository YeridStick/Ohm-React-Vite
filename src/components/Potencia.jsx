import React, { useEffect, useState } from 'react'


export default function Potencia() {
  const [pVoltios, setPvoltios] = useState(JSON.parse(localStorage.getItem('PotenciaVoltio')) ?? 0);
  const [pAmperios, setPamperios] = useState(JSON.parse(localStorage.getItem('PotenciaAmperios')) ?? 0);

  useEffect(()=>{
    localStorage.setItem('PotenciaVoltio', JSON.stringify(pVoltios))
    localStorage.setItem('PotenciaAmperios', JSON.stringify(pAmperios))
  },[pVoltios, pAmperios])
  return (
    <div className="mt-4">
      <h1 className="mx-auto w-max text-3xl text-blue-700 font-bold uppercase">Potencia</h1>
      <h1 
        className="mx-auto w-max text-3xl text-gray-700 font-bold uppercase"
      >
        Ingresa los valores de Volios y Amperios (V * A)
      </h1>
      <form className="mx-auto w-3/4 bg-white rounded-lg shadow-lg p-5">
        <div className="flex flex-col mb-2">
          <label className="text-md text-gray-800" htmlFor="voltios">Voltios</label>
          <input 
            className="border rounded-md w-full px-2 py-1 text-gray-600 placeholder:text-gray-600" 
            type="number" 
            name="voltios" 
            id="voltios" 
            placeholder="Voltios"
            value={pAmperios}
            onChange={e=>setPamperios(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-gray-800 ml-0.5 mb-0.2" htmlFor="amperios">Amperios</label>
          <input 
            className="border rounded-md w-full px-2 py-1 text-gray-600 placeholder:text-gray-600" 
            type="number" 
            name="amperios" 
            id="amperios" 
            placeholder="Amperios"
            value={pVoltios}
            onChange={e=>setPvoltios(e.target.value)}
          />
        </div>
      </form>
      <div className="w-full mt-2">
        <p className="w-3/4 mx-auto px-2 py-1 rounded-lg"><span className="font-bold text-gray-600">Potencia: W</span> =  {pVoltios * pAmperios}</p>
      </div>
      <div className="w-full mt-2">
        <p className="w-3/4 mx-auto px-2 py-1 rounded-lg">
          <span className="font-bold text-gray-600">Recistencia: R</span> = {pAmperios/pVoltios}
        </p>
      </div>
    </div>
  )
}
