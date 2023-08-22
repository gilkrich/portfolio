import React from 'react'

const Skill = ({pic,title}) => {
  return (
    <div className='skill-div notskill'>
      <img className='prog-lang' src={pic} alt="" />
    <h3 className='prog-title'>{title}</h3>
    </div>
  )
}

export default Skill
