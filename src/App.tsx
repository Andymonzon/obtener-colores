import { PaletteProvider, usePaletteContext } from './context/PaletteContext'
import { CDragAndDrop } from './components/CDragAndDrop/CDragAndDrop'
import { CardColor } from './components/CardColor/CardColor'
import { CardPreviousColor } from './components/CardPreviousColor/CardPreviousColor'

function App() {
  const { colors } = usePaletteContext()

  return (
    <PaletteProvider>
      <main className='lg:w-full lg:h-screen lg:p-5 bg-[#f0efeb] '>
        <div className='flex pt-5 lg:pt-0 pl-5 items-center justify-center lg:justify-start'>
          <h1 className='text-[30px] font-bold'>ColorPixel</h1>
        </div>
        <div className='lg:flex w-full min-h-screen lg:min-h-0 lg:h-[calc(100vh-100px)] flex-row gap-5 p-5 lg:rounded-md bg-transparent lg:drop-shadow-lg'>
          <div className='h-[80vh] w-full lg:h-full flex flex-col '>
            <CDragAndDrop />
          </div>
          <div className='lg:w-1/2 h-min mt-5 lg:mt-0 lg:h-full'>
            <CardColor colors={colors} />
            <CardPreviousColor />
          </div>
        </div>
      </main>
    </PaletteProvider>
  )
}

export default App
