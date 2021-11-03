import React, {FC} from 'react';

type PropsType = {
  selected: boolean
}

export const Star: FC<PropsType> = ({selected, ...restProps}) => {
  console.log('Star rendering')
  return (
    selected ? (<span><strong>star </strong></span>) : (<span>star </span>)
  )
}
