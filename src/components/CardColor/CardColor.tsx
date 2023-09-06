import { IconPalette } from "@tabler/icons-react"
import { usePaletteContext } from "../../context/PaletteContext"
import { GetColor } from "../GetColor/GetColor"

export const CardColor = ({ colors }: { colors: string[] }) => {
  const { image } = usePaletteContext()

  return (
    image != null ?
      <div className='lg:h-3/4'>
        <GetColor imageUrl={image} />
      </div>
      :
      <div className={`${colors.length > 0 ? 'lg:h-3/4' : 'lg:h-full'} flex items-center justify-center flex-col`}>
        <IconPalette size={100} />
        <p className='text-2xl'>Esperando imagen...</p>
      </div>
  )
}
