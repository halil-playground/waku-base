'use client';

import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((c) => c + 1);

  return (
    <section className="p-4 mt-4 -mx-4 border border-blue-400 border-dashed rounded">
      <div>Count: {count}</div>
      <button
        onClick={handleIncrement}
        className="rounded-sm bg-black px-2 py-0.5 text-sm text-white"
        type="button"
      >
        Increment
      </button>
    </section>
  );
};
