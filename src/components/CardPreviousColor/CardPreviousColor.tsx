import { IconCheck } from "@tabler/icons-react"
import { usePaletteContext } from "../../context/PaletteContext"
import { colorText } from "../../utilitis/changeColor"

export const CardPreviousColor = () => {
  const { previousColors, copy, handleCopy } = usePaletteContext()

  const copiText = (color: string) => {
    navigator.clipboard.writeText(color)
    handleCopy(color)
  }

  return (
    previousColors.length > 0 &&
    <div className='h-[25%] flex flex-col gap-2 mt-5 lg:ml-5 items-center justify-center'>
      {previousColors.length > 0 ? <p className='text-2xl font-bold'>Colores previos</p> : null}
      <div className='flex gap-5'>
        {
          previousColors.map((color, index) => (
            <div
              onMouseLeave={() => handleCopy('')}
              onClick={() => copiText(color)} key={index} style={{ background: color, boxShadow: '0 0 5px #000' }} className='cursor-pointer outline-none rounded-full lg:w-14 lg:h-14 w-10 h-10 relative'>
              {
                copy === color &&
                <IconCheck
                  className={`animation-aparecer absolute bottom-1 lg:bottom-3 h-[32px] p-1 w-full ${colorText(color) ? 'text-black' : 'text-white'}`}
                />
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}
