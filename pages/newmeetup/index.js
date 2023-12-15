import { useRouter } from "next/navigation";
import React, { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";

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

  return (
    <Fragment>
      <Head>
        <title>NewMeetup</title>
        <meta name="new Meetup" content="Add a meetup"></meta>
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </Fragment>
  );
};

export default NewMeetup;
