import React from "react";

const Searchbar = () => {
  return (
    <div className="hidden absolute top-[calc(100%+5px)] z-50 w-full bg-white border border-gray-200 rounded-lg dark:bg-neutral-800 dark:border-neutral-700">
        <div className="max-h-72 rounded-b-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div class="text-xs uppercase text-gray-500 m-3 mb-1 dark:text-neutral-500 --exclude-accessibility">designer</div>
            <span className="flex items-center cursor-pointer py-2 px-4 w-full text-sm text-gray-800 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200">
                <div className="flex items-center w-full">
                    <div className="flex items-center justify-center rounded-full bg-gray-200 size-6 overflow-hidden me-2.5">
                        <img className="shrink-0" src="https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4=" alt="Ella Lauda" />
                    </div>
                    <div>Ella Lauda</div>
                </div>
                <span className="hidden hs-combo-box-selected:block">
                    <svg className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500" xmlns="http:.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
            </span>
            <span className="flex items-center cursor-pointer py-2 px-4 w-full text-sm text-gray-800 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200">
                <div className="flex items-center w-full">
                    <div className="flex items-center justify-center rounded-full bg-gray-200 size-6 overflow-hidden me-2.5">
                        <img className="shrink-0" src="https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4=" alt="Ella Lauda" />
                    </div>
                    <div>Ella Lauda</div>
                </div>
                <span className="hidden hs-combo-box-selected:block">
                    <svg className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500" xmlns="http:.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
            </span>
          </div>
          <div className="max-h-72 rounded-b-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div class="text-xs uppercase text-gray-500 m-3 mb-1 dark:text-neutral-500 --exclude-accessibility">backend</div>
            <span className="flex items-center cursor-pointer py-2 px-4 w-full text-sm text-gray-800 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200">
                <div className="flex items-center w-full">
                    <div className="flex items-center justify-center rounded-full bg-gray-200 size-6 overflow-hidden me-2.5">
                        <img className="shrink-0" src="https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4=" alt="Ella Lauda" />
                    </div>
                    <div>Ella Lauda</div>
                </div>
                <span className="hidden hs-combo-box-selected:block">
                    <svg className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500" xmlns="http:.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
            </span>
            <span className="flex items-center cursor-pointer py-2 px-4 w-full text-sm text-gray-800 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200">
                <div className="flex items-center w-full">
                    <div className="flex items-center justify-center rounded-full bg-gray-200 size-6 overflow-hidden me-2.5">
                        <img className="shrink-0" src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=2.5&amp;w=320&amp;h=320&amp;q=80" alt="Ella Lauda" />
                    </div>
                    <div>Ella Lauda</div>
                </div>
                <span className="hidden hs-combo-box-selected:block">
                    <svg className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500" xmlns="http:.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
            </span>
          </div>
        </div>
  );
};

export default Searchbar;
