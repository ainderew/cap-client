import React from 'react'

export default function InputTextToTextFile(title:string, inputText:string,):File[]{
  const blob = new Blob([inputText], { type: "text/plain" });
  return [new File([blob], `${title}.txt`, {type: "text/plain",}),];
}
