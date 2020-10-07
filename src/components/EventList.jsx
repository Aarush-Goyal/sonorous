import React from "react";
import EventCard from "./EventCard";
import "./css/EventList.css";

const EventList = (props) => {
  return (
    <div>
      <h1 className="headingText">Events</h1>
      <div className="EventList">
        {props.events.map((event) => (
          <EventCard
            name={event.name}
            description={event.description}
            registerationFormLink={event.registerationFormLink}
            imageURL={event.imageURL}
          />
        ))}
      </div>
    </div>
  );
};

export default EventList;
