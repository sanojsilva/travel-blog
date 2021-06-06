import React from 'react'

function Paragraph(props) {
    return (
        <div>
            <div className="text mx-60 font-dosis text-lg text-gray-400 my-8">{props.text}</div>
        </div>
    )
}

export default Paragraph
