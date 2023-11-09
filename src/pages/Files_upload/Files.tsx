import React, { useState } from 'react'
import Eachfiles from './Each_FIles'

interface EachfilesProps {
  type: string
  filename: string
  category: string
  date: string
  status: string
  report: string
}

const file1: EachfilesProps = {
  type: 'PDF',
  filename: 'my-document.pdf',
  category: 'Customer Support ',
  date: '2023-05-07',
  status: 'Active',
  report: 'Quarterly Report'
}

const file2: EachfilesProps = {
  type: 'CSV',
  filename: 'sales-data.csv',
  category: 'Data',
  date: '2023-05-06',
  status: 'Inactive',
  report: 'Sales Report'
}

const file3: EachfilesProps = {
  type: 'CSV',
  filename: 'sales-data.csv',
  category: 'Data',
  date: '2023-05-06',
  status: 'Inactive',
  report: 'Sales Report'
}
const file4: EachfilesProps = {
  type: 'Product Pricing',
  filename: 'sales-data.csv',
  category: 'Data',
  date: '2023-05-06',
  status: 'Inactive',
  report: 'Sales Report'
}
const files = [file1, file2, file3, file4]
const Files: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('')

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedOption(event.target.value)
  }

  return (
    <div className='flex h-screen flex-col'>

      <div className='flex items-center justify-center '>
        <div className=' w-[90vw] sm:w-[80vw]'>
          <div className=' pt-[5rem]'>
            <div>
              <select
                className='w-[18rem] cursor-pointer items-center justify-center rounded-md border-2 border-solid border-black p-[.4rem]'
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <option value='' disabled>
                  Filter By
                </option>
                <option value='all'>ALL</option>
                <option value='active'>Business Data</option>
                <option value='active'>Customer Support Data</option>
                <option value='active'>Product Availability Data</option>
              </select>
            </div>

            <div className=' pt-[2rem] '>
              <div className='grid grid-cols-4 items-center justify-center gap-5 rounded-md bg-[#2b99ff60] p-2 font-medium text-[#fff]'>
                <div className='px-5'>File Name</div>
                <div className='justify-self-center'>Category</div>
                <div className='justify-self-end'>Date Uploaded</div>
                <div className='justify-self-end px-5'>Status</div>
              </div>
            </div>
            <div className='h-[32rem] overflow-auto  pt-[1.5rem] '>
              {files.map((file, index) => (
                <Eachfiles key={index} {...file} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Files
