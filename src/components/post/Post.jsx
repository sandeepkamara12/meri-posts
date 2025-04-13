import { Link, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SharePostSocial from "./SharePostSocial";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../redux/slices/userSlice";

const Post = ({
  layout = "",
  data: post,
  favoritePosts = [],
  toggleFavorite,
  postMetaInfoToShare
}) => {
  const { users } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const user = users[post.userId];
  const [copied, setCopied] = useState(false);

  const dispatch = useDispatch();


  useEffect(() => {
    const fetchUserById = async () => {
      await dispatch(getUserById(post?.userId));
    };
    if (!user) {
      fetchUserById();
    }
  }, [dispatch, post?.userId, user]);

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

  const handleCopy = (id) => {
    const url = `${window.location.origin}/${id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2s
    }).catch(err => console.error("Copy failed", err));
  };

  return (
    <>  

      <div
        id={post?.id}
        className={`group posts relative last:border-0 ${
          layout === "vertical"
            ? "col-span-1 py-8 md:py-0 border-b border-gray md:border-0"
            : "border-b border-gray py-8"
        }`}
      >
        <div
          className={`group ${
            layout === "vertical" ? "flex flex-col" : "sm:flex"
          } rounded-xl focus:outline-none w-full block`}
        >
          <div
            className={`shrink-0 relative rounded-xl overflow-hidden h-[250px] ${
              layout === "vertical" ? "w-full" : "sm:w-[200px]"
            } md:h-[200px]`}
          >
            <Link to={`/post/${post?.id}`} className="h-full w-full inline-block">
              <img
                className="size-full absolute top-0 start-0 object-cover transition-transform duration-300 ease-in-out lg:group-hover:scale-110 hover:scale-110"
                src={`/post-${post?.id}.jpeg`}
                alt="Blog"
              />
            </Link>
          </div>
          <div className="grow">
            <div
              className={`flex flex-col h-full p-3 ${
                layout === "vertical" ? "sm:py-6" : "sm:px-6"
              }`}
            >
              <div
                className={`${
                  layout === "vertical"
                    ? "flex-col space-y-2"
                    : "flex-col space-y-2 md:space-y-0 md:flex-row md:items-center"
                } mb-3 flex flex-wrap justify-between`}
              >
                <div className="flex flex-wrap items-center gap-1">
                  {post?.tags &&
                    post?.tags?.length > 0 &&
                    post?.tags?.map((category, index) => (
                      <div
                        onClick={()=>navigate(`/tag-posts?tag=${category}`)}
                        key={index}
                        className="capitalize cursor-pointer transition hover:text-white hover:bg-blue-600 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-neutral-200"
                      >
                        {category}
                      </div>
                    ))}
                </div>
                <ul
                  className={`${
                    layout === "vertical" ? "" : "md:ms-auto"
                  } flex flex-wrap items-center space-x-1`}
                >
                  <li className="flex flex-wrap items-center">
                    <button
                      type="button"
                      onClick={() => handleCopy(post?.id)}
                      className="size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                      </svg>
                    </button>
                  </li>
                  <li
                    className="relative flex flex-wrap items-center"
                    data-hs-tooltip="true"
                    title="Share to social networks"
                  >
                    <div className="hs-dropdown relative inline-flex" ref={dropdownRef}>
                      <button
                        onClick={() => toggleDropdown()}
                        id="hs-blog-article-share-dropdown"
                        type="button"
                        className={`w-full py-2 sm:py-0 px-3 sm:px-0 focus:outline-none focus:bg-gray-50 font-medium rounded-lg bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none hs-tooltip-toggle flex items-center justify-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800`}
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
                        <span>share</span>
                      </button>
                      {
                        isOpenShareDropdown && post &&
                          <SharePostSocial post={post} isOpenShareDropdown={isOpenShareDropdown} />
                      }
                    </div>
                  </li>
                 
                  <li className="flex flex-wrap items-center">
                    <button
                      type="button"
                      className="size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
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
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </button>
                    <span className="text-sm">{post?.views}</span>
                  </li>
                </ul>
              </div>
              <Link
                to={`/post/${post?.id}`}
                className="font-medium text-md text-gray-800 transition lg:group-hover:text-blue-600 hover:text-blue-600"
              >
                {post?.title}
              </Link>
              <p className=" mt-1 text-sm text-gray-500 dark:text-neutral-500 overflow-hidden text-ellipsis">
                {post?.body?.length > 150
                  ? post.body.slice(0, 150) + "..."
                  : post.body}
              </p>

              <div
                className={`${layout === "vertical" ? "" : "sm:mt-auto"} mt-5`}
              >
                <div className="flex items-center">
                  <div className="shrink-0">
                    <img
                      className="size-[40px] rounded-full"
                      src={user?.image}
                      alt="Avatar"
                    />
                  </div>
                  <div className="ms-2.5 sm:ms-3">
                    <h4 className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                      {`${user?.firstName} ${user?.lastName}`}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      {moment(post?.date).format("MMM Do YYYY, h:mm a")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
