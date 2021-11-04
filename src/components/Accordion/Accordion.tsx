import React, {FC} from "react";
import {AccordionBody} from "./AccordionBody/AccordionBody";
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";

type PropsType = {
  accordionTitle: string
  collapsed: boolean
}

export const Accordion: FC<PropsType> = ({accordionTitle, ...restProps}) => {
  console.log('Accordion rendering')
  return (
    <div>
      <AccordionTitle title={accordionTitle}/>
      {!restProps.collapsed && <AccordionBody/>}
    </div>
  )
}