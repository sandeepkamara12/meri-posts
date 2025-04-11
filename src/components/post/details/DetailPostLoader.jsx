import React from 'react';

const DetailPostLoader = ({layout}) => {
    return (
        <div className="mt-5 space-y-3 animate-pulse w-full">
            <div
                className={`group posts relative last:border-0 w-full ${layout === "vertical"
                    ? "col-span-1 border-b border-gray md:border-0"
                    : "border-b border-gray"
                    }`}
            >
                <div
                    className={`group ${layout === "vertical" ? "flex flex-col" : "sm:flex"
                        } rounded-xl focus:outline-none w-full block`}
                >
                    <div className="grow">
                        <div
                            className={`flex flex-col h-full pt-6 lg:pt-10 }`}
                        >
                            <div className="grid grid-cols-4 items-center justify-between ">
                                <div className="col-start-1 col-end-2 col-span-1 h-10 bg-gray-200 rounded-md"></div>
                                <div className="col-start-4 col-end-4 col-span-1 h-10 bg-gray-200 rounded-md"></div>
                            </div>
                            <div className="w-1/3 h-7 bg-gray-200 rounded-md my-4"></div>
                            <div className="w-1/2 h-7 bg-gray-200 rounded-md mb-4"></div>
                            <div className="w-full h-20 bg-gray-200 rounded-md mb-4"></div>
                            <div className="w-full h-20 bg-gray-200 rounded-md mb-4"></div>
                            <div className="w-full h-72 bg-gray-200 rounded-md mb-4"></div>
                            <div className="w-1/2 h-12 bg-gray-200 rounded-md mx-auto"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailPostLoader;
