import { useState } from 'react'
import { IconMoodWrrr, IconX } from '@tabler/icons-react'
import { GetColor } from './components/GetColor/GetColor'

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
      e.target.value = ''
    }
  }

  const clearImage = () => {
    setImage(null)
  }

  return (
    <main className='w-full h-screen flex flex-col gap-5 justify-center p-10 items-center bg-[#FFFFFF]'>
      <div className='flex flex-col w-full h-full gap-3 p-5 rounded-md bg-[#d9d3c3] drop-shadow-lg'>
        <div className='flex items-center text-black'>
          <h1 className='text-3xl font-bold'>ColorPixel</h1>
        </div>
        <div className='h-full flex gap-2'>
          <div className={`h-full w-1/2 flex items-center justify-center rounded-md relative  ${image != null ? '' : 'border-2 border-black hover:bg-[#00000055] duration-200'}`}>
            <input onChange={(e) => { handleFile(e) }} className='absolute outline-none m-0 p-0 cursor-pointer opacity-0 h-full w-full' type='file' accept='image/*' />
            <p className='text-2xl text-center'>Seleccione o arrastre una imagen</p>
            {
              image != null &&
              <div className='w-full h-full absolute top-0 rounded-md drop-shadow-xl'>
                <button onClick={clearImage} className='absolute right-3 top-3 text-black'>
                  <IconX size='35' className='bg-white rounded-full p-2 hover:bg-[#000000] hover:text-white duration-200' />
                </button>
                <img src={image} alt='image' className='w-full h-full rounded-md object-cover' />
              </div>
            }
          </div>

          <div className='w-1/2'>
            {
              image != null ?
                <div className='h-2/3'>
                  <GetColor imageUrl={image} />
                </div>
                :
                <div className='h-2/3 flex items-center justify-center flex-col'>
                  <IconMoodWrrr size={100} />
                  <p className='text-2xl'>Esperando imagen</p>
                </div>
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
