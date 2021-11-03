import React, {FC} from 'react';

type PropsType = {
  title: string
}

export const AccordionTitle: FC<PropsType> = ({title, ...restProps}) => {
  console.log('AccordionTitle rendering')
  return (
    <h3>{title}</h3>
  )
}
