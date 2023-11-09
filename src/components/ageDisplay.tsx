import React from 'react'

interface props {
  data: any[]
  colors: string[]
}

const ageGroup = ['Teen', 'Young adult', 'Adult', 'Senior']

const AgeDisplay: React.FC<props> = ({ data, colors }) => {
  return (
    <div className='grid grid-cols-4 gap-2 text-[1.3rem] font-semibold text-white sm:gap-4'>
      {data.map((time, index) => (
        <div key={index}>
          <div
            style={{ backgroundColor: colors[index] }}
            className='flex min-h-[10rem] w-full flex-col items-center justify-center rounded-md shadow-lg'
          >
            {time}
            <h3>{ageGroup[index]}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AgeDisplay
