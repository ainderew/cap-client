import { Carousel, Input } from 'antd'
import React, { useState } from 'react'

export interface ContentProps{
    description: string
    prodserv: string
    policies: string
    other: string
}

const ModalCarousel:React.FC = () => {
    const [title, setTitle] = useState<string>('')
    const [collectedData, setCollectedData] = useState<string>(
        
    )
    const [content, setContent] = useState<ContentProps>(
        {
            description: '',
            prodserv: '',
            policies: '',
            other: '',
        }
    )

    return (
        <Carousel dotPosition={'bottom'}>
            <div>
                <p>Title</p>
                <Input placeholder=''/>
            </div>
            <div>
                <p>Title</p>
                <div><input type="text" /></div>
            </div>
            <div>
                <p>Description</p>
                <div>{`Tell us about your business`}</div>
                <div><input type="textarea" /></div>
            </div>
            <div>
                <p>Products and Service:</p>
                <div>{`Provide us with information about your products and services (you can include pricing and features if possible)`}</div>
                <div><input type="textarea" /></div>
            </div>
            <div>
                <p>Policies, Terms and Conditions:</p>
                <div>{`Details about your companies regulations (this could include return, refunds, warranties, etc.)`}</div>
                <div><input type="textarea" /></div>
            </div>
            <div>
                <p>Other information:</p>
                <div>{`Outline other information you want the customer to know about your business`}</div>
                <div><input type="textarea" /></div>
            </div>
        </Carousel>
    )
}

export default ModalCarousel
