"use-client";
import React, { useState } from "react";
import Switch from "./Switch";
import { GrClose } from "react-icons/gr";
import { useAppSelector } from "@redux/hooks";
import { addUserData, removeUserData } from "@redux/features";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const SideBar = ({ setProfile }) => {
    const [checked, setChecked] = useState(false);
    const [showEmail, setShowEmail] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [changeEmail, setChangeEmail] = useState({
        email: "",
        password: "",
    });
    const [changePassword, setChangePassword] = useState({
        password: "",
        newPassword: "",
        cNewPassword: "",
    });
    const [deleteAccount, setDeleteAccount] = useState("");

    const userData = useAppSelector((state) => state.persistedReducer.userData);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleToggle = () => {
        setChecked(!checked);
    };

    const handleSubmit = (method) => {
        if (method === "change_email") {
            if (!changeEmail.email.trim().length || !changeEmail.password.trim().length) {
                return alert("Email and password required");
            }
        }

        if (method === "change_password") {
            if (!changePassword.password.trim().length || !changePassword.newPassword.trim().length || !changePassword.cNewPassword.trim().length) {
                return alert("please enter password");
            }

            if (changePassword.newPassword.trim() !== changePassword.cNewPassword.trim()) {
                return alert("password do not match");
            }
        }

        const url = "http://localhost:3000/auth/update";
        const payload = method === "change_email" ? changeEmail : changePassword;

        fetch(url, {
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${userData.access_token}`,
            },
            method: "PATCH",
            body: JSON.stringify(payload),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.uid) {
                    if (method === "change_email") {
                        setChangeEmail({ email: "", password: "" });
                        setShowEmail(false);
                        const updatedData = {
                            access_token: userData.access_token,
                            user: {
                                email: data.email,
                                name: data.name,
                                uid: data.uid,
                                role: data.role,
                            },
                        };
                        dispatch(addUserData(updatedData));
                    } else {
                        setChangePassword({
                            password: "",
                            newPassword: "",
                            cNewPassword: "",
                        });
                        setShowPassword(false);
                    }
                }
            })
            .catch((err) => alert(err.message));
    };

    const handleDelete = () => {
        const url = "http://localhost:3000/auth/delete";
        fetch(url, {
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${userData.access_token}`,
            },
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.uid) {
                    dispatch(removeUserData());
                    setProfile(false);
                    router.push("/signup");
                }
            })
            .catch((err) => alert(err.message))
            .finally(() => setLoading(false));
    };

    return (
        <>
            <main className="fixed top-0 right-0 h-screen z-[500] flex justify-stretch">
                <div className="w-[36rem] h-full float-right bg-[#ededf3] px-[2rem] py-[2rem] overflow-y-scroll hidden-scroll">
                    <div className="flex justify-between">
                        <h1 className="text-[2.4rem] font-bold mb-4">Settings</h1>
                        <span className="relative cursor-pointer" onClick={() => setProfile(false)}>
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
                        <p className="text-[.9rem] font-bold">{userData?.user?.email}</p>
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
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={changeEmail.email}
                                    onChange={(e) => {
                                        const { name, value } = e.target;
                                        setChangeEmail({ ...changeEmail, [name]: value });
                                    }}
                                    placeholder="Enter new email"
                                    className="text-[.9rem] bg-gray-100 px-2 py-2 outline-none my-2 w-full rounded-md"
                                />
                                <br />
                                <label className="font-bold text-[.9rem]" htmlFor="password">
                                    Current Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={changeEmail.password}
                                    onChange={(e) => {
                                        const { name, value } = e.target;
                                        setChangeEmail({ ...changeEmail, [name]: value });
                                    }}
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
                                    <button
                                        className="gradient border-none cursor-pointer outline-none hover:opacity-80 mt-4 px-[2rem] font-bold text-[.9rem] rounded-full text-white"
                                        onClick={() => handleSubmit("change_email")}
                                    >
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
                                    name="password"
                                    value={changePassword.password}
                                    onChange={(e) => {
                                        const { name, value } = e.target;
                                        setChangePassword({ ...changePassword, [name]: value });
                                    }}
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
                                            name="newPassword"
                                            value={changePassword.newPassword}
                                            onChange={(e) => {
                                                const { name, value } = e.target;
                                                setChangePassword({ ...changePassword, [name]: value });
                                            }}
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
                                            name="cNewPassword"
                                            value={changePassword.cNewPassword}
                                            onChange={(e) => {
                                                const { name, value } = e.target;
                                                setChangePassword({ ...changePassword, [name]: value });
                                            }}
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
                                    <button
                                        className="gradient border-none cursor-pointer outline-none hover:opacity-80 mt-4 px-[2rem] font-bold text-[.9rem] rounded-full text-white"
                                        onClick={() => handleSubmit("change_password")}
                                    >
                                        Save Password
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
                                    value={deleteAccount}
                                    onChange={(e) => setDeleteAccount(e.target.value)}
                                    placeholder="Enter the word `delete`"
                                    className="text-[.9rem] bg-gray-100 px-2 py-2 outline-none my-2 w-full rounded-md"
                                />
                                {deleteAccount === "delete" && (
                                    <>
                                        <button
                                            className="mt-4 px-[2rem] font-bold w-full text-[.9rem] rounded-full border-4 border-[#F0F2F6] h-10 min-w[120px] hover:border-[#f2f4f7]"
                                            onClick={() => setShowDelete(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            className="mt-4 px-[2rem] font-bold w-full text-[.9rem] rounded-full h-10 min-w[120px] bg-red-50 text-red-900"
                                            onClick={handleDelete}
                                        >
                                            Delete my account and all my data
                                        </button>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
};

export default SideBar;
