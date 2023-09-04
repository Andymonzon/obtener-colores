import { IconCheck } from '@tabler/icons-react';
import { Palette } from 'color-thief-react'
import { useEffect, useState } from 'react'
import './GetColor.css'
import { Loading } from '../Loading/Loading';

interface Props {
  imageUrl: string
  getPalette: any
}

export const GetColor = ({ imageUrl, getPalette }: Props) => {
  const [copy, setCopy] = useState('')

  const colorText = (hexColor: string) => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    return luminance > 0.5;
  }

  const copiText = (color: string) => {
    navigator.clipboard.writeText(color)
    setCopy(color)
  }

  let colorArray: string[] = []

  useEffect(() => {
    getPalette(colorArray)
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
              <div className='h-full flex items-center justify-center'>
                <Loading />
              </div>
            )
          }
          if (data) {
            colorArray = data
          }
          return (
            <div className='h-full' style={{ filter: 'drop-shadow(0px 25px 25px rgba(0, 0, 0, 0.25))' }}>
              <ul className='flex h-full'>
                {
                  data?.map((color, index) =>
                  (
                    <li key={index} className='flex gap-2 items-center flex-1'>
                      <div style={{ backgroundColor: color, }} className='p-5 flex-1 flex justify-center h-full relative'>
                        {
                          copy === color ? <IconCheck
                            onMouseLeave={() => setCopy('')}
                            className={`animation-aparecer absolute bottom-2 h-[32px] p-1 w-full ${colorText(color) ? 'text-black' : 'text-white'}`} /> :
                            <p
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
