import React, {FC} from "react";
import {Star} from "./Star/Star";

type PropsType = {
  value: number
}

export const Rating: FC<PropsType> = ({value, ...restProps}) => {
  console.log('Rating rendering')
  return (
    <div>
      <div>Rating</div>
      <Star selected={value >= 1}/>
      <Star selected={value >= 2}/>
      <Star selected={value >= 3}/>
      <Star selected={value >= 4}/>
      <Star selected={value >= 5}/>
    </div>
  )
}
