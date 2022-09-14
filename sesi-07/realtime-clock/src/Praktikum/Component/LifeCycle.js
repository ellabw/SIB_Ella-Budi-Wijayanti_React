import { useEffect, useState } from "react";

function Example() {
  const [count, setCount] = useState(0);
  // similiar to componentDidMount and ComponentDidUpdate:
  useEffect(() => {
    // update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default Example;
