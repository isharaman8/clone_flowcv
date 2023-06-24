"use client";

import Nav from "@components/Nav";
import { addUserData } from "@redux/auth/features";
import { useAppSelector } from "@redux/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

const SignUp = () => {
    const userData = useAppSelector((state) => state.persistedReducer.auth.userData);
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();

    if (userData.access_token) router.push("/");

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleSubmit = () => {
        if (!email || !password) {
            return alert("Email and password required");
        }

        const url = "https://flow-cv-backend.onrender.com";
        const payload = { email, password, name: "NOT PROVIDED" };

        console.log("PAYLOAD", payload);

        setLoading(true);

        fetch(`${url}/auth/signup`, {
            headers: {
                "content-type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(payload),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("DATA", data);
                if (data.access_token && data.user) {
                    dispatch(addUserData(data));
                    router.push("/");
                } else {
                    return alert(data.message);
                }
            })
            .catch((err) => alert(err.message))
            .finally(() => setLoading(false));
    };

    return (
        <>
            <Nav />
            <div className="flex flex-col min-h-[80vh] w-[100vw] justify-center items-center">
                <div className="rounded-[1rem] shadow-md min-h-[calc(100vh-theme(space.16))] w-full max-w-lg bg-white p-10 pt-6 sm:p-12 sm:pt-8 md:min-h-min md:p-14 md:pt-10 lg:p-16 lg:pt-16">
                    <h1 className="text-primaryBlack mt-6 flex text-[28px] font-bold sm:mt-10 sm:text-[32px] md:mt-4 md:justify-center md:text-[38px]">
                        Create account
                    </h1>
                    <div className="mt-10 lg:mt-12">
                        <div className="removeAutocompleteBg relative">
                            <input
                                id="emailId"
                                name="email"
                                type="email"
                                className="peer font- h-14 w-full cursor-text appearance-none border-b-2 border-gray-300 bg-white  text-base text-primaryBlack placeholder-transparent focus:outline-none md:text-xl"
                                placeholder="Enter email"
                                value={email}
                                onInput={handleEmail}
                            />
                            <label
                                htmlFor="emailId"
                                className="absolute left-0 -top-4 cursor-text text-sm text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-sm   peer-focus:text-gray-600 md:text-base md:peer-placeholder-shown:text-xl md:peer-focus:text-base"
                            >
                                <span className="flex items-center space-x-3">
                                    <img src="/mail.svg" className="w-5" alt="mail" />
                                    <span className="font-semibold">Email</span>
                                </span>
                            </label>
                        </div>
                        <div className="relative mt-10 lg:mt-12">
                            <div className="removeAutocompleteBg relative">
                                <input
                                    id="passwordId"
                                    name="password"
                                    type={show ? "text" : "password"}
                                    className="peer font- h-14 w-full cursor-text appearance-none border-b-2 border-gray-300 bg-white  text-base text-primaryBlack placeholder-transparent focus:outline-none md:text-xl"
                                    placeholder="Enter Password"
                                    value={password}
                                    onInput={handlePassword}
                                />
                                <label
                                    htmlFor="passwordId"
                                    className="absolute left-0 -top-4 cursor-text text-sm text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-sm   peer-focus:text-gray-600 md:text-base md:peer-placeholder-shown:text-xl md:peer-focus:text-base"
                                >
                                    <span className="flex items-center space-x-3">
                                        <img src="password.svg" className="w-5" alt="password" />
                                        <span className="font-semibold">Password</span>
                                    </span>
                                </label>
                            </div>
                            <button
                                type="button"
                                className="border-none appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 absolute right-0 top-[58%] -translate-y-1/2 cursor-pointer text-base font-bold hover:opacity-80"
                                onClick={() => setShow(!show)}
                            >
                                {show ? "Hide" : "Show"}
                            </button>
                        </div>
                        <div className="mt-6 sm:mt-12 md:mt-16">
                            <label>
                                <input type="checkbox" name="productUpdateNotifications" className="fixed h-[1px] w-[1px] opacity-0" value="" />
                                <div className="flex cursor-pointer items-center hover:opacity-80">
                                    <div className="flex cursor-pointer items-center">
                                        <div className="sc-dkPtRN lfpAMT"></div>
                                    </div>
                                    <span className="ml-1 text-base font-semibold">Get FlowCV updates. No spam ever.</span>
                                </div>
                            </label>
                        </div>
                        <div className="mt-8 flex justify-center sm:mt-11 md:mt-14 lg:mt-16">
                            <button
                                type="submit"
                                className="border-none cursor-pointer appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 hover:opacity-80 px-7 py-2 rounded-full font-extrabold h-15 text-[17px] min-w-[180px] text-white bg-gradient-to-r from-pink-600 to-red-300 shadow-product w-[300px]"
                                onClick={handleSubmit}
                            >
                                Create account
                            </button>
                        </div>
                        <div className="mt-12 flex justify-center">
                            <p className="whitespace-pre-line  text-justify align-middle text-sm text-gray-600">
                                By creating an account, you agree to our
                                <a
                                    href="https://flowcv.com/terms-of-service"
                                    target="_blank"
                                    className="appearance-none no-underline decoration-current font-bold text-primaryBlack"
                                >
                                    Terms&nbsp;of&nbsp;Service
                                </a>
                                . We do not sell your personal data. To learn more about how we collect, use, share and protect it please read our
                                <a
                                    href="https://flowcv.com/privacy-policy"
                                    target="_blank"
                                    className="appearance-none no-underline decoration-current font-bold text-primaryBlack"
                                >
                                    Privacy&nbsp;Policy
                                </a>
                            </p>
                        </div>
                        <div className="mt-8 flex justify-center">
                            <a className="text-base hover:opacity-80" href="/login">
                                Have already an account?
                                <span className="ml-2 font-bold">Login</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
