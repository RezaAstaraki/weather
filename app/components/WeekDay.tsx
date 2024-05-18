import Image from "next/image";
import React from "react";
import { WeatherData } from "../utils/types";
import { enNumToFa } from "../utils/convertors";

const WeekDay: React.FC<WeatherData> = ({ ...data }: WeatherData) => {
  return (
    <div
      className={`h-10 border-b flex flex-row justify-between border-b-white/10 items-center ${data.className}`}
    >
      <div className="text-sm md:text-base">{data.dateTitle.split(" ")[0]}</div>
      <div>
        <Image
          width={40}
          height={40}
          alt=""
          src={`/icons/xxl-icons/${data?.weather.icon}.png`}
        />
      </div>
      <div className="flex flex-row gap-5 md:gap-10 text-xs md:text-sm">
        <span>{enNumToFa(data.max)} حداكثر</span>
        <span>{enNumToFa(data.min)} حداقل</span>
      </div>
    </div>
  );
};

export default WeekDay;
