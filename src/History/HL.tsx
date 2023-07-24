import React from "react";
type H = {
  elem: {
    date: string;
    name: string;
    apr: string;
  };
  ind: number;
};
export default function HL(props: H) {
  const { elem, ind } = props;
  return (
    <div className="divHL">
      <p>{elem.date}</p>
      <p>{elem.name}</p>
      <p>{elem.apr}</p>
    </div>
  );
}
