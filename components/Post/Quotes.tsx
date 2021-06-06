import React from 'react'

function Quotes(props) {
    return (
        <div>
            <div className="subtitle font-playfair-italic text-2xl w-2/3  flex items-center ">
                <img src="quotes.png" alt=""  className="h-40"/> 
            <div className="-ml-20">{props.quote}</div> 
            </div>
        </div>
    )
}

export default Quotes
