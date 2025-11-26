"use client"

import { useState, useCallback } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const decrementCount = useCallback(() => {
    setCount(prev => prev - 1);
  }, []);

  return (
    <div className="flex items-center justify-between py-4">
      <button className="px-4 py-2 bg-blue-600 text-white font-semibold transition-transform duration-300 hover:scale-110 rounded-lg" onClick={decrementCount}>Decrement</button>
      <div className="font-bold text-2xl text-gray-800">{count}</div>
      <button className="px-4 py-2 bg-blue-600 text-white font-semibold transition-transform duration-300 hover:scale-110 rounded-lg" onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default Counter;