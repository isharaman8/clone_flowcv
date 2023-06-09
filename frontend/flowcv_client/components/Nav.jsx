"use client";

import Link from "next/link";
import "@styles/globals.css";
import { BiLogIn } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useAppSelector } from "@redux/hooks";
import { useDispatch } from "react-redux";
import { removeUserData } from "@redux/features";
import SideBar from "./UserProfile/SideBar";

const Nav = () => {
  const [user, setUser] = useState({});
  const [profile, setProfile] = useState(false);

  const dispatch = useDispatch();

  const userData = useAppSelector((state) => state.persistedReducer.userData);

  const handleLogout = () => {
    dispatch(removeUserData());
  };

  useEffect(() => {
    setUser(userData);
  }, [userData]);

  return (
    <>
      <header className="pageContainer pt-[2rem]">
        <div className="flex items-center justify-between">
          <Link href="/">
            <img src="/flowcv.svg" alt="flow cv" className="w-32" />
          </Link>
          <nav className="center-flex gap-4 text-[.85rem] font-extrabold">
            {!user.access_token ? (
              <>
                <Link
                  href="/"
                  className="center-flex gap-3 btn border-4 border-[#F0F2F6] h-10 min-w[120px] hover:border-[#f2f4f7]"
                >
                  Try for free
                  <span className="gradient w-[18px] h-[18px] rounded-full flex items-center justify-center mt-[.1rem]">
                    <img src="/navarrow.svg" alt="nav arrow" className="w-1" />
                  </span>
                </Link>
                <Link
                  href="/login"
                  className="center-flex gap-3 btn bg-[#200e32] text-white h-10 min-w[120px] hover:bg-[#432361]"
                >
                  Log In
                  <span className="mt-[.1rem]">
                    <BiLogIn className="text-[1.1rem]" />
                  </span>
                </Link>
              </>
            ) : (
              <div class="flex w-auto items-center space-x-3 sm:space-x-4">
                <button
                  type="button"
                  class="cursor-pointer appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 hover:opacity-80 text-black border-4 border-buttonGray h-10 w-10 border-none"
                  onClick={() => setProfile(true)}
                >
                  <img src="/user.svg" alt="user" />
                </button>
                <button
                  type="button"
                  class="border-none cursor-pointer appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 hover:opacity-80 px-7 py-2 rounded-full font-extrabold h-10 text-[15px] min-w-[120px] text-white bg-black"
                  onClick={handleLogout}
                >
                  Logout
                  <span class="flex items-center justify-center ml-2 -mr-1 md:ml-3 md:-mr-[6px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="w-[1.4em]"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M15.813 12.022H3.77M12.885 9.106l2.928 2.916-2.928 2.916"
                      ></path>
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M8.504 7.389v-.933a3.684 3.684 0 013.685-3.684h4.884a3.675 3.675 0 013.675 3.675v11.14a3.685 3.685 0 01-3.685 3.685h-4.885a3.675 3.675 0 01-3.674-3.675v-.942"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            )}
          </nav>
        </div>
      </header>
      {profile && <SideBar setProfile={setProfile} />}
    </>
  );
};

export default Nav;
