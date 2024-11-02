import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Counter = () => {
  const [changeBy, setChangeBy] = useState(1)
  const [count, setCount] = useState(changeBy);

  console.log( `type of chageBy ${typeof changeBy} `)
  console.log(`type of count ${typeof count} `)
  return (
    <div className="mt-10 mx-auto">
      <h1 className="text-2xl text-center">My Counter</h1>
      <div className="mt-8 flex justify-center ">
        <button
          className="py-1 px-6 text-white bg-primary leading-none"
          onClick={() => setCount(count - changeBy)}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <h2 className="mx-7 text-3xl">{count}</h2>
        <button
          className="py-1 px-6 text-white bg-primary leading-none"
          onClick={() => setCount(count + changeBy)}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className="mt-6 text-center">
        <input
          type="number"
          placeholder="Increment / Decrement By.."
          className="border rounded w-60 py-2.5 px-1.5"
          value={changeBy}
          onChange={(e) => setChangeBy(Number(e.target.value))}
        />
      </div>
      <div className="mt-6 text-center">
        <button className="py-3 px-8 text-white bg-primary leading-none rounded">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
