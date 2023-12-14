import MeetupDetail from "../../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      img="https://www.gstatic.com/webp/gallery3/1.sm.png"
      alt="First Meetup"
      title="A first Meetup"
      description="Description"
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: true,

    paths: [
      {
        params: {
          meetupid: "1",
        },
      },
      {
        params: {
          meetupid: "2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const id = context.params.meetupid;
  console.log(id, "id");
  return {
    props: {
      meetupDate: {
        img: "https://www.gstatic.com/webp/gallery3/1.sm.png",
        id: id,
        title: "A first Meetup",
        description: "Description",
        alt: "First Meetup",
      },
    },
  };
}

export default MeetupDetails;
