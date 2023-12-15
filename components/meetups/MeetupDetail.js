import classes from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
  return (
    <section className={classes.detail}>
      <img src={props.img} />
      <h1>{props.title}</h1>
      <h3>{props.address}</h3>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetupDetail;
