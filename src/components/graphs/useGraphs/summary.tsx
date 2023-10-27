import React, { useEffect, useState } from 'react'
import BarGraph from '../defaultGraphs/bargraph'
import Loading from '@/components/loading'
import GraphChart from '../defaultGraphs/graphChart'
import Clock from '@/components/clock'

interface Details {
  yearlyData: any
  isRetrieved: boolean
}

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const Summary: React.FC<Details> = ({ ...props }) => {
  return (
    <>
      <div>
        <Clock />
      </div>
    </>
  )
}

export default Summary
