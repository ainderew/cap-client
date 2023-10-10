import React from "react";

interface DummyChatProps{
    content: string
}

function PreviewChat({content}: DummyChatProps):React.ReactElement{
    return(
        <div className="rounded-xl text-xs xl:text-base bg-white flex gap-2 self-end items-center justify-end px-4 py-2">
            {content}
            <div className="rounded-full w-6 h-6 bg-slate-300"></div>
        </div>
    )
}


export default PreviewChat