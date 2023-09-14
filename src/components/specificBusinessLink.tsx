/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useCallback } from 'react'

interface props {
  response: string
  modalOpener: any
}

const companies = [
  { name: 'Tres layer cake shop', url: 'https://example.com/abc-corporation' },
  { name: 'XYZ Inc.', url: 'https://example.com/xyz-inc' }
  // Add more company objects as needed
]
const SpecificBusinessLink: React.FC<props> = ({ response, modalOpener }) => {
  const handleClick = useCallback(() => {
    console.log('HERE') // Call the parent's click handler
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
              className="business-link"
              onClick={handleClick}
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

export default SpecificBusinessLink
