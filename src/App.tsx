import { useState } from 'react'
import { IconX } from '@tabler/icons-react'

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
          <div className='h-full border-dashed rounded-md border-2 col-span-2 relative'>
            <input onChange={(e) => { handleFile(e) }} className='outline-none m-0 p-0 cursor-pointer opacity-0 h-full w-full relative z-[20]' type='file' accept='image/*' />
            <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl z-[10]'>Seleccione o arrastre una imagen</p>
            {
              image != null &&
              <div className='w-full h-full absolute top-0 rounded-md z-[30]'>
                <button onClick={() => setImage(null)} className='absolute right-3 top-3 text-black'>
                  <IconX size='35' className='bg-white rounded-full p-2' />
                </button>
                <img src={image} alt='image' className='w-full h-full object-cover' />
              </div>
            }
          </div>
          <div className='col-span-1 border-2 p-2 rounded-md'>
            colores
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
