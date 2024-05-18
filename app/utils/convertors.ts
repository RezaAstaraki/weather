

export function convertDateToPersian() {
    
    const input = '2024-05-19'.split('-')
    const date = new Date(Date.UTC(parseInt(input[0]), parseInt(input[1]), parseInt(input[2])))   
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        // year: "numeric",
        // numberingSystem: "arab",
        calendar: "persian",
    };

    return Intl.DateTimeFormat("FA", options).format(date)
    
}

export function enNumToFa(input :string|number) {
    const ex = typeof input == 'string' ? Number(input) : input;
    return ex.toLocaleString('fa-IR', { useGrouping: false })
}




export function getCurrentDate() {
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        // year: "numeric",
        month: "long",
        day: "numeric",
        numberingSystem: "arab",
        calendar: "persian",
    };
    const ex = new Intl.DateTimeFormat("FA", options).format(new Date());
    return ex
}




export function isDayOrNight(): 'day' |'night' {
    const now = new Date();
    const hours = now.getHours();
    const isDay = hours >= 6 && hours < 18;
    return isDay ? "day" : "night";
}
  
export function dayOrNightTheme() {
    const theme = isDayOrNight() == "night" ? "linear-gradient(167.44deg, #08244F 0%, #134CB5 47.38%, #0B42AB 100%)" : 'linear-gradient(167.44deg, #0B7DA1 0%, #33AADD 47.38%, #2DC8EA 100%)'
    return theme
}