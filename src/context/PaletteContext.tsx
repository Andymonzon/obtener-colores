import { createContext, useContext, useState } from 'react'

interface IPaletteContext {
  previousColors: string[]
  image: string | null
  colors: string[]
  handleColor: (color: string[]) => void
  handleImage: (image: string | null) => void
  handlePreviousColor: (color: string[]) => void
  copy: string
  handleCopy: (color: string) => void
}

export const PaletteContext = createContext<IPaletteContext>({
  previousColors: [],
  image: null,
  colors: [],
  copy: '',
  handleColor: () => { },
  handleImage: () => { },
  handlePreviousColor: () => { },
  handleCopy: () => { }
})

export const PaletteProvider = ({ children }: { children: React.ReactNode }) => {
  const [previousColors, setPreviousColors] = useState<string[]>([])
  const [image, setImage] = useState<string | null>(null)
  const [colors, setColors] = useState<string[]>([])
  const [copy, setCopy] = useState('')

  const handleCopy = (color: string) => {
    setCopy(color)
  }

  const handlePreviousColor = (color: string[]) => {
    setPreviousColors(color)
  }

  const handleColor = (color: string[]) => {
    setColors(color)
  }

  const handleImage = (image: string | null) => {
    setImage(image)
  }

  return (
    <PaletteContext.Provider value={{
      previousColors,
      image,
      colors,
      copy,
      handleColor,
      handleImage,
      handlePreviousColor,
      handleCopy
    }}>
      {children}
    </PaletteContext.Provider>
  )
}

export const usePaletteContext = () => {
  const context = useContext(PaletteContext)

  if (!context) {
    throw new Error('El context debe estar dentro de un Provider')
  }

  return context
}
