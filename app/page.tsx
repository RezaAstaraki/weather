import { global } from "styled-jsx/css";
import calender from "../public/icons/calender.svg";
import type { WeatherData } from "./utils/types";

import Image from "next/image";
import WeekDay from "./components/WeekDay";
import Header from "./components/Header";
import Today from "./components/Today";

import { Suspense } from "react";

const getData = async (): Promise<WeatherData[] | undefined> => {
  try {
    const response = await fetch(
      "https://api.dastyar.io/express/weather?lat=35.67194277&lng=51.42434403",
      { next: { revalidate: 1 } }
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

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await getData();

  return (
    <div className="min-h-screen flex flex-col  max-w-[1440px] px-4 py-8 md:px-14 md:py-16 md:gap-20 text-sm md:text-base">
      <Header />
      <main className="gap-2 flex flex-grow  flex-col mobile-design">
        <div className="items-center justify-center mx-auto flex-grow-2  max-w-[400px] h-fit ">
          <Suspense fallback={<div>loading...</div>}>
            {data && (
              <Today
                customDescription={data[0].customDescription}
                current={data[0].current}
                weather={data[0].weather}
                max={data[0].max}
                min={data[0].min}
              />
            )}
          </Suspense>
        </div>
        <div className="bg-bg-dark/30 h-fit flex-grow-3 rounded-2xl px-5 py-6 ">
          <div className="relative h-fit flex flex-col gap-5">
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

            <div className="flex flex-col h-fit gap-3">
              {data ? (
                data.slice(1).map((day, index) => {
                  if (index === data.length - 1) {
                    console.log(index);
                  }
                  return (
                    <WeekDay
                      key={day.date}
                      date={day.date}
                      dateTitle={day?.dateTitle}
                      max={day.max}
                      min={day.min}
                      weather={day.weather}
                      className={index == data.length - 2 ? "border-b-0" : ``}
                    />
                  );
                })
              ) : (
                <div>no data</div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
