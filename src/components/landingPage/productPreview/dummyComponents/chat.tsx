import React from "react";

interface DummyChatProps{
    content: string
}

function DummyChat({content}: DummyChatProps):React.ReactElement{
    return(
        <div className="rounded-sm ">
            {content}
        </div>
    )
}