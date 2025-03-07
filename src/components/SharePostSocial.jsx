import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const SharePostSocial = () => {
    const [isOpenShareDropdown, setIsOpenShareDropdown] = useState(false);
    // const [openShareDropdown, setOpenShareDropdown] = useState(null);
    const dropdownRef = useRef(null);
    const toggleDropdown = () => {
        setIsOpenShareDropdown((prev) => !prev);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpenShareDropdown(false);
            }
        };

        if (isOpenShareDropdown) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpenShareDropdown]);
    return (
        <div className="hs-dropdown relative inline-flex" ref={dropdownRef}>
            <button
                onClick={() => toggleDropdown()}
                id="hs-blog-article-share-dropdown"
                type="button"
                className="w-full py-2 sm:py-0 px-3 sm:px-0 focus:outline-none focus:bg-gray-50 font-medium rounded-lg border sm:border-0 border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none hs-tooltip-toggle flex items-center justify-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="shrink-0 size-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"></path></svg>
                <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm"
                    role="tooltip"
                >
                    Share
                </span>
            </button>
            <div
                className={`hs-dropdown-menu w-56 transition-[opacity,margin] duration absolute left-0 top-full ${isOpenShareDropdown ? 'opacity-100 block' : 'opacity-0 hidden'} mb-1 z-10 bg-gray-900 shadow-md rounded-xl p-2`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="hs-blog-article-share-dropdown"
            >
                <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:bg-white/10"
                    href="#"
                >
                    <svg
                        className="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                    Copy link
                </Link>
                <div className="border-t border-gray-600 my-2"></div>
                <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:bg-white/10"
                    href="#"
                >
                    <svg
                        className="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                    Share on Twitter
                </Link>
                <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:bg-white/10"
                    href="#"
                >
                    <svg
                        className="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                    Share on Facebook
                </Link>
                <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:bg-white/10"
                    href="#"
                >
                    <svg
                        className="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                    Share on LinkedIn
                </Link>
            </div>
        </div>
        // <div className="relative inline-flex" ref={dropdownRef}>
        //     <button onClick={toggleDropdown} id="hs-dropdown-example" type="button" className={`${isOpenShareDropdown ? 'bg-red-100' : ''} size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-red-100 disabled:opacity-50 disabled:pointer-events-none`}>
        //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="shrink-0 size-4">
        //             <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
        //         </svg>
        //     </button>

        //     {
        //         isOpenShareDropdown ?
        //             <div className={`${isOpenShareDropdown ? 'flex opacity-1' : 'hidden opacity-0 '} end-[38px] absolute transition-[opacity,margin] duration z-10 w-40 min-w-40 bg-white rounded-lg`}>
        //         <div className="flex flex-wrap items-center justify-between w-full">
        //             <Link className="size-[38px] relative inline-flex justify-center items-center text-sm font-semibold rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" to="/">
        //                 <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path></svg>
        //             </Link>
        //             <Link className="size-[38px] relative inline-flex justify-center items-center text-sm font-semibold rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" to="/">
        //                 <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path></svg>
        //             </Link>
        //             <Link className="size-[38px] relative inline-flex justify-center items-center text-sm font-semibold rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" to="/">
        //                 <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
        //             </Link>
        //             <Link className="size-[38px] relative inline-flex justify-center items-center text-sm font-semibold rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" to="/">
        //                 <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        //                     <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
        //                 </svg>
        //             </Link>
        //         </div>
        //     </div>
        //     :null
        //     }
        // </div>
    );
}

export default SharePostSocial;
