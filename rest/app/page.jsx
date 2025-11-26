import React from "react";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";

function page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <UserProfile />
        <Counter />
      </div>
    </div>
  );
}

export default page;
