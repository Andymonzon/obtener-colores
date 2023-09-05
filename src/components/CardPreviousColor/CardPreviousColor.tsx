import { usePaletteContext } from "../../context/PaletteContext"
import { CopyCheck } from "../CopyCheck/CopyCheck"

export const CardPreviousColor = () => {
  const { previousColors, copy, handleCopy } = usePaletteContext()

  const copiText = (color: string) => {
    navigator.clipboard.writeText(color)
    handleCopy(color)
  }

  return (
    previousColors.length > 0 &&
    <div className='h-[25%] flex flex-col gap-2 mt-5 ml-5'>
      {previousColors.length > 0 ? <p className='text-2xl font-bold'>Colores previos</p> : null}
      <div className='flex gap-5'>
        {
          previousColors.map((color, index) => (
            <div
              onMouseLeave={() => handleCopy('')}
              onClick={() => copiText(color)} key={index} style={{ background: color, boxShadow: '0 0 5px #000' }} className='cursor-pointer rounded-full w-14 h-14 relative'>
              {
                copy === color &&
                <CopyCheck color={color} bottom={12} />
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}
