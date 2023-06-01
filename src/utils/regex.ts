const companies = [
  { name: 'Tres layer cake shop', url: 'https://example.com/abc-corporation' },
  { name: 'XYZ Inc.', url: 'https://example.com/xyz-inc' }
  // Add more company objects as needed
]

export const generateClickableText = (text: string): string => {
  let processedText = text

  for (let i = 0; i < companies.length; i++) {
    const company = companies[i]
    const companyNameRegex = new RegExp(company.name, 'gi')

    if (companyNameRegex.test(processedText)) {
      processedText = processedText.replace(
        companyNameRegex,
        `<span class="business-link" onClick={handleClick} href="${company.url}">${company.name}</span>`
      )
      break // Exit the loop if a match is found
    }
  }

  return processedText
}

export const regexLocation = (
  userInput: string,
  location: string | null
): string | null => {
  if (location === null) return null
  const replaceWith = `in ${location}`
  const regex = /\bnear\sme\b/
  const locationRegex = userInput.replace(regex, replaceWith)
  return locationRegex
}
