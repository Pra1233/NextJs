import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const onAddMeetup = (data) => {
    console.log(data);
  };

  return <NewMeetupForm onAddMeetup={onAddMeetup} />;
};

export default NewMeetup;
