import React, { useState, useEffect } from 'react'
import { City, State, Country } from 'country-state-city'
import { Select, AutoComplete } from 'antd'

interface LocationSelectorProps {
  onLocationChange: (location: any) => void // Define the prop type for onLocationChange
}

const LocationSelector: React.FC<LocationSelectorProps> = ({
  onLocationChange,
}) => {
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const [location, setLocation] = useState({
    country: '',
    province: '',
    cityOrMunicipality: '',
    specifics: '',
  })

  const countries = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
  }))
  const states = State.getStatesOfCountry(country).map((state) => ({
    value: state.isoCode,
    label: state.name,
  }))
  const cities = City.getCitiesOfState(country, state).map((city) => ({
    value: city.name,
    label: city.name,
  }))

  useEffect(() => {

    setCountry(country)
    setState(state)
    onLocationChange(location)
  }, [country, state, location])

  return (
    <div>
      <div className='grid grid-cols-2 gap-2'>
        <Select
          className='col-span-2 w-[20rem]  rounded-[.5rem] outline outline-1 outline-[#2B99FF]'
          showSearch
          placeholder='Select Country'
          optionFilterProp='children'
          filterOption={(input, option) =>
            (option?.label ?? '').includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '')
              .toLowerCase()
              .localeCompare((optionB?.label ?? '').toLowerCase())
          }
          options={countries}
          onChange={(value) => {
            const selectedOption = countries.find(
              (option) => option.value === value,
            )
            if (selectedOption) {
              setLocation({ ...location, country: selectedOption.label })
              setCountry(value)
            }
          }}
          value={location.country}
        />
        <Select
          className='w-[10rem] rounded-[.5rem]  outline outline-1 outline-[#2B99FF]'
          showSearch
          placeholder='Select State/Province'
          optionFilterProp='children'
          filterOption={(input, option) =>
            (option?.label ?? '').includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '')
              .toLowerCase()
              .localeCompare((optionB?.label ?? '').toLowerCase())
          }
          options={states}
          onChange={(value) => {
            const selectedOption = states.find(
              (option) => option.value === value,
            )
            if (selectedOption) {
              setLocation({ ...location, province: selectedOption.label })
              setState(value)
            }
          }}
          value={location.province}
        />
        <AutoComplete
          className='w-[10rem]  rounded-[.5rem] outline outline-1 outline-[#2B99FF]'
          style={{ width: '100%' }}
          options={cities}
          placeholder={'select city'}
          filterOption={(input, option) =>
            (option?.label ?? '').includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '')
              .toLowerCase()
              .localeCompare((optionB?.label ?? '').toLowerCase())
          }
          value={location.cityOrMunicipality}
          onChange={(value) => {
            setLocation({ ...location, cityOrMunicipality: value })
          }}
        />

        <AutoComplete
           className='w-[20rem]  rounded-[.5rem] outline outline-1 outline-[#2B99FF]'
          options={[]}
          placeholder='Specific Address'
          onChange={(value) => {
            setLocation({ ...location, specifics: value })
          }}
          value={location.specifics}
        />
      </div>
    </div>
  )
}

export default LocationSelector
