import Head from "next/head";
import { Fragment } from "react";
import TodoForm from "../components/TodoForm";
import axios from "axios";
import TodoList from "../components/TodoList";
import { MongoClient } from "mongodb";

const Home = (props) => {
  const onAddTask = async (data) => {
    console.log(data, "data");
    const res = await axios.post("/api/todos", data);
    console.log(res.data.message);
  };

  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <TodoForm onAddTask={onAddTask} />
      <TodoList list={props.todos} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://prabhat:prabhat@cluster0.2n1qplp.mongodb.net/todos?retryWrites=true&w=majority"
  );
  const db = client.db();
  const todos = db.collection("todo");
  const result = await todos.find().toArray();
  console.log(result, "get");
  client.close();

  return {
    props: {
      todos: result.map((e) => ({
        taskName: e.taskName,
        description: e.description,
        id: e._id.toString(),
      })),
    },
    revalidate: 1000,
  };
}
export default Home;
