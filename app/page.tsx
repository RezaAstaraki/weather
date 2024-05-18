"use client";

import { global } from "styled-jsx/css";
import calender from "../public/icons/calender.svg";
import type { WeatherData } from "./utils/types";
import location from "../public/icons/map.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  convertDateToPersian,
  enNumToFa,
  getCurrentDate,
  isDayOrNight,
} from "./utils/convertors";
import WeekDay from "./components/WeekDay";

export default function Home() {
  const [data, setData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async (): Promise<WeatherData[]> => {
    try {
      const response = await fetch(
        "https://api.dastyar.io/express/weather?lat=35.67194277&lng=51.42434403"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: WeatherData[] = await response.json();
      return data;
    } catch (error: any) {
      throw new Error(`Fetch error: ${error?.message}`);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getData();
        setData(data);
      } catch (error: any) {
        setError(error?.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
    // console.log(isDayOrNight());
    // const dateFormat = new Intl.DateTimeFormat(Date.now(), options);

    console.log(convertDateToPersian());

    console.log(enNumToFa("5537.5654"));
    console.log(enNumToFa(5537.35));
  }, [loading]);

  return (
    <div className="min-h-screen flex flex-col  max-w-[1440px] px-4 py-8 md:px-14 md:py-16 md:gap-20 text-sm md:text-base">
      {error}

      {/* {JSON.stringify(data)} */}

      <header className="">
        {
          <div className="w-full flex flex-row justify-between">
            <div>
              <span>
                <Image
                  width={28}
                  height={28}
                  alt="locationIcon"
                  src={location}
                  className="inline"
                />
              </span>
              تهران
            </div>
            <div>{getCurrentDate()}</div>
          </div>
        }
      </header>
      <main className="gap-2 flex flex-grow  flex-col mobile-design">
        <div className="items-center justify-center mx-auto flex-grow-2  max-w-[400px] h-fit ">
          {
            <div className="relative flex flex-col items-center justify-center">
              <Image
                className="w-[180px] h-[180px] md:h-[250px] md:w-[250px]"
                width={200}
                height={200}
                alt=""
                src={`/icons/xxl-icons/${data[0]?.weather.icon}.png`}
              />

              <div
                id="data"
                className="flex flex-col items-center w-full gap-2 md:gap-3"
              >
                <div className="text-3xl md:text-4xl font-bold">
                  {data[0]?.current}°
                </div>
                <div className="font-bold">
                  {data[0]?.customDescription?.text}
                </div>
                <div className="flex flex-row gap-10">
                  <span className="">{data[0]?.max} حداكثر</span>
                  <span className="">{data[0]?.min} حداقل</span>
                </div>
              </div>
            </div>
          }
        </div>
        <div className="bg-bg-dark/30 h-fit flex-grow-3 rounded-2xl px-5 py-6 ">
          {
            <div className="relative flex flex-col gap-5">
              <header className="flex flex-row gap-2">
                <span>
                  <Image
                    width={25}
                    height={25}
                    alt="calender icon"
                    src={calender}
                    className="inline"
                  />
                </span>
                <span>پیش‌بینی روزهای آینده</span>
              </header>

              <div className="flex flex-col gap-3">
                {/* <div className="h-10 border-b flex flex-row justify-between border-b-white/10 items-center">
                  <div className="text-sm md:text-base">
                    {data[1].dateTitle.split(" ")[0]}
                  </div>
                  <div>
                    <Image
                      width={40}
                      height={40}
                      alt=""
                      src={`/icons/xxl-icons/${data[4]?.weather.icon}.png`}
                    />

                    {data[4]?.weather.icon}
                  </div>
                  <div className="flex flex-row gap-5 md:gap-10 text-xs md:text-sm">
                    <span>{enNumToFa(data[1].max)} حداكثر</span>
                    <span>{enNumToFa(data[1].min)} حداقل</span>
                  </div>
                </div> */}

                {data.slice(1).map((day, index) => {
                  if (index === data.length - 1) {
                    console.log(index);
                  }
                  return (
                    <WeekDay
                      key={day.date}
                      date={day.date}
                      dateTitle={day.dateTitle}
                      max={day.max}
                      min={day.min}
                      weather={day.weather}
                      className={index == data.length - 2 ? "border-b-0" : ``}
                    />
                  );
                })}
              </div>
            </div>
          }
        </div>
      </main>
    </div>
  );
}
