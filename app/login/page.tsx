"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    const [password, setPassword] = useState("");
    const router = useRouter();

    function handleLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ password }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if (data.message === "Authorized") {
                    // Handle successful login here
                    console.log("Login successful");
                    router.push("/")
                } else {
                    // Handle failed login here
                    console.log("Login failed");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-slate-950 text-gray-200">
            <div id="main_card" className={`h-1/2 w-1/4 mt-8 mx-12`}>
                <div
                    id="head"
                    className="flex items-center justify-between pl-2 pr-2 border border-slate-500 bg-slate-900 w-full h-10 rounded-t-xl"
                >
                    <div className="flex gap-1">
                        <div className="w-2.5 h-2.5 bg-slate-600 rounded-full" />
                        <div className="w-2.5 h-2.5 bg-slate-600 rounded-full" />
                        <div className="w-2.5 h-2.5 bg-slate-600 rounded-full" />
                    </div>
                    <h1 className="font-semibold md:text-md xl:text-xl text-gray-400">
                        Login to development
                    </h1>
                    <div className="flex gap-1">
                        <div className="w-2.5 h-2.5 bg-transparent rounded-full" />
                        <div className="w-2.5 h-2.5 bg-transparent rounded-full" />
                        <div className="w-2.5 h-2.5 bg-transparent rounded-full" />
                    </div>
                </div>
                <div
                    id="body"
                    className="flex h-3/4 border-b border-x border-slate-500 flex-col px-2 pt-2 bg-slate-900 rounded-b-xl"
                >
                    <form
                        onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
                            handleLogin(event)
                        }
                    >
                        <h1 className="font-semibold text-xl text-gray-300 text-center">
                            Enter development credentials
                        </h1>
                        <h1 className="mb-12 font-semibold text-xl text-gray-300 text-center">
                            to log in to the development environment.
                        </h1>
                        <div className="flex flex-col items-center w-full">
                            <input
                                type="password"
                                name="password"
                                className="h-12 w-2/3 px-2 py-2 mb-4 border border-slate-500 bg-transparent focus:outline-none autofill:!bg-transparent rounded-md"
                                placeholder="Password"
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                            />
                            <button
                                className="w-2/3 px-2 py-1 font-semibold text-xl text-gray-300 text-center bg-slate-800 rounded-md"
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}