import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Topics = () => {
  const topics = useLoaderData().data;
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mx-10 mt-10 py-10">
      {topics.map((topic) => (
        <Topic topic={topic} key={topic.id} />
      ))}
      {/* <Topic /> */}
    </div>
  );
};

export default Topics;
