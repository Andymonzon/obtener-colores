import { useState } from 'react'

function App() {
  const [image, setImage] = useState<string | null>(null)

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader()
    if (e.target.files != null) {
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (e) => {
        e.preventDefault()

        const result = e.target?.result as string
        setImage(result)
      }
    }
  }

  return (
    <main className='bg-black w-full h-screen text-white flex flex-col gap-5 justify-center p-10 items-center'>
      <div className='flex flex-col w-full h-full bg-zinc-700 gap-3 p-5 rounded-md'>
        <div className='h-min grid grid-cols-3 text-center'>
          <h1 className='text-4xl col-span-2'>Obtener Paleta de colores</h1>
          <h2 className='text-4xl col-span-1'>Colores</h2>
        </div>
        <div className='grid grid-cols-3 gap-2 h-full'>
          <div className='h-full border-dashed rounded-md border-2 col-span-2'>
            <input onChange={(e) => { handleFile(e) }} className='outline-none m-0 p-0 cursor-pointer opacity-0 h-full w-full' type='file' accept='image/*' />
          </div>
          <div className='col-span-1 border-2 p-2 rounded-md'>hola</div>
        </div>
      </div>
    </main>
  )
}

export default App
