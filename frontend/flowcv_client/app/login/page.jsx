"use client";

import Nav from "@components/Nav";
import { addUserData } from "@redux/auth/features";
import { useAppSelector } from "@redux/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const userData = useAppSelector((state) => state.persistedReducer.auth.userData);

    console.log("USER DATA", userData);

    const dispatch = useDispatch();
    const router = useRouter();

    if (userData.access_token) router.push("/");

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleSubmit = () => {
        if (!email || !password) {
            return alert("Email and password required");
        }

        const url = "http://localhost:3000/auth/login";

        setLoading(true);

        fetch(url, {
            headers: {
                "content-type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ email, password }),
        })
            .then((res) => res.json())
            .then((data) => {
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

    useEffect(() => {
        console.log("userData", userData);
    }, [userData]);

    return (
        <>
            <Nav />
            <div className="flex flex-col justify-center items-center min-h-[80vh] w-[100vw]">
                <div className="rounded-[1rem] shadow-md min-h-[calc(100vh-theme(space.16))] w-full max-w-lg bg-white p-10 pt-6 sm:p-12 sm:pt-8 md:min-h-min md:min-w-[500px] md:p-14 md:pt-10 lg:p-16 lg:pt-16 flex flex-col justify-center items-center gap-10">
                    {/* main heading */}
                    <h1 class="text-primaryBlack mt-6 flex text-[28px] font-bold sm:mt-10 sm:text-[32px] md:mt-4 md:justify-center md:text-[38px]">
                        Login
                    </h1>

                    {/* email input */}
                    <div class="removeAutocompleteBg relative">
                        <input
                            id="emailId"
                            name="email"
                            type="email"
                            class="peer font- h-14 w-full cursor-text appearance-none border-b-2 border-gray-300 bg-white  text-base text-primaryBlack placeholder-transparent focus:outline-none md:text-xl"
                            placeholder="Enter email"
                            value={email}
                            onInput={handleEmail}
                        />
                        <label
                            for="emailId"
                            class="absolute left-0 -top-4 cursor-text text-sm text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-sm   peer-focus:text-gray-600 md:text-base md:peer-placeholder-shown:text-xl md:peer-focus:text-base"
                        >
                            <span class="flex items-center space-x-3">
                                <img src="/mail.svg" alt="mail svg" className="w-5 text-gray-600" />
                                <span class="font-semibold">Email</span>
                            </span>
                        </label>
                    </div>

                    {/* password input */}
                    <div class="removeAutocompleteBg relative">
                        <input
                            id="passwordId"
                            name="password"
                            type="password"
                            class="peer font- h-14 w-full cursor-text appearance-none border-b-2 border-gray-300 bg-white  text-base text-primaryBlack placeholder-transparent focus:outline-none md:text-xl"
                            placeholder="Enter Password"
                            value={password}
                            onInput={handlePassword}
                        />
                        <label
                            for="passwordId"
                            class="absolute left-0 -top-4 cursor-text text-sm text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-sm   peer-focus:text-gray-600 md:text-base md:peer-placeholder-shown:text-xl md:peer-focus:text-base"
                        >
                            <span class="flex items-center space-x-3">
                                <img src="/password.svg" className="w-5 text-gray-600" />
                                <span class="font-semibold">Password</span>
                            </span>
                        </label>
                    </div>

                    {/* forgot password */}
                    <div class="mt-4">
                        <a class="text-base font-bold hover:opacity-80" href="/forgot-password">
                            Forgot password?
                        </a>
                    </div>

                    {/* submit button */}
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        class="border-none cursor-pointer appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 hover:opacity-80 px-7 py-2 rounded-full font-extrabold h-15 text-[17px] min-w-[180px] text-white bg-gradient-to-r from-pink-600 to-red-300 shadow-product w-[300px]"
                    >
                        Login
                    </button>

                    {/* create account */}
                    <div class="mt-8 flex justify-center">
                        <a class="text-base font-bold hover:opacity-80" href="/signup">
                            Create acccount
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
