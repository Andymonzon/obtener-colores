import { IconCheck } from "@tabler/icons-react"
import { colorText } from '../../utilitis/changeColor'
import './CopyCheck.css'

interface Props {
  color: string,
  bottom?: number | string
}

export const CopyCheck = ({ color, bottom = 2 }: Props) => {
  return (
    <IconCheck
      className={`animation-aparecer absolute h-[32px] p-1 w-full ${colorText(color) ? 'text-black' : 'text-white'}`}
      style={{ bottom: `${bottom}px` }}
    />

  )
}
