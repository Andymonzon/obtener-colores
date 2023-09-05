import { PaletteProvider, usePaletteContext } from './context/PaletteContext'
import { CDragAndDrop } from './components/CDragAndDrop/CDragAndDrop'
import { CardColor } from './components/CardColor/CardColor'
import { CardPreviousColor } from './components/CardPreviousColor/CardPreviousColor'

function App() {
  const { colors } = usePaletteContext()

  return (
    <PaletteProvider>
      <main className='w-full h-screen flex flex-col gap-5 justify-center p-10 items-center bg-[#FFFFFF]'>
        <div className='flex flex-col w-full h-full gap-3 p-5 rounded-md bg-[#d9d3c3] drop-shadow-lg'>
          <div className='flex items-center text-black'>
            <h1 className='text-3xl font-bold'>ColorPixel</h1>
          </div>
          <div className='h-full flex gap-2'>
            <CDragAndDrop />
            <div className='w-1/2'>
              <CardColor colors={colors} />
              <CardPreviousColor />
            </div>
          </div>
        </div>
      </main>
    </PaletteProvider>
  )
}

export default App
