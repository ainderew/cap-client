/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useCallback, useEffect, useState } from 'react'
import useStores from '@/core/stores/UseStores'
import { observer } from 'mobx-react'
import { type SimpleBusiness } from '@/utils/types/base'
import usePostData from '@/hooks/usePostData'
import { config } from '../../config'
import useFetchData from '@/hooks/useFetchData'

interface props {
  response: string
  modalOpener: any
}

const SpecificBusinessLink: React.FC<props> = ({ response, modalOpener }) => {
  const { uiStore: { setModalData, setBusiness }, authStore: { userProfile } } = useStores()
  const [companies, setCompanies] = useState<any>([])
  const [businessId, setBusinessId] = useState<string>('')

  const { handlePostRequest } = usePostData(`${config.BACKEND_ENDPOINT}/api/clicked/${businessId}/${userProfile?._id ?? 0}`)
  const { data, loading } = useFetchData(`${config.BACKEND_ENDPOINT}/api/business/all`)

  useEffect(() => {
    if (data === null || data === undefined) return

    setCompanies(data)
  }, [data])

  useEffect(() => {
    void handlePostRequest()
  }, [businessId])

  const handleClick = useCallback(async (company: SimpleBusiness) => {
    setModalData({
      componentName: 'SpecificChat',
      width: '90vw',
      height: '90vh',
      options: {
        showTitle: false,
        showCancelButton: false,
        showSubmitButton: false
      }
    })
    console.log(company)
    setBusinessId(company.businessId)
    setBusiness(company)
    modalOpener(true)
  }, [])

  const generateClickableText = (text: string): React.ReactNode => {
    const processedText: React.ReactNode[] = []
    let currentIndex = 0

    while (currentIndex < text.length) {
      let matchFound = false

      for (let i = 0; i < companies.length; i++) {
        const company = companies[i]
        const companyNameRegex = new RegExp(company.name, 'gi')
        companyNameRegex.lastIndex = currentIndex

        const match = companyNameRegex.exec(text)

        if (match && match.index === currentIndex) {
          processedText.push(text.substring(currentIndex, match.index))
          processedText.push(
            <span
              key={currentIndex}
              className="business-link cursor-pointer"
              onClick={() => { void handleClick(company) }}
            >
              {match[0]}
            </span>
          )
          currentIndex = match.index + match[0].length
          matchFound = true
          break
        }
      }

      if (!matchFound) {
        processedText.push(text[currentIndex])
        currentIndex++
      }
    }

    return processedText
  }

  const newResponse = generateClickableText(response)

  if (loading) return <>loading</>
  return <div className="">{newResponse}</div>
}

export default observer(SpecificBusinessLink)
