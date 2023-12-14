import MeetupList from "../components/meetups/MeetupList";

const MEETUP = [
  {
    id: "1",
    title: "A first Meetup",
    image: "https://www.gstatic.com/webp/gallery3/1.sm.png",
    address: "Mulund",
  },
  {
    id: "2",
    title: "A Second Meetup",
    image:
      "https://free4kwallpapers.com/uploads/originals/2015/10/17/most-beautiful-travel-destinations.jpg",
    address: "Kalwa",
  },
  {
    id: "3",
    title: "A Third Meetup",
    image:
      "https://pixabay.com/images/download/people-2944065_640.jpg?attachment",
    address: "Mulund",
  },
];

const HomePage = () => {
  return <MeetupList meetups={MEETUP} />;
};
export default HomePage;
