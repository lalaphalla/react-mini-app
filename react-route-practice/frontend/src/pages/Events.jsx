import { useEffect, useState } from "react";
import EventsList from "../components/EventsList";
import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";

function EventsPage() {
  //   const [events, setEvents] = useState()
  // useEffect(() => {

  //   axios.get("http://localhost:8080/events").then((res) => {
  //       const {data} = res;
  //       setEvents(data.events)
  //       // console.log(events);
  //   });
  // },[]);
  // const DUMMY_EVENTS = [
  //   { id: "e1", title: "Some Event" },
  //   { id: "e2", title: "Another Event" },
  // ];

  const events = useLoaderData();

  return (
    <>
      <h1>Events</h1>
      <EventsList events={events}/>

      {/* {DUMMY_EVENTS.map((item) => (
        <ul key={item.id}>
          <Link to={item.id}>{item.title}</Link>
        </ul>
      ))} */}
    </>
  );
}

export default EventsPage;
