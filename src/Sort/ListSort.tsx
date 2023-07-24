import React, { useState } from "react";
type list = {
  img: string;
  name: string;
  Chain: string[];
  Protocol: string[];
  Assets: string[];
  Deposited: number;
  TVL: number;
  Risk: number;
  Total: number;
};
type prop = {
  item: list;
  index: number;
};
export default function ListSort(props: prop) {
  const { item, index } = props;

  return (
    <div
      className="w-full h-[86px] flex items-center justify-around shadow-sm hover:shadow-sss hover:transition-all hover:duration-300 hover:z-50   text-base font-normal text-white"
      style={{ backgroundColor: index % 2 === 0 ? "rgba(18,27,27,.7)" : "#000000"}}
    >
      <div className="w-1/6 h-full flex justify-start items-center space-x-3 ">
        <img style={{ width: "35px" }} src={item.img} alt={item.img} />
        <p className=" font-ru" style={{background:'linear-gradient(93.13deg,#7d6ff6 -43.79%,#58e1d9 149.86%)',WebkitBackgroundClip:'text' , WebkitTextFillColor:'transparent'}}>{item.name}</p>
      </div>
      <div className="w-1/12 h-10 flex justify-center items-center -space-x-3">
        {item.Chain.filter((item, index) => index < 3).map((item, index) => (
          <img
            className=" bg-white w-33 h-fit rounded-full"
            src={item}
            alt={item}
          />
        ))}
        <span className=" font-ru" style={{ marginLeft: "10px" }}>+{item.Chain.length - 3}</span>
      </div>
      <div className="w-1/12 h-10 flex justify-start items-center -space-x-3">
        {item.Protocol.filter((item, index) => index < 3).map((item, index) => (
          <img
            className=" bg-white w-33 h-fit rounded-full"
            src={item}
            alt={item}
          />
        ))}
        <span className=" font-ru"
          style={{
            marginLeft: "10px",
            display: item.Protocol.length > 3 ? "" : "none",
          }}
        >
          +{item.Protocol.length - 3}
        </span>
      </div>
      <div className="w-1/12 h-10 flex justify-start items-center -space-x-3">
        {item.Assets.filter((item, index) => index < 3).map((item, index) => (
          <img
            className=" bg-white w-33 h-fit rounded-full"
            src={item}
            alt={item}
          />
        ))}
        <span className=" font-ru"
          style={{
            marginLeft: "10px",
            display: item.Assets.length > 3 ? "" : "none",
          }}
        >
          +{item.Assets.length - 3}
        </span>
      </div>
      <div className="w-1/12 h-10 flex justify-center items-center font-ru text-lg">
        ${item.Deposited}K
      </div>
      <div className="w-1/12 h-10 flex justify-center items-center font-ru text-lg">
        ${item.TVL}M
      </div>
      <div className="w-1/12 h-10 flex justify-center items-center font-ru">
        <div className="w-12 h-8 flex items-end justify-between">
            <div className="w-[10%] bg-zinc-500 h-[20%]"  style={{backgroundColor:item.Risk >= 1? '#06e903': '' }} ></div>
            <div className="w-[10%] bg-zinc-500 h-[40%]"  style={{backgroundColor:item.Risk >= 2? '#a7cf53': '' }} ></div>
            <div className="w-[10%] bg-zinc-500 h-[60%]"  style={{backgroundColor:item.Risk >= 3? '#d7c256': '' }} ></div>
            <div className="w-[10%] bg-zinc-500 h-[80%]"  style={{backgroundColor:item.Risk >= 4? '#d75656': '' }} ></div>
            <div className="w-[10%] bg-zinc-500 h-[100%]" style={{backgroundColor:item.Risk >= 5? '#e53737': '' }} ></div>
        </div>

      </div>
      <div className="w-1/12 h-10 flex justify-center items-center font-ru text-lg text-[#49c25c]">
        {item.Total}%
      </div>
    </div>
  );
}
