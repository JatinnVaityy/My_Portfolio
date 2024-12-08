import React from 'react'

function Container({children}) {
  return (
    <>
    <div className=' mx-10 my-10 md:mx-20 md:my-20 flex justify-center '>
        {children}
    </div>
    </>
  )
}

export default Container