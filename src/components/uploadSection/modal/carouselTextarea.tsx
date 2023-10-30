import React from 'react'
import { Input } from 'antd';

interface TextareaComponent{
    tag: string
    label: string
    details: string
    content: string;
    updateContentValue: (tag: string, value: string) => void;
}

const CarouselTextArea:React.FC<TextareaComponent> = ({tag, label, details, content, updateContentValue}) => {
    const {TextArea} = Input

    const handleInputChange = (tag: string) => (e: any) => {
        const value = e.target.value;
        updateContentValue(tag, value);
      };

      const handleKeyDown = (e:any) => {
        if (e.key === 'Tab') {
          e.preventDefault();
        }
      }

    return (
        <div className='p-4'>
            <p className='my-2 text-md font-semibold'>{label}</p>
            <div className='text-neutral-500 italic'>{details}</div>
            <div>
                <TextArea
                    autoSize={{ minRows: 8, maxRows: 10 }}
                    value={content}
                    onChange={handleInputChange(tag)}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
  )
}

export default CarouselTextArea
