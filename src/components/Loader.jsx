import React from "react";

const Loader = () => {
  return (
    <div
    className="animate-spin mt-4 block mx-auto size-4 border-[2px] border-black border-t-transparent text-blue-600 rounded-full"
    // role="status"
    // aria-label="loading"
  >
    {/* <span className="sr-only">Loading...</span> */}
  </div>
  );
};

export default Loader;
