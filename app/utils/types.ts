// types.ts
export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  
  export interface CustomDescription {
    text: string;
    emoji: string;
  }
  
  export interface WeatherData {
    date?: string;
    dateTitle?: string;
    current?: number;
    min: number;
    max: number;
    weather: Weather;
    backgroundColor?: string;
    textColor?: string;
    customDescription?: CustomDescription;
    className?: string;
  }
  