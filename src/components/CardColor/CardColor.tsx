import { IconMoodWrrr } from "@tabler/icons-react"
import { usePaletteContext } from "../../context/PaletteContext"
import { GetColor } from "../GetColor/GetColor"

export const CardColor = ({ colors }: { colors: string[] }) => {
  const { image } = usePaletteContext()

  return (
    image != null ?
      <div className='h-3/4'>
        <GetColor imageUrl={image} />
      </div>
      :
      <div className={`${colors.length > 0 ? 'h-3/4' : 'h-full'} flex items-center justify-center flex-col`}>
        <IconMoodWrrr size={100} />
        <p className='text-2xl'>Esperando imagen</p>
      </div>
  )
}
