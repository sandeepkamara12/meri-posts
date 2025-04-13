import React from 'react';

const PostLoader = ({layout}) => {
    return (
        <div className="mt-5 space-y-3 animate-pulse">
            <div
                className={`group posts relative last:border-0 ${layout === "vertical"
                    ? "col-span-1 border-b border-gray md:border-0"
                    : "border-b border-gray"
                    }`}
            >
                <div
                    className={`group ${layout === "vertical" ? "flex flex-col" : "sm:flex"
                        } rounded-xl focus:outline-none w-full block`}
                >
                    <div
                        className={`shrink-0 relative rounded-xl overflow-hidden h-[250px] ${layout === "vertical" ? "w-full" : "sm:w-[200px]"
                            } md:h-[200px]`}
                    >
                        <div className="w-full h-full bg-gray-200 rounded-md"></div>
                    </div>
                    <div className="grow">
                        <div
                            className={`flex flex-col h-full p-3 ${layout === "vertical" ? "sm:py-6" : "sm:px-6"
                                }`}
                        >
                            <div className="grid grid-cols-3 items-center justify-between ">
                                <div className="col-start-1 col-end-2 col-span-1 h-7 bg-gray-200 rounded-md mb-3"></div>
                                <div className="col-start-3 col-end-3 col-span-1 h-7 bg-gray-200 rounded-md mb-3"></div>
                            </div>
                            <div className="w-2/3 h-5 bg-gray-200 rounded-md mb-2"></div>
                            <div className="w-full h-12 bg-gray-200 rounded-md mb-3"></div>
                            <div className="w-1/2 h-12 bg-gray-200 rounded-md"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostLoader;
