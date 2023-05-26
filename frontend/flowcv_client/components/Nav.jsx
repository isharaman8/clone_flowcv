import Link from "next/link";
import "@styles/globals.css";
import { BiLogIn } from "react-icons/bi";

const Nav = () => {
  return (
    <header className="pageContainer pt-[2rem]">
      <div className="flex items-center justify-between">
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            enableBackground="new 0 0 137.4 55.7"
            viewBox="0 0 137.4 55.7"
            className="w-[100px] md:w-[120px]"
          >
            <path
              d="M62.1 23.3c.7 0 1.3.2 1.8.6l.7-1.7c-.7-.5-1.6-.7-2.7-.7-2.8 0-4.3 1.6-4.3 4.1v1.1h-2.2v1.9h2.2v10.7H60V28.5h3.7v-1.9H60v-1.1c0-1.5.7-2.2 2.1-2.2zM66 39.2h2.4V21.5H66v17.7zM78.5 39.4c3.9 0 6.8-2.7 6.8-6.5s-2.8-6.4-6.8-6.4-6.8 2.7-6.8 6.4 2.9 6.5 6.8 6.5zm0-2c-2.5 0-4.4-1.8-4.4-4.5s1.9-4.4 4.4-4.4 4.4 1.7 4.4 4.4-1.9 4.5-4.4 4.5zM105.8 26.6L102 36.7l-3.9-10.1h-2l-3.9 10-3.8-10h-2.2L91 39.2h2.3l3.8-9.6 3.8 9.6h2.3l4.9-12.6h-2.3zM116.3 39.4c2.8 0 5-1.2 5.9-3.2l-3-1.6c-.7 1.2-1.8 1.8-3 1.8-1.9 0-3.5-1.3-3.5-3.5s1.5-3.5 3.5-3.5c1.2 0 2.3.5 3 1.8l3-1.5c-1-2.1-3.1-3.3-5.9-3.3-4.3 0-7.4 2.7-7.4 6.6.1 3.7 3.1 6.4 7.4 6.4zM133.8 26.4l-3.8 8.7-3.7-8.7h-4l5.6 12.8h4l5.6-12.8h-3.7z"
              fill="#2B0B3C"
            ></path>
            <linearGradient
              x1="6.629"
              x2="42.705"
              y1="25.433"
              y2="46.275"
              gradientTransform="matrix(1 0 0 -1 0 62.8)"
              gradientUnits="userSpaceOnUse"
              id="grad1"
            >
              <stop offset="0" stopColor="#F857A6"></stop>
              <stop offset="1" stopColor="#FF5858"></stop>
            </linearGradient>
            <path
              d="M35.7 19.2s-.2 0 0 0c-.2 0-.2 0 0 0l-16.1 9.2h-.2l-.9-1.4v-.2L40 14.5c.7-.4.9-1.3.4-1.8L33.1 0h-.2L4.4 16.3c-4 2.5-5.6 7.6-3.1 11.8l15 25.9v-.2c-1.1-2-.2-4.5 1.6-5.6l9.6-5.6c7.2-4.2 8.7-4.9 15.2-8.7.7-.4.9-1.3.4-1.8-1.5-2.8-5.3-9.3-7.4-12.9z"
              fill="url(#grad1)"
            ></path>
            <linearGradient
              id="grad2"
              x1="11.759"
              x2="35.453"
              y1="16.361"
              y2="10.714"
              gradientTransform="matrix(1 0 0 -1 0 62.8)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#4E037A"></stop>
              <stop offset="0.351" stopColor="#2B0B3C"></stop>
              <stop offset="1" stopColor="#9400D3"></stop>
            </linearGradient>
            <path
              fill="url(#grad2)"
              d="M17.6 48.1c-2 1.1-2.7 3.6-1.6 5.6 1.1 2 3.6 2.7 5.6 1.6l9.4-5.4v-.2l-4.2-7.2-9.2 5.6z"
            ></path>
          </svg>
        </Link>
        <nav className="center-flex gap-4 text-[.85rem] font-extrabold">
          <Link
            href="/"
            className="center-flex gap-3 btn border-4 border-[#F0F2F6] h-10 min-w[120px] hover:border-[#f2f4f7]"
          >
            Try for free
            <span className="gradient w-[18px] h-[18px] rounded-full flex items-center justify-center mt-[.1rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 5 8"
                className="w-[6px]"
              >
                <path
                  fill="#fff"
                  stroke="#fff"
                  d="M.93 6.746a.553.553 0 010-.776l1.44-1.462a1 1 0 000-1.403L.93 1.643a.553.553 0 010-.776v0c.217-.22.571-.22.788 0l2.204 2.238a1 1 0 010 1.403L1.718 6.746a.553.553 0 01-.788 0v0z"
                ></path>
              </svg>
            </span>
          </Link>
          <Link
            href="/"
            className="center-flex gap-3 btn bg-[#200e32] text-white h-10 min-w[120px] hover:bg-[#432361]"
          >
            Log In
            <span className="mt-[.1rem]">
              <BiLogIn className="text-[1.1rem]" />
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
