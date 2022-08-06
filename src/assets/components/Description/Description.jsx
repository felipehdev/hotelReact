import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import Title from '../Title/Title'
import S from './Description.module.css'

const Description = (props) => {
  return (
    <section className={S.descriptionCtn}>
      <Title title='13123'>{props.title}</Title>
      <Paragraph paragraph= '434566' >{props.paragraph} </Paragraph>


    </section>
  )
}

export default Description