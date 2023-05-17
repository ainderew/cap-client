import React from 'react'

interface props {
  submit: any
  question: string
}
const CommonQuestions: React.FC<props> = ({ submit, question }) => {
  const handleClick = (e: any): void => {
    submit(e, true, question)
  }
  return (
    <div
      onClick={(e) => {
        handleClick(e)
      }}
      className="w-full bg-[#EBEBEB] px-4 py-4"
    >
      {question}
    </div>
  )
}

export default CommonQuestions
