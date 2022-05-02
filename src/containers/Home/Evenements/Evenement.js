import React from "react";
import classes from "./Evenement.css";
import RubriqueTitle from "../../../components/UI/RubriqueTitle/RubriqueTitle";

const evenement = (props) => {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";

  const DataEvent = [
    {
      id: "1",
      title:"Journée Culturelle 2022",
      img: "https://picsum.photos/150/150",
      date: "20 aout 1980",
      description: description,
    },
    {
      id: "2",
      title:"Journée Culturelle 2022",
      img: "https://picsum.photos/150/150",
      date: "20 aout 1980",
      description: description,
    },
  ];

  return (
    <div className={classes.Evenement}>
      <RubriqueTitle>A venir</RubriqueTitle>

      <div className={classes.EvenementEvents}>
        {DataEvent.map((event) => (
          <div className={classes.Event} key={event.id}>
            <div className={classes.BlocImg}>
                <img
                  className={classes.EventImg}
                  src={event.img}
                  alt={event.title}
                />
            </div>
            <div>
              <div className={classes.EventHeader}>
                <p className={classes.EventTitre}>{event.title}</p>
                <p className={classes.EventDate}>{event.date}</p>
              </div>
              <p className={classes.EventDescription}>
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default evenement;
