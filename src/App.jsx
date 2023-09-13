import { useState } from 'react'
import Potencia from './components/Potencia'
import Intencidad from './components/Intencidad'
import Tencion from './components/Tencion'

function App() {
  const [potencia, setPotencia] = useState(false)
  const [intencidad, setIntencidad] = useState(false)
  const [tencion, setTencion] = useState(false)

  return (
    <div className="w-4/5 mx-auto bg-white rounded-md mt-4 py-8 px-4">
      <h1 className="mx-auto w-max text-3xl text-gray-700 font-bold uppercase max-md:text-xl">
        La ley de Ohm
      </h1>
      <p className="text-md font-semibold text-center">formulas</p>
      <div className="flex max-sm:flex-wrap gap-4 mt-6 mb-2">
        <button onClick={()=>setPotencia(!potencia)} className={`${potencia && "bg-blue-600 text-white"} transition-all miun-w-max flex-1 w-full shadow-xl font-light relative group rounded-2xl px-2 py-1`}>
          Potencia
          <span className="absolute opacity-0 w-full text-white rounded-2xl shadow-md px-2 py-1 text-sm transition-opacity transform translate-y-8 -translate-x-1/2 left-1/2 group-hover:opacity-100 bg-blue-500 after:border-black after:px-2 after:py-1 after:text-sm after:transition-opacity after:translate-y-2">W = V * A</span>
        </button>
        <button onClick={()=>setIntencidad(!intencidad)} className={`${intencidad && "bg-blue-600 text-white"} transition-all miun-w-max flex-1 w-full shadow-xl font-light relative group rounded-2xl px-2 py-1`}>
          Intencidad
          <span className="absolute opacity-0 w-full text-white rounded-2xl shadow-md px-2 py-1 text-sm transition-opacity transform translate-y-8 -translate-x-1/2 left-1/2 group-hover:opacity-100 bg-blue-500 after:border-black after:px-2 after:py-1 after:text-sm after:transition-opacity after:translate-y-2">A = W / V</span>
        </button>
        <button onClick={()=>setTencion(!tencion)} className={`${tencion && "bg-blue-600 text-white"} transition-all miun-w-max flex-1 w-full shadow-xl font-light relative group rounded-2xl px-2 py-1`}>
          Tencion
          <span className="absolute opacity-0 w-full text-white rounded-2xl shadow-md px-2 py-1 text-sm transition-opacity transform translate-y-8 -translate-x-1/2 left-1/2 group-hover:opacity-100  bg-blue-500 after:border-black after:px-2 after:py-1 after:text-sm after:transition-opacity after:translate-y-2">V = A / W</span>
        </button>
      </div>
      <div className="mb-4">
        {
          potencia === true && <Potencia/>
        }
        {
          intencidad === true && <Intencidad/>
        }
        {
          tencion === true && <Tencion/>
        }
      </div>
    </div>
  )
}

export default App
