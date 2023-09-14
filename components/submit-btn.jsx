import React from "react";
import {FaPaperPlane} from "react-icons/fa";
import {experimental_useFormStatus as useFormStatus} from "react-dom";


export default function SubmitBtn()
{
    const {pending} = useFormStatus();

    return (
        <button type="submit" disabled={pending} className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all disabled:scale-100 disabled:bg-opacity-65 focus:bg-gray-700 active:scale-95 dark:focus:bg-gray-800">
            {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
                <>
                    Send <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
            )}
        </button>
    )
}