import React from 'react'

function ImageGrid() {
    return (
        <div className="grid grid-cols-3 gap-8 mx-28 my-8">
            <div className=""><img src="post3.jpg" alt="" className="" /><div className="img-cap text-sm text-gray-400 font-dosis">Glacier Maruelno, Antoan, Hiking</div></div>
            <div className=""><img src="post2.jpg" alt="" className="" /><div className="img-cap text-sm text-gray-400 font-dosis">Glacier Maruelno, Antoan, Hiking</div></div>
            <div className=""><img src="post1.jpg" alt="" className="" /><div className="img-cap text-sm text-gray-400 font-dosis">Glacier Maruelno, Antoan, Hiking</div></div>
        </div>
    )
}

export default ImageGrid
