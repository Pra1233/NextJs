import { useRouter } from "next/router";
import { Fragment } from "react";
import MeetupDetail from "../../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Fragment>
      <MeetupDetail
        img="https://www.gstatic.com/webp/gallery3/1.sm.png"
        alt="First Meetup"
        title="A first Meetup"
        description="Description"
      />
    </Fragment>
  );
};

export default MeetupDetails;
