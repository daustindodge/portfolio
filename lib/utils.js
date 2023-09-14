"use server";

import toast from "react-hot-toast";
import {TbMailCheck, TbMailQuestion, TbMailX} from "react-icons/tb";
import React from "react";

export const validateString = (value, maxLength) =>
{
    return !(!value || typeof value !== "string" || value.length > maxLength);
}

export const getErrorMessage = (error) =>
{
    let message;

    if (error instanceof Error)
    {
        message = error.message;
    }
    else if (error && typeof error === "object" && "message" in error)
    {
        message = String(error.message);
    }
    else if (typeof error === "string")
    {
        message = error;
    }
    else
    {
        message = "Something went wrong";
    }

    return message;
}

export const customToast = (type, message = "Hmmm...") =>
{
    if (type === "success")
    {
        toast.custom((t) => (
            <div
                className={`${
                    t.visible ? 'animate-enter' : 'animate-leave'
                } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
                <div className="flex-1 w-0 p-4">
                    <div className="flex items-start items-center">
                        <div className="flex-shrink-0 pt-0.5 px-2">
                            <p className="text-3xl text-green-700"><TbMailCheck /></p>
                        </div>
                        <div className="ml-3 flex-1">
                            {message}
                        </div>
                    </div>
                </div>
                <div className="flex border-l border-gray-200">
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                        Close
                    </button>
                </div>
            </div>
        ))
    }
    else if (type === "error")
    {
        toast.custom((t) => (
            <div
                className={`${
                    t.visible ? 'animate-enter' : 'animate-leave'
                } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
                <div className="flex-1 w-0 p-4">
                    <div className="flex items-start items-center">
                        <div className="flex-shrink-0 pt-0.5 px-2">
                            <p className="text-3xl text-red-700"><TbMailX /></p>
                        </div>
                        <div className="ml-3 flex-1">
                            {message}
                        </div>
                    </div>
                </div>
                <div className="flex border-l border-gray-200">
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                        Close
                    </button>
                </div>
            </div>
        ))
    }
    else
    {
        toast.custom((t) => (
            <div
                className={`${
                    t.visible ? 'animate-enter' : 'animate-leave'
                } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
                <div className="flex-1 w-0 p-4">
                    <div className="flex items-start items-center">
                        <div className="flex-shrink-0 pt-0.5 px-2">
                            <p className="text-3xl text-yellow-700"><TbMailQuestion /></p>
                        </div>
                        <div className="ml-3 flex-1">
                            Something's not right...
                        </div>
                    </div>
                </div>
                <div className="flex border-l border-gray-200">
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                        Close
                    </button>
                </div>
            </div>
        ))
    }
}