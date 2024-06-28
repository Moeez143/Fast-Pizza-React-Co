import React from "react";

function Loader() {
  return (
    <div className="absolute bg-slate-200/30 inset-0 drop-shadow-sm backdrop-blur-sm flex items-center justify-center">
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
