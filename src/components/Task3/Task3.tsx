import { useEffect, useState } from "react";
const URL_POSTS = "http://jsonplaceholder.typicode.com/posts";

const Task3 = () => {
  const [resultPromise, setResultPromise] = useState("");
  const [promiseError, setPromiseError] = useState<string | null>(null);
  const [resultAsync, setResultAsync] = useState("");
  const [asyncError, setAsyncError] = useState<string | null>(null);

  const getPosts = async () => {
    try {
      const response = await fetch(URL_POSTS);
      const postData = await response.json();
      setResultAsync(postData);
    } catch {
      setAsyncError("Error");
    }
  };

  useEffect(() => {
    fetch(URL_POSTS)
      .then((res) => res.json())
      .then((json) => setResultPromise(json))
      .catch((err) => {
        setPromiseError("Error");
      });

    getPosts();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        paddingTop: "40px",
      }}
    >
      <p style={{ fontWeight: "bold" }}>Response of promice:</p>
      <div
        style={{ maxWidth: "300px", maxHeight: "300px", overflow: "scroll" }}
      >
        {resultPromise ? JSON.stringify(resultPromise) : promiseError}
      </div>

      <p style={{ fontWeight: "bold" }}>Response of async:</p>
      <div
        style={{ maxWidth: "300px", maxHeight: "300px", overflow: "scroll" }}
      >
        {resultAsync ? JSON.stringify(resultAsync) : asyncError}
      </div>
    </div>
  );
};

export default Task3;
