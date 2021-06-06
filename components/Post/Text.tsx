import React from 'react'
import Paragraph from './Paragraph'
import Quotes from './Quotes'

function Text() {
    return (
        <div className="mx-28">
            <div className="date flex justify-between items-center mx-60 font-montserrat text-xs text-green-600 py-8 ">
                <div className="">MAR 23, 2020</div>
                <div className="">CITYBREAK</div>
            </div>
            <div className=" mx-60 text-green-600 "><hr /></div>
            <Paragraph text="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident. Quisque id enim malesuada metus porta sollicitudin id eget orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus a nulla leo.  Fusce molestie luctus vulputate."/>
            <Quotes quote="North Atlantic island sit dolor inspiration for life is a pseudo Latin text used in web design, typography."/>
            
            <Paragraph text="psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident. Quisque id enim malesuada metus porta sollicitudin id eget orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus a nulla leo. Aenean euismod lectus ut felis porttitor pharetra. Vestibulum porttitor, nulla sit amet vulputate."/>
            
        </div>
    )
}

export default Text
