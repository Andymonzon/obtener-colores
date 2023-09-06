import { IconX } from "@tabler/icons-react"
import { usePaletteContext } from "../../context/PaletteContext"

export const CDragAndDrop = () => {
  const { handlePreviousColor, image, handleImage, colors } = usePaletteContext()

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {

    const reader = new FileReader()
    if (e.target.files != null) {
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (e) => {
        e.preventDefault()

        const result = e.target?.result as string
        console.log(colors)
        handlePreviousColor(colors)
        handleImage(result)
      }
      e.target.value = ''
    }
  }

  const clearImage = () => {
    handleImage(null)
    handlePreviousColor([])
  }

  return (
    <div className={`h-full w-full flex items-center justify-center rounded-md relative  ${image != null ? '' : 'border-2 border-black lg:hover:bg-[#00000055] lg:duration-200'}`}>
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
  )
}
