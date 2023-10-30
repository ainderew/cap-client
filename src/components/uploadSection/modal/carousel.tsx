import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Carousel, Input } from 'antd'
import { CarouselRef } from 'antd/es/carousel'
import React, { useEffect, useRef, useState } from 'react'
import { ContentProps, DataProps } from './filemodal'
import CarouselTextArea from './carouselTextarea'

interface CarouselProps{
    content: ContentProps
    data: DataProps
    setContent: React.Dispatch<React.SetStateAction<ContentProps>>
    setData: React.Dispatch<React.SetStateAction<DataProps>>
    setDisableSubmit: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalCarousel:React.FC<CarouselProps> = ({content, data, setContent, setDisableSubmit, setData}) => {
    const ref = useRef<CarouselRef|null>(null)
    const {TextArea} = Input
    const[current, setCurrent] = useState<number>(0)
    const [disablePrev, setDisablePrev] = useState<boolean>(false)
    const [disableNext, setDisableNext] = useState<boolean>(false)

    const updateContentValue = (key: string, value: string) => {
        setContent((prevContent) => ({
          ...prevContent,
          [key]: value,
        }));
      };

    useEffect(()=>{
        let compiledInput = `${content.description}\n${content.prodserv}\n${content.policies}\n${content.other}`
        setData({...data, inputText: compiledInput})
    },[content])

    useEffect(()=>{
        if(current === 0) setDisablePrev(true)
        else setDisablePrev(false)

        if(current === 5) {
            setDisableNext(true)
            setDisableSubmit(false)
        }else {
            setDisableNext(false)
            setDisableSubmit(true)
        }

    },[current])

    const list = [
        {
            tag: 'description', 
            label: 'Description"', 
            details: `Give us a brief overview of your business and what it can offer to customers`,
            content: content.description 
        },{
            tag: 'prodserv', 
            label: 'Products and Service:', 
            details: `Provide us with information about your products and services (you can include pricing and features if possible)`,
            content: content.prodserv 
        },{
            tag: 'policies', 
            label: 'Policies, Terms and Conditions:', 
            details: `Details about your companies regulations (this could include return, refunds, warranties, etc.)`,
            content: content.policies 
        },{
            tag: 'other', 
            label: 'Other Information:', 
            details: `Outline other information you want the customer to know about your business`,
            content: content.other 
        },
    ]
    return (
        <div>
            <Carousel ref={ref} className='max-w-[80vh]' afterChange={(e:number)=>setCurrent(e)}>
                <div className='p-4'>
                    <div>
                        <p>Create New Dataset</p>
                    </div>
                    <p className='my-2 text-md font-semibold'>Title</p>
                    <div className='text-neutral-500 italic'>{`The name of the dataset`}</div>
                    <div>
                        <Input 
                            type="text" value={data.title} 
                            onChange={(e)=>{setData({...data, title: e.target.value})}}
                            onKeyDown={(e)=>{
                                if (e.key === 'Tab') {
                                e.preventDefault();
                              }}}
                        /></div>
                </div>
                {list.map((value, key)=>(
                    <CarouselTextArea 
                        key={key}
                        tag={value.tag} 
                        label={value.label} 
                        details={value.details} 
                        content={value.content} 
                        updateContentValue={updateContentValue}/>
                ))

                }
                <div className='p-4'>
                    <p className='my-2 text-md font-semibold'>Preview:</p>
                    <div className='overflow-y-auto max-h-60'>
                        <p className='my-2 text-md font-semibold'>{data.title}</p>
                        <p>{content.description}</p>
                        <p>{content.prodserv}</p>
                        <p>{content.policies}</p>
                        <p>{content.other}</p>
                    </div>
                </div>
            </Carousel>
            <div className='m-4'>
                <Button onClick={()=>{ ref.current?.prev()}} icon={<LeftOutlined/>} type='text' disabled={disablePrev}/>
                <Button onClick={()=>{ ref.current?.next()}} icon={<RightOutlined/>} type='text' disabled={disableNext}/>
            </div>
        </div>
    )
}

export default ModalCarousel
