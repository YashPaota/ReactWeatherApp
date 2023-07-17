import React from "react";
import "./Descriptions.css";

import { FaArrowUp, FaArrowDown, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";



const Descriptions =({weather , units}) => {

    const tempUnit = units === "metric" ? "°C" : "°F";
    const windUnit = units === "metric" ?  "m/s" : "m/h";

    const cards = [
        {
          id: 1,
          icon: <FaArrowDown />,
          title: "min",
          data: weather.main.temp_min.toFixed(),
          unit: tempUnit,
        },
        {
          id: 2,
          icon: <FaArrowUp />,
          title: "max",
          data: weather.main.temp_max.toFixed(),
          unit: tempUnit,
        },
        {
          id: 3,
          icon: <BiHappy />,
          title: "feels like",
          data: weather.main.feels_like.toFixed(),
          unit: tempUnit,
        },
        {
          id: 4,
          icon: <MdCompress />,
          title: "pressure",
          data: weather.main.pressure,
          unit: "hPa",
        },
        {
          id: 5,
          icon: <MdOutlineWaterDrop />,
          title: "humidity",
          data: weather.main.humidity,
          unit: "%",
        },
        {
          id: 6,
          icon: <FaWind />,
          title: "wind speed",
          data: weather.wind.speed.toFixed(),
          unit: windUnit,
        },
      ];
    return (
        <div className="section section__descriptions">
        {cards.map((card) => (
            <div key={card.id} className="card">
                <div className="description__card-icon">
                    {card.icon}
                    <small>{card.title}</small>
                </div>
                <h2>{`${card.data} ${card.unit}`}</h2>
            </div>

        ))}
            
            
          
             
        </div>
    )
}

export default Descriptions;