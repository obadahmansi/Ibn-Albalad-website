import React from 'react'

function Section(props){
  return (
    <div className="py-10 lg:py-16 xl:py-20 m-auto">
        {props.children}
    </div>
  )
}

export default Section;