import Image from "next/image";
import React from "react";

import { WeatherData } from "../utils/types";

const Today: React.FC<WeatherData> = ({ ...data }: WeatherData) => {
  console.log(data);
  return (
    <div className="relative flex flex-col items-center justify-center">
      <Image
        className="w-[180px] h-[180px] md:h-[220px] md:w-[220px]"
        width={200}
        height={200}
        alt=""
        src={`/icons/xxl-icons/${data.weather.icon}.png`}
      />

      <div
        id="data"
        className="flex flex-col items-center w-full  gap-2 md:gap-3"
      >
        <div className="text-3xl md:text-4xl font-bold">{data.current}°</div>
        <div className="font-bold">{data.customDescription?.text}</div>
        <div className="flex flex-row gap-10">
          <span className="">{data.max} حداكثر</span>
          <span className="">{data.min} حداقل</span>
        </div>
      </div>
    </div>
  );
};

export default Today;
