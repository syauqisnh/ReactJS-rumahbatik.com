import React from 'react'
import './Company.css'

const Company = () => {
  return (
    <div className="c-wrapper">
        <div className="c-container">
          <div className="chocoText judul">
          <h1>Didukung oleh:</h1>
          </div>
            <div className="c-content">
                <img src="./wonder.png" alt="Wonderful" height={70}/>
                <img src="./BI.png" alt="Wonderful" height={70}/>
                <img src="./batikair.png" alt="Wonderful" height={60}/>
                <img src="./bli.png" alt="Wonderful" height={70}/>
            </div>
        </div>
    </div>
  )
}

export default Company