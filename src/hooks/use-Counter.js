import { useEffect, useState } from "react";

function useCounter(initialVal) {
  const [count, setCounter] = useState(initialVal);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const increment = () => setCounter(count + 1);

  return { count, increment };
}

export default useCounter;
