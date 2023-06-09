"use-client";
import React, { useState } from "react";
import Switch from "./Switch";
import { GrClose } from "react-icons/gr";
import { useAppSelector } from "@redux/hooks";

const SideBar = ({ setProfile }) => {
  const [checked, setChecked] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const userData = useAppSelector((state) => state.persistedReducer.userData);

  const handleToggle = () => {
    setChecked(!checked);
  };
  return (
    <>
      <main className="fixed top-0 w-screen h-screen z-[50000] flex">
        <div className=" bg-[rgba(0,0,0,0.3)] w-[65%] h-full"></div>
        <div className="w-[36rem] h-full float-right bg-[#ededf3] px-[2rem] py-[2rem] overflow-y-auto">
          <div className="flex justify-between">
            {" "}
            <h1 className="text-[2.4rem] font-bold mb-4">Settings</h1>
            <span
              className="relative cursor-pointer"
              onClick={() => setProfile(false)}
            >
              <GrClose className="text-4xl" />
            </span>
          </div>
          <div className="bg-white rounded-[1rem] shadow-md px-[2rem] py-[3rem] mb-8">
            <h3 className="text-xl font-bold mb-4">Updates</h3>
            <Switch checked={checked} handleToggle={handleToggle} />
          </div>
          <div className="bg-white rounded-[1rem] shadow-md px-[2rem] py-[3rem] mb-8">
            <h3 className="text-xl font-bold mb-4">Language</h3>
            <select
              className="bg-white border-2 border-black rounded-[10rem] px-4 py-2 w-[16rem] text-[.9rem] font-medium"
              name="language"
              id="lang"
            >
              <option value="eng">English</option>
              <option value="deu">Deutsch</option>
            </select>
          </div>
          <div className="bg-white rounded-[1rem] shadow-md px-[2rem] py-[3rem] mb-8">
            <h3 className="text-xl font-bold mb-4">Email</h3>
            <p className="text-[.8rem]">Current Email</p>
            <p className="text-[.9rem] font-bold">{userData.user.email}</p>
            {!showEmail && (
              <button
                className="mt-4 px-[2rem] font-bold text-[.9rem] rounded-full border-4 border-[#F0F2F6] h-10 min-w[120px] hover:border-[#f2f4f7]"
                onClick={() => setShowEmail(true)}
              >
                Change Email
              </button>
            )}
            {showEmail && (
              <div className="w-full my-4">
                <label className="font-bold text-[.9rem]" htmlFor="email">
                  New Email
                </label>
                <br />
                <input
                  type="email"
                  placeholder="Enter new email"
                  className="text-[.9rem] bg-gray-100 px-2 py-2 outline-none my-2 w-full rounded-md"
                />
                <br />
                <label className="font-bold text-[.9rem]" htmlFor="password">
                  Current Password
                </label>
                <input
                  id="password"
                  type="email"
                  placeholder="Enter current password"
                  className="text-[.9rem] bg-gray-100 px-2 py-2 outline-none mt-2 w-full rounded-md"
                />
                <div className="flex w-full justify-between">
                  <button
                    className="mt-4 px-[2rem] font-bold text-[.9rem] rounded-full border-4 border-[#F0F2F6] h-10 min-w[120px] hover:border-[#f2f4f7]"
                    onClick={() => setShowEmail(false)}
                  >
                    Cancel
                  </button>
                  <button className="gradient border-none cursor-pointer outline-none hover:opacity-80 mt-4 px-[2rem] font-bold text-[.9rem] rounded-full text-white">
                    Save Email
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="bg-white rounded-[1rem] shadow-md px-[2rem] py-[3rem] mb-8">
            <h3 className="text-xl font-bold mb-4">Password</h3>
            {!showPassword && (
              <button
                className="mt-2 px-[2rem] font-bold text-[.9rem] rounded-full border-4 border-[#F0F2F6] h-10 min-w[120px] hover:border-[#f2f4f7]"
                onClick={() => setShowPassword(true)}
              >
                Change Password
              </button>
            )}
            {showPassword && (
              <div className="w-full my-4">
                <label className="font-bold text-[.9rem]" htmlFor="password">
                  Current Password
                </label>
                <br />
                <input
                  id="password"
                  type="password"
                  placeholder="Enter current password"
                  className="text-[.9rem] bg-gray-100 px-2 py-2 outline-none my-2 w-full rounded-md"
                />
                <br />
                <div className="flex gap-2">
                  <div>
                    <label className="font-bold text-[.9rem]" htmlFor="email">
                      New Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter new password"
                      className="text-[.9rem] bg-gray-100 px-2 py-2 outline-none mt-2 w-full rounded-md"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-[.9rem]" htmlFor="email">
                      Confirm new password
                    </label>
                    <input
                      type="password"
                      placeholder="Confirm new password"
                      className="text-[.9rem] bg-gray-100 px-2 py-2 outline-none mt-2 w-full rounded-md"
                    />
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  <button
                    className="mt-4 px-[2rem] font-bold text-[.9rem] rounded-full border-4 border-[#F0F2F6] h-10 min-w[120px] hover:border-[#f2f4f7]"
                    onClick={() => setShowPassword(false)}
                  >
                    Cancel
                  </button>
                  <button className="gradient border-none cursor-pointer outline-none hover:opacity-80 mt-4 px-[2rem] font-bold text-[.9rem] rounded-full text-white">
                    Save Email
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="bg-white rounded-[1rem] shadow-md px-[2rem] py-[3rem] mb-8">
            <h3 className="text-xl font-bold mb-4">Delete Account</h3>
            {!showDelete && (
              <button
                className="mt-4 px-[2rem] font-bold text-[.9rem] rounded-full border-4 border-[#F0F2F6] h-10 min-w[120px] hover:border-[#f2f4f7]"
                onClick={() => setShowDelete(true)}
              >
                Delete Account
              </button>
            )}
            {showDelete && (
              <>
                <input
                  type="email"
                  placeholder="Enter the word `delete`"
                  className="text-[.9rem] bg-gray-100 px-2 py-2 outline-none my-2 w-full rounded-md"
                />
                <button
                  className="mt-4 px-[2rem] font-bold w-full text-[.9rem] rounded-full border-4 border-[#F0F2F6] h-10 min-w[120px] hover:border-[#f2f4f7]"
                  onClick={() => setShowDelete(false)}
                >
                  Cancel
                </button>
                <button className="mt-4 px-[2rem] font-bold w-full text-[.9rem] rounded-full h-10 min-w[120px] bg-red-50 text-red-900">
                  Delete my account and all my data
                </button>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default SideBar;
