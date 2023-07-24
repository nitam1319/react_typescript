import React, { useState } from "react";
import ListSort from "./ListSort";

export default function Sort() {
  const [data, setData] = useState([
    {
      img: "/noya/Aave.svg",
      name: "AAVE Vault",
      Chain: [
        "/noya/arbitrum.svg",
        "/noya/avax.svg",
        "/noya/eth.svg",
        "/noya/arbitrum.svg",
        "/noya/avax.svg",
        "/noya/eth.svg",
        "/noya/eth.svg",
      ],
      Protocol: ["/noya/Aave.svg"],
      Assets: [
        "/noya/frax.svg",
        "/noya/LUSD.webp",
        "/noya/Tether.svg",
        "/noya/frax.svg",
        "/noya/LUSD.webp",
        "/noya/Tether.svg",
      ],
      Deposited: 100,
      TVL: 10,
      Risk: 2,
      Total: 8,
    },
    {
      img: "/noya/stable.svg",
      name: "Bridge Optimizer Stablecoin",
      Chain: [
        "/noya/arbitrum.svg",
        "/noya/avax.svg",
        "/noya/eth.svg",
        "/noya/arbitrum.svg",
        "/noya/avax.svg",
        "/noya/eth.svg",
        "/noya/eth.svg",
      ],
      Protocol: [
        "/noya/connext.svg",
        "/noya/stargate.svg",
        "/noya/hop.svg",
        "/noya/connext.svg",
        "/noya/stargate.svg",
        "/noya/hop.svg",
      ],
      Assets: [
        "/noya/USDC.svg",
        "/noya/BUSD.svg",
        "/noya/Tether.svg",
        "/noya/USDC.svg",
        "/noya/BUSD.svg",
        "/noya/Tether.svg",
        "/noya/USDC.svg",
        "/noya/BUSD.svg",
      ],
      Deposited: 100,
      TVL: 10,
      Risk: 3,
      Total: 10,
    },
    {
      img: "/noya/DAI.svg",
      name: "DAI VAULT",
      Chain: [
        "/noya/eth.svg",
        "/noya/op.svg",
        "/noya/gnosis.svg",
        "/noya/eth.svg",
        "/noya/op.svg",
        "/noya/gnosis.svg",
        "/noya/eth.svg",
        "/noya/op.svg",
      ],
      Protocol: ["/noya/Aave.svg", "/noya/prtcl.svg", "/noya/curve.svg"],
      Assets: ["/noya/DAI.svg", "/noya/USDC.svg"],
      Deposited: 100,
      TVL: 10,
      Risk: 1,
      Total: 12,
    },
    {
      img: "/noya/stable.svg",
      name: "Long/Short Strategy Stablecoin",
      Chain: [
        "/noya/arbitrum.svg",
        "/noya/avax.svg",
        "/noya/eth.svg",
        "/noya/arbitrum.svg",
        "/noya/avax.svg",
        "/noya/eth.svg",
        "/noya/eth.svg",
      ],
      Protocol: [
        "/noya/just.svg",
        "/noya/Aave.svg",
        "/noya/prtcl.svg",
        "/noya/curve.svg",
        "/noya/Aave.svg",
        "/noya/prtcl.svg",
        "/noya/curve.svg",
      ],
      Assets: [
        "/noya/USDC.svg",
        "/noya/BUSD.svg",
        "/noya/Tether.svg",
        "/noya/USDC.svg",
        "/noya/BUSD.svg",
        "/noya/USDC.svg",
        "/noya/BUSD.svg",
        "/noya/Tether.svg",
      ],
      Deposited: 100,
      TVL: 10,
      Risk: 3,
      Total: 7,
    },
    {
      img: "/noya/stable.svg",
      name: "Stablecoin Safe",
      Chain: [
        "/noya/eth.svg",
        "/noya/op.svg",
        "/noya/chain.svg",
        "/noya/eth.svg",
      ],
      Protocol: ["/noya/Aave.svg", "/noya/prtcl.svg", "/noya/curve.svg"],
      Assets: ["/noya/USDC.svg", "/noya/BUSD.svg", "/noya/Tether.svg"],
      Deposited: 100,
      TVL: 10,
      Risk: 1,
      Total: 9,
    },
    {
      img: "/noya/stable.svg",
      name: "Stablecurve Maxi",
      Chain: [
        "/noya/arbitrum.svg",
        "/noya/avax.svg",
        "/noya/eth.svg",
        "/noya/arbitrum.svg",
        "/noya/avax.svg",
        "/noya/eth.svg",
      ],
      Protocol: ["/noya/curve.svg"],
      Assets: [
        "/noya/USDC.svg",
        "/noya/BUSD.svg",
        "/noya/Tether.svg",
        "/noya/USDC.svg",
        "/noya/BUSD.svg",
        "/noya/Tether.svg",
        "/noya/USDC.svg",
        "/noya/BUSD.svg",
      ],
      Deposited: 100,
      TVL: 10,
      Risk: 2,
      Total: 14.27,
    },
    {
      img: "/noya/stable.svg",
      name: "Supply - Borrow Strategy (Stable)",
      Chain: [
        "/noya/arbitrum.svg",
        "/noya/avax.svg",
        "/noya/eth.svg",
        "/noya/arbitrum.svg",
        "/noya/avax.svg",
        "/noya/eth.svg",
        "/noya/eth.svg",
      ],
      Protocol: ["/noya/Aave.svg", "/noya/prtcl.svg"],
      Assets: ["/noya/USDC.svg", "/noya/BUSD.svg", "/noya/Tether.svg"],
      Deposited: 100,
      TVL: 10,
      Risk: 1,
      Total: 5,
    },
    {
      img: "/noya/sUSD.svg",
      name: "sUSD Vault",
      Chain: [
        "/noya/eth.svg",
        "/noya/op.svg",
        "/noya/gnosis.svg",
        "/noya/eth.svg",
        "/noya/op.svg",
        "/noya/gnosis.svg",
        "/noya/eth.svg",
        "/noya/op.svg",
      ],
      Protocol: ["/noya/Aave.svg", "/noya/prtcl.svg", "/noya/curve.svg"],
      Assets: ["/noya/sUSD.svg", "/noya/DAI.svg"],
      Deposited: 100,
      TVL: 10,
      Risk: 2,
      Total: 17,
    },
  ]);
  const [n1, setN1] = useState(false);
  const [n2, setN2] = useState(false);
  const [n3, setN3] = useState(false);
  const [n4, setN4] = useState(false);
  const [n5, setN5] = useState(false);
  const [n6, setN6] = useState(false);
  const [n7, setN7] = useState(false);
  const [n8, setN8] = useState(false);
  function fn1() {
    setN1(!n1);
    setN2(false);
    setN3(false);
    setN4(false);
    setN5(false);
    setN6(false);
    setN7(false);
    setN8(false);
    if (n1) {
      data.sort((a, b) => {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x > y) {
          return +1;
        }
        if (x < y) {
          return -1;
        }
        return 0;
      });
    } else {
      data.sort((a, b) => {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x > y) {
          return -1;
        }
        if (x < y) {
          return +1;
        }
        return 0;
      });
    }
  }
  function fn2() {
    setN1(false);
    setN2(!n2);
    setN3(false);
    setN4(false);
    setN5(false);
    setN6(false);
    setN7(false);
    setN8(false);
    if (n2) {
      data.sort((a, b) => {
        return a.Chain.length - b.Chain.length;
      });
    } else {
      data.sort((a, b) => {
        return b.Chain.length - a.Chain.length;
      });
    }
  }
  function fn3() {
    setN1(false);
    setN2(false);
    setN3(!n3);
    setN4(false);
    setN5(false);
    setN6(false);
    setN7(false);
    setN8(false);
    if (n3) {
      data.sort((a, b) => {
        return a.Protocol.length - b.Protocol.length;
      });
    } else {
      data.sort((a, b) => {
        return b.Protocol.length - a.Protocol.length;
      });
    }
  }
  function fn4() {
    setN1(false);
    setN2(false);
    setN3(false);
    setN4(!n4);
    setN5(false);
    setN6(false);
    setN7(false);
    setN8(false);
    if (n4) {
      data.sort((a, b) => {
        return a.Assets.length - b.Assets.length;
      });
    } else {
      data.sort((a, b) => {
        return b.Assets.length - a.Assets.length;
      });
    }
  }
  function fn5() {
    setN1(false);
    setN2(false);
    setN3(false);
    setN4(false);
    setN5(!n5);
    setN6(false);
    setN7(false);
    setN8(false);
    if (n5) {
      data.sort((a, b) => {
        return a.Deposited - b.Deposited;
      });
    } else {
      data.sort((a, b) => {
        return b.Deposited - a.Deposited;
      });
    }
  }
  function fn6() {
    setN1(false);
    setN2(false);
    setN3(false);
    setN4(false);
    setN5(false);
    setN6(!n6);
    setN7(false);
    setN8(false);
    if (n6) {
      data.sort((a, b) => {
        return a.TVL - b.TVL;
      });
    } else {
      data.sort((a, b) => {
        return b.TVL - a.TVL;
      });
    }
  }
  function fn7() {
    setN1(false);
    setN2(false);
    setN3(false);
    setN4(false);
    setN5(false);
    setN6(false);
    setN7(!n7);
    setN8(false);
    if (n7) {
      data.sort((a, b) => {
        if (a.Risk - b.Risk === 0) {
          return b.Total - a.Total;
        }
        return a.Risk - b.Risk;
      });
    } else {
      data.sort((a, b) => {
        if (b.Risk - a.Risk === 0) {
          return b.Total - a.Total;
        }
        return b.Risk - a.Risk;
      });
    }
  }
  function fn8() {
    setN1(false);
    setN2(false);
    setN3(false);
    setN4(false);
    setN5(false);
    setN6(false);
    setN7(false);
    setN8(!n8);
    if (n8) {
      data.sort((a, b) => {
        if (a.Total - b.Total === 0) {
          return b.Risk - a.Risk;
        }
        return a.Total - b.Total;
      });
    } else {
      data.sort((a, b) => {
        if (b.Total - a.Total === 0) {
          return b.Risk - a.Risk;
        }
        return b.Total - a.Total;
      });
    }
  }
  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center mt-14  " style={{backgroundImage: 'url(http://www.w3.org/2000/svg)'}}>
      <div className="w-10/12 h-[95%] flex flex-col justify-start bg-black border border-spacing-1  border-zinc-700 shadow-2xl shadow-slate-800">
        <div className="w-full h-16 flex items-center justify-around text-white">
          <div
            className="h-full w-1/6 flex justify-center items-center space-x-2"
            onClick={fn1}
          >
            <span>Omnivault</span>
            <div className={n1?"rotate-180 transition-all duration-500 ": 'rotate-0 transition-all duration-500'}>
              <svg

                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
          <div
            className="w-1/12 h-10 flex justify-center items-center space-x-2"
            onClick={fn2}
          >
            <span>Chain</span>
            <div className={n2?"rotate-180 transition-all duration-500 ": 'rotate-0 transition-all duration-500'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
            </div>
          </div>
          <div
            className="w-1/12 h-10 flex justify-center items-center space-x-2"
            onClick={fn3}
          >
            <span>Protocol</span>
            <div className={n3?"rotate-180 transition-all duration-500 ": 'rotate-0 transition-all duration-500'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
            </div>
          </div>
          <div
            className="w-1/12 h-10 flex justify-center items-center space-x-2"
            onClick={fn4}
          >
            <span>Assets</span>
            <div className={n4?"rotate-180 transition-all duration-500 ": 'rotate-0 transition-all duration-500'}>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
            </div>
          </div>
          <div
            className="w-1/12 h-10 flex justify-center items-center space-x-2"
            onClick={fn5}
          >
            <span>Deposited</span>
            <div className={n5 ?"rotate-180 transition-all duration-500 ": 'rotate-0 transition-all duration-500'}>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
            </div>
          </div>
          <div
            className="w-1/12 h-10 flex justify-center items-center space-x-2"
            onClick={fn6}
          >
            <span>TVL</span>
            <div className={n6?"rotate-180 transition-all duration-500 ": 'rotate-0 transition-all duration-500'}>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
            </div>
          </div>
          <div
            className="w-1/12 h-10 flex justify-center items-center space-x-2"
            onClick={fn7}
          >
            <span>Risk</span>
            <div className={n7?"rotate-180 transition-all duration-500 ": 'rotate-0 transition-all duration-500'}>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
            </div>
          </div>
          <div
            className="w-1/12 h-10 flex justify-center items-center space-x-2"
            onClick={fn8}
          >
            <span>Total APY</span>
            <div className={n8?"rotate-180 transition-all duration-500 ": 'rotate-0 transition-all duration-500'}>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
            </div>
          </div>
        </div>
        {data.map((item, index) => (
          <ListSort item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
