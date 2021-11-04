import React, {useState} from 'react';

type PropsType = {
  on: boolean
}

export const OnOff = (props: PropsType) => {

  const [statusOn, setStatusOn] = useState(props.on)

  const onStyle = {
    display: "inline-block",
    width: "30px",
    height: "20px",
    border: "1px solid",
    backgroundColor: statusOn ? "green" : "white",
  }
  const offStyle = {
    display: "inline-block",
    width: "30px",
    height: "20px",
    border: "1px solid",
    marginLeft: "2px",
    backgroundColor: !statusOn ? "red" : "white",
  }
  const indicatorStyle = {
    display: "inline-block",
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid",
    marginLeft: "2px",
    backgroundColor: statusOn ? "green" : "red",
  }


  return (
    <div>
      <div onClick={() => setStatusOn(true)} style={onStyle}>On</div>
      <div onClick={() => setStatusOn(false)} style={offStyle}>Off</div>
      <div onClick={() => setStatusOn(!statusOn)} style={indicatorStyle}/>
    </div>
  );
};
