import React from 'react'

function HeroImagebox(props) {
    return (
        <>
            <img
        src={props.img}
        alt=""
        className="col-span-1 bg-cover w-full h-full"
      />
        </>
    )
}

export default HeroImagebox
