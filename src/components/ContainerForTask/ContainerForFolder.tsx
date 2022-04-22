import { Route, Routes } from "react-router-dom";
import Task1 from "../Task1/Task1";
import Task2 from "../Task2/Task2";
import Task3 from "../Task3/Task3";

const ContainerForTasks = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Routes>
        <Route path="/" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
      </Routes>
    </div>
  );
};

export default ContainerForTasks;
