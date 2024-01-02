import React from 'react'

function EventsFunctional() {
    function clickHandler(){
        console.log(" EventsFunctional - clicked")
    }
  return (
    <div>
        <button onClick={clickHandler}>
            EventsFunctional - click
        </button>
    </div>
  )
}

export default EventsFunctional