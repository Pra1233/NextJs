import { useRouter } from "next/navigation";
import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const router = useRouter();

  const onAddMeetup = async (obj) => {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(obj),
    });

    if (!res.ok) {
      console.error(`Failed to add meetup. Status: ${res.status}`);
    } else {
      const data = await res.json();
      console.log(data, "data");
      router.push("/");
    }
  };

  return <NewMeetupForm onAddMeetup={onAddMeetup} />;
};

export default NewMeetup;
