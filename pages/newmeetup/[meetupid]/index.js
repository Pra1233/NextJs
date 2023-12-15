import MeetupDetail from "../../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";
const MeetupDetails = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta
          name="meetup details"
          content={props.meetupData.description}
        ></meta>
      </Head>
      <MeetupDetail
        img={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
};

// prerender
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://prabhat:prabhat@cluster0.2n1qplp.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetup = db.collection("meetups");
  const meetupids = await meetup.find({}, { _id: 1 }).toArray(); //extract only id
  console.log(meetupids, "n");
  client.close();
  return {
    fallback: true,

    paths: meetupids.map((meetup) => ({
      params: {
        meetupid: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const id = context.params.meetupid;
  const client = await MongoClient.connect(
    "mongodb+srv://prabhat:prabhat@cluster0.2n1qplp.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetups = db.collection("meetups");
  const selectedMeetup = await meetups.findOne({ _id: new ObjectId(id) }); //extract only id
  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
        image: selectedMeetup.image,
      },
    },
  };
}

export default MeetupDetails;
