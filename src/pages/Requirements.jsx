import React from 'react';

const Requirements = () => {
    return (
        <div>
            <ul>
                <li>
                    Need to create author profile page.
                </li>
                <li>
                    Need to follow someone so he/she could share the post with his/her friend/follower.
                </li>
                <li>load posts on scroll for easy in mobile</li>
                <li>
                    show posts categorywise.
                </li>
                <li>
                    Also need to work on the comment section.
                </li>
                <li>need to add instagram and linkedin icons in social share network</li>
                <li>Need to share the post on single and list pages.</li>


            </ul>
            {/* Facebook and Linkedin Sharing icons for post */}
            {/* <div>
                <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10"
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
                </a>
                <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10"
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
                </a>
            </div> */}

            {/* Make post favorite */}
            {/* <li
                className="relative"
                data-hs-tooltip="true"
                title="Add in your favorite"
            >
                <div className="flex">
                    <input
                        type="checkbox"
                        checked={favoritePosts.includes(post.id)}
                        onChange={handleToggle}
                        className="hidden shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        id="hs-default-checkbox"
                    />
                    <label
                        htmlFor="hs-default-checkbox"
                        className="text-sm text-gray-500"
                    >
                        <button
                            type="button"
                            onClick={() => toggleFavorite(post.id)}
                            className={`size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent ${favoritePosts.includes(post.id)
                                    ? "bg-red-000"
                                    : "text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill={
                                    favoritePosts.includes(post.id)
                                        ? "#dc2626"
                                        : "none"
                                }
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke={
                                    favoritePosts.includes(post.id)
                                        ? "#dc2626"
                                        : "currentColor"
                                }
                                className="shrink-0 size-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                />
                            </svg>
                        </button>
                    </label>
                </div>
            </li> */}

            {/* Share the post to your followers */}
            {/* <li
                className="relative"
                data-hs-tooltip="true"
                title="Forward to followers"
            >
                <button
                    type="button"
                    className="size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="shrink-0 size-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
                        />
                    </svg>
                </button>
            </li> */}

            {/* Image gallery on details page */}
            {/* <div className="text-center">
                <div className="grid lg:grid-cols-2 gap-3">
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                        <figure className="relative w-full h-60">
                            <img className="size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=560&amp;q=80" alt="Blog" />
                        </figure>
                        <figure className="relative w-full h-60">
                            <img className="size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1671726203638-83742a2721a1?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=560&amp;q=80" alt="Blog" />
                        </figure>
                    </div>
                    <figure className="relative w-full h-72 sm:h-96 lg:h-full">
                        <img className="size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1671726203394-491c8b574a0a?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=560&amp;q=80" alt="Blog" />
                    </figure>
                </div>

                <span className="mt-3 block text-sm text-center text-gray-500 dark:text-neutral-500">
                    Working process
                </span>
            </div> */}
        </div>
    );
}

export default Requirements;
