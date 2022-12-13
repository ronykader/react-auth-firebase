import React, { useEffect, useState } from "react";

const Profile = () => {
  const [userinformation, setUserinformation] = useState({});

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("google_userinformation"));
    setUserinformation(users);
  }, []);

  console.log(userinformation);
  return (
    <div className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-3xl pt-20 pb-3 sm:pt-38 sm:pb-4">
        <div className="grid grid-flow-col">
          <div className="bg-white rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
            <h3 className="text-3xl font-bold tracking-tight sm:text-center sm:text-4xl mb-10">
              Profile {userinformation.displayName}
            </h3>
            <h4>{userinformation.email}</h4>
            <h4>{userinformation.email}</h4>
            {/* <img src={userinformation.photoURL} > */}
            <img
              src={userinformation ? userinformation.photoURL : ""}
              alt="pictur"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
