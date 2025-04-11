import React from 'react';

const NoPostFound = () => {
    return (
        <div className="absolute top-[calc(100%+5px)] z-50 w-full bg-white border border-gray-200 rounded-lg dark:bg-neutral-800 dark:border-neutral-700">
            <div className="max-h-72 rounded-b-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                <span
                    className="flex items-center cursor-pointer py-2 px-4 w-full text-sm text-gray-500 hover:bg-gray-100"
                >
                No posts found.
                </span>
            </div>
        </div>
    );
}

export default NoPostFound;
