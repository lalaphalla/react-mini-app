import { useParams } from "react-router-dom";

function EventDetailPage() {
  const param = useParams();
  return (
    <>
      <h1>Event Detail Page</h1>
      <p>{param.eventId}</p>
    </>
  );
}

export default EventDetailPage;
