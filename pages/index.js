import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context) { //changes every sec
//   //run for every incoming request
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: MEETUP,
//     },
//   };
// }

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://prabhat:prabhat@cluster0.2n1qplp.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetup = db.collection("meetups");
  const result = await meetup.find().toArray();
  console.log(result, "get");
  client.close();

  return {
    props: {
      meetups: result.map((i) => ({
        title: i.title,
        address: i.address,
        image: i.image,
        id: i._id.toString(),
      })),
    },
    revalidate: 1000,
  };
}

export default HomePage;
