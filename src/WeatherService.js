const API_KEY = "3697158522e8d1e46eefff96c8eebbee";

// const makeIconURl = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getFormattedData = (city , units = "metric") => {
     
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`

    const data = fetch(url)
                .then(res => res.json())
                .then(data => data)
                .catch(err => console.log(err));


    return data;            

    // console.log(data);

    // const {
    //     weather,
    //     main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    //     wind: { speed },
    //     sys: { country },
    //     name,
    //     } = data;

    // const {description , icon} = weather[0];
    

    // return {
    //     description,
    //     iconURl : makeIconURl(icon),
    //     temp,
    //     feels_like,
    //     temp_min,
    //     temp_max,
    //     pressure,
    //     humidity,
    //     speed,
    //     country,
    //     name,
    //   };
    };


export default getFormattedData ;