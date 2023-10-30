import { Button } from 'antd'
import React, { useState } from 'react'
import FileModal from './filemodal';

const ButtonOpen:React.FC = () => {

    const [open, setOpen] = useState<boolean>(false);

    const showModal = () => {
        setOpen(true);
    };

    return (
        <div>
            <Button type='primary' size='middle' ghost className='bg-white' onClick={showModal}> Create new dataset</Button>
            <FileModal open={open} setOpen={setOpen}/>
        </div>
    )
}

export default ButtonOpen

