/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useCallback } from 'react'
import useStores from '@/core/stores/UseStores'
import { observer } from 'mobx-react'
import { SimpleBusiness } from '@/utils/types/base'
import SpecificChat from './modals/modalDictionary/specificChat/specificChatModal'
import usePostData from '@/hooks/usePostData'
import { config } from '../../config'
import useChatWithAi from '@/hooks/useChatWithAi'
import { ResponseRoles } from '@/utils/enums'

interface props {
  response: string
  modalOpener: any
}

const companies = [
  { name: "Leona's", location: "Mabolo, SM Cebu City", url: 'https://leonas.com/', image: "/leonas.jpeg" },
  { name: 'Golden Pastry',location: "Lahug, 123 Bulding", url: 'https://goldenpastry.com/',  image: "/gold.png"  }
  // Add more company objects as needed
]
const SpecificBusinessLink: React.FC<props> = ({ response, modalOpener }) => {
const {uiStore:{setModalData}, authStore:{userProfile}} = useStores()


 const {handlePostRequest} = usePostData(`${config.BACKEND_ENDPOINT}/api/clicked/653260b8bdbc2114a3abcac7/${userProfile?._id ?? 0}`)
 const {doSpecific} = useChatWithAi()
 

  const handleClick = useCallback((company:SimpleBusiness) => {
    setModalData({
      componentName: "SpecificChat",
      width: "90vw",
      height: "90vh",
      options:{
        showTitle: false,
        showCancelButton: false,
        showSubmitButton: false
      }
    })
    doSpecific({ content: 'only respond with info about leonas and dont reply about others', role: ResponseRoles.user })
    
    modalOpener(true)
    handlePostRequest();
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
              onClick={() => handleClick(company)}
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

  return <div className="">{newResponse}</div>
}

export default observer(SpecificBusinessLink)
