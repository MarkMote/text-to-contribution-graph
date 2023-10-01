'use client';

import characters from "../../../characters";
// import characters from "../../../cleancharacters";
import { useState } from 'react'

function getShadeClass(value) {
  switch (value) {
    case 0:
      return 'bg-[#161b22]'; // color 1 
    case 1:
      return 'bg-[#0e4429]'; // color 2 
    case 2:
      return 'bg-[#006d32]'; // color 3 
    case 3:
      return 'bg-[#26a641]'; // color 4
    case 4:
      return 'bg-[#39d353]'; // color 5
    default:
      return 'bg-[#161b22]'; // default color
  }
}

const Main = () => {
  // Character to Binary Mapping

  // Selected String
  const [inputString, setInputString] = useState('');

  // Ensure the string is always of length 24 by appending spaces if needed
  const paddedString = inputString.padEnd(24, '_');

  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center text-center bg-earth bg-cover">
      <div className="flex flex-col min-h-screen w-full items-center justify-center text-center bg-[#0d1117]">
        <div className="container flex flex-col items-center justify-center gap-10 px-10 py-10 bg-opacity-100 
              w-screen mx-32 ">
          <input
            type="text"
            value={inputString}
            onChange={(e) => setInputString(e.target.value.toUpperCase())}
            className="mb-4 p-2 text-xl w-[400px] bg-emerald-100/10 
                      text-white/80 border border-[#292f36] rounded-[20px] px-5"
            placeholder="Enter string..."
          />
          <div className="w-screen">
            <div className="grid grid-cols-1  place-content-center  border border-[#292f36]
                      rounded-t-[20px] overflow-x-auto bg-white/0  p-[40px] mx-[60px]" >

              <div className="flex-col ">
                <div className="flex text-white/80 w-full bg-blue-500/0 pb-3 text-[28px]">

                  <div className="flex pl-[85px]">
                    Oct
                  </div>
                  <div className="flex pl-[130px]">
                    Nov
                  </div>
                  <div className="flex pl-[130px]">
                    Dec
                  </div>
                  <div className="flex pl-[130px]">
                    Jan
                  </div>
                  <div className="flex pl-[130px]">
                    Feb
                  </div>
                  <div className="flex pl-[130px]">
                    Mar
                  </div>
                  <div className="flex pl-[130px]">
                    Apr
                  </div>
                  <div className="flex pl-[130px]">
                    May
                  </div>
                  <div className="flex pl-[130px]">
                    Jun
                  </div>
                  <div className="flex pl-[130px]">
                    Jul
                  </div>
                  <div className="flex pl-[130px]">
                    Aug
                  </div>
                  <div className="flex pl-[130px]">
                    Sep
                  </div>
                  <div className="flex pl-[130px]">
                    Oct
                  </div>
                  <div className="flex pl-[130px]">
                    Nov
                  </div>
                  <div className="flex pl-[130px]">
                    Dec
                  </div>
                  <div className="flex pl-[130px]">
                    Jan
                  </div>
                  <div className="flex pl-[130px]">
                    Feb
                  </div>
                  <div className="flex pl-[130px]">
                    Mar
                  </div>
                  <div className="flex pl-[130px]">
                    Apr
                  </div>
                  <div className="flex pl-[130px]">
                    May
                  </div>
                  <div className="flex pl-[130px]">
                    Jun
                  </div>
                  <div className="flex pl-[130px]">
                    Jul
                  </div>
                  <div className="flex pl-[130px]">
                    Aug
                  </div>
                  <div className="flex pl-[130px]">
                    Sep
                  </div>
                  <div className="flex pl-[130px]">
                    Oct
                  </div>
                  <div className="flex pl-[130px]">
                    Nov
                  </div>
                  <div className="flex pl-[130px]">
                    Dec
                  </div>
                  <div className="flex pl-[130px]">
                    Jan
                  </div>
                  <div className="flex pl-[130px]">
                    Feb
                  </div>
                  <div className="flex pl-[130px]">
                    Mar
                  </div>
                  <div className="flex pl-[130px]">
                    Apr
                  </div>
                  <div className="flex pl-[130px]">
                    May
                  </div>
                  <div className="flex pl-[130px]">
                    Jun
                  </div>
                  <div className="flex pl-[130px]">
                    Jul
                  </div>
                  <div className="flex pl-[130px]">
                    Aug
                  </div>
                  <div className="flex pl-[130px]">
                    Sep
                  </div>
                  {/* add rest of months here with left padding 100 */}

                </div>
                <div className="flex   text-white/80">

                  <div className="flex-col w-[50px] text-white mr-6 text-right">
                    <div className="h-[32px] py-[5px] text-[28px] mt-[32px]">
                      Mon
                    </div>
                    <div className="h-[32px] py-[5px] text-[28px] mt-[52px]">
                      Wed
                    </div>
                    <div className="h-[32px] py-[5px] text-[28px] mt-[52px] mb-[52px]">
                      Fri
                    </div>
                  </div>

                  {paddedString.split('').map((char, charIndex) => (
                    <div key={charIndex} className="flex-none" style={{ minWidth: '192px' /* 32px * 6 */ }}>
                      <div className="grid grid-cols-6 gap-[10px] pl-[10px]">
                        {characters[char] ? characters[char].map((row, rowIndex) =>
                          row.map((cell, colIndex) =>
                            <div key={`${charIndex}-${rowIndex}-${colIndex}`}
                              className={`w-[32px] h-[32px] rounded-[6px] ${getShadeClass(cell)}
                                                  hover:bg-[#39d353]`}
                            />
                          )
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default function Home() {
  return (
    <>
      <main className="flex flex-col ">
        <Main />
      </main>
    </>
  )
}
