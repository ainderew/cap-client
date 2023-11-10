/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import Loading from '@/components/loading'
import React from 'react'
import DoughnutGraph from '../defaultGraphs/doughnutChart'
import GraphChart from '../defaultGraphs/graphChart'
interface props {
  monthData: any
  loading: boolean
}
const config1 = [
  {
    hexColor: '#0bb4ff',
    rgbaColor: 'rgba(53, 162, 235, 0.5)',
    label: 'registered',
    type: 'bar'
  },
  {
    hexColor: '#A1A1A1',
    rgbaColor: '#A1A1A1',
    label: 'Unknown',
    type: 'bar'
  }
]
const ageGroup = ['Teen', 'Young adult', 'Adult', 'Senior']

const colorPalette = ['#81DDC5', '#65A4F5', '#8F7ED4', '#EF7783']
const AgeData: React.FC<props> = ({ ...props }) => {
  const currentDate = new Date()
  return (
    <div className=' grid h-full w-full grid-cols-6 gap-2 text-center '>
      <div className='col-span-6 md:col-span-2'>
      <div className='h-[25rem] w-[full] md:h-[25rem]  lg:block'>
              {props?.monthData?.[
                currentDate.getMonth()
              ]?.thisMonth?.ageDemographic.every(
                (value: any) => value === 0
              ) ? (
                <div className='flex items-center justify-center bg-slate-300 text-center'>
                  No Data
                </div>
                  ) : (
                <DoughnutGraph
                    months={['unknown', '12-18', '19-26', '26-60', '60 above']}
                    clickCounts={props?.monthData?.[currentDate.getMonth()]?.thisMonth
                      ?.ageDemographic}
                    position={'bottom'} loading={props.loading} />
                  )}
            </div>
     {/*    {!props.loading ? (
          <div>
            <div className='h-[25rem] w-[full] md:h-[25rem]  lg:block'>
              {props?.monthData?.[
                currentDate.getMonth()
              ]?.thisMonth?.ageDemographic.every(
                (value: any) => value === 0
              ) ? (
                <div className='flex items-center justify-center bg-slate-300 text-center'>
                  No Data
                </div>
                  ) : (
                <DoughnutGraph
                    months={['unknown', '12-18', '19-26', '26-60', '60 above']}
                    clickCounts={props?.monthData?.[currentDate.getMonth()]?.thisMonth
                      ?.ageDemographic}
                    position={'bottom'} loading={props.loading} />
                  )}
            </div>
          </div>
        ) : (
          <div className=' col-span-4 h-[25rem] w-full'>
            <Loading />
          </div>
        )} */}
      </div>
      <div className='col-span-6 md:col-span-4 '>
        <div className='flex h-[10rem] flex-col rounded-md bg-white shadow-lg'>
          <GraphChart
            tags={['']}
            clickCounts={[
              [
                props?.monthData?.[currentDate.getMonth()]?.thisMonth?.total -
                props?.monthData?.[currentDate.getMonth()]?.thisMonth
                  ?.ageDemographic?.[0]
              ],
              [
                props?.monthData?.[currentDate.getMonth()]?.thisMonth
                  ?.ageDemographic?.[0]
              ]
            ]}
            config={config1}
            axis={'y'}
            barwidth={40}
            show={false}
            title={'User Interaction Demographics'} loading={props.loading} />
          <div className='mt-2 h-[10rem]'>
            {/* <AgeDisplay
              data={props?.monthData?.[
                currentDate.getMonth()
              ]?.thisMonth?.ageDemographic.slice(1)}
              colors={colorPalette}
            /> */}
            <div className='grid grid-cols-4 gap-2 text-[1.3rem] font-semibold text-white sm:gap-4'>
              {props?.monthData?.[
                currentDate.getMonth()
              ]?.thisMonth?.ageDemographic
                .slice(1)
                .map((time: any, index: any) => (
                  <div key={index}>
                    <div
                      style={{ backgroundColor: colorPalette[index] }}
                      className='flex min-h-[10rem] w-full flex-col items-center justify-center rounded-md shadow-lg'
                    >
                      {time}
                      <h3>{ageGroup[index]}</h3>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgeData
