import { Palette } from 'color-thief-react'
import { useEffect } from 'react'
import { Loading } from '../Loading/Loading';
import { usePaletteContext } from '../../context/PaletteContext';
import { colorText } from '../../utilitis/changeColor'
import { IconCheck } from '@tabler/icons-react';

interface Props {
  imageUrl: string
}

export const GetColor = ({ imageUrl }: Props) => {
  const { handleColor, handleCopy, copy } = usePaletteContext()

  const copiText = (color: string) => {
    navigator.clipboard.writeText(color)
    handleCopy(color)
  }

  let colorArray: string[] = []

  useEffect(() => {
    handleColor(colorArray)
  }, [colorArray])

  return (
    <Palette
      src={imageUrl}
      crossOrigin='anonymous'
      format='hex'
      colorCount={5}
    >
      {
        ({ data, loading }) => {
          if (loading) {
            return (
              <div className='lg:h-full h-[10rem] flex items-center justify-center'>
                <Loading />
              </div>
            )
          }
          if (data) {
            colorArray = data
          }
          return (
            <div className='h-[10rem] lg:h-full text-[11px] lg:text-[0.9rem]' style={{ filter: 'drop-shadow(0px 25px 25px rgba(0, 0, 0, 0.25))' }}>
              <ul className='flex h-full'>
                {
                  data?.map((color, index) =>
                  (
                    <li key={index} className='flex gap-2 items-center flex-1'>
                      <div style={{ backgroundColor: color, }} onMouseLeave={() => handleCopy('')} className='p-5 flex-1 flex justify-center h-full relative'>
                        {
                          copy === color ?
                            <IconCheck
                              className={`animation-aparecer absolute bottom-1 lg:bottom-2 h-[32px] p-1 w-full ${colorText(color) ? 'text-black' : 'text-white'}`}
                            />
                            : <p
                              onClick={() => copiText(color)}
                              className={`absolute bottom-2 font-bold p-1 rounded-md duration-200 cursor-pointer ${colorText(color) ? 'text-black hover:bg-[#00000022]' : 'text-white hover:bg-[#ffffff22]'}`}>
                              {color}
                            </p>
                        }
                      </div>
                    </li>
                  )
                  )
                }
              </ul>
            </div>
          )
        }
      }
    </Palette>
  )
};
