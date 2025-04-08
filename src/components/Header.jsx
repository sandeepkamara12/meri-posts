import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import SearchbarResult from "./SearchbarResult";
import { useRef, useEffect, useState } from "react";
import { allPosts } from "../data";
import NoPostFound from "./NoPostFound";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { searchPosts } from "../redux/slices/postSlice";
import useDebounce from "../hooks/useDebounce";
import useClickOutside from "../services/useClickOutside";
// import { persistor } from "../redux/store";

const Header = () => {
  const searchRef = useRef(null);
  const profileDropdownRef = useRef(null);
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const { searchedPosts, searchLoading } = useSelector((state) => state.posts);
  const [isOpenProfileDropdown, setIsOpenProfileDropdown] = useState(false);
  const [toggleSearchbar, setToggleSearchbar] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const debouncedInputValue = useDebounce(inputValue, 300);
  const location = useLocation();

  const fetchSearchResults = async (query) => {
    await dispatch(searchPosts(query));
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    if (debouncedInputValue !== "") {
      fetchSearchResults(debouncedInputValue);
    }
  }, [debouncedInputValue]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    // persistor.purge();
    navigate("/login");
  };

  useEffect(() => {
    return () => {
      // console.log('aaa');
      setToggleSearchbar(false);
    }
  }, [location.pathname])
  useClickOutside(searchRef, () => { setInputValue(""); setToggleSearchbar(false) });
  useClickOutside(profileDropdownRef, () => { setIsOpenProfileDropdown(false); });

  useEffect(() => {
    if (toggleSearchbar && searchRef.current) {
      const input = searchRef.current.querySelector('input');
      if (input) input.focus();
    }
  }, [toggleSearchbar]);

  return (
    <>
      <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-[48] w-full bg-white text-sm py-4 md:py-8 border-b border-gray px-4 sm:px-6">
        <nav className="flex basis-full items-center max-w-4xl w-full mx-auto">
          <div className="me-5">
            <Link
              className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              to="/"
            >
              <img src="/logo.png" alt="" width="200" />
            </Link>

            <div className="lg:hidden ms-1"></div>
          </div>
          {toggleSearchbar + 'aaa'}
          <div className="w-full flex items-center justify-end ms-auto md:justify-between gap-x-1 sm:gap-x-3">
            <div
              ref={searchRef}
            >
              <div
                className={`${toggleSearchbar
                  ? "absolute left-4 w-[calc(100%-32px)] top-[70px]"
                  : "hidden"
                  } md:relative md:top-auto md:left-0 md:block md:w-[300px]`}
              >
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                    <svg
                      className="shrink-0 size-4 text-gray-400 dark:text-white/60"
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
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="py-2 ps-10 pe-16 block w-full bg-white border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Search"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                  {debouncedInputValue && searchedPosts.length > 0 && (
                    <SearchbarResult
                      setInputValue={setInputValue}
                      searchedPosts={searchedPosts}
                      loading={searchLoading}
                    />
                  )}
                  {debouncedInputValue && searchedPosts.length === 0 && (
                    <NoPostFound />
                  )}
                  {debouncedInputValue !== "" && !searchLoading && (
                    <div className="absolute inset-y-0 end-0 flex items-center z-50 pe-1">
                      <button
                        type="button"
                        onClick={() => setInputValue("")}
                        className="inline-flex shrink-0 justify-center items-center size-6 rounded-full text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
                        aria-label="Close"
                      >
                        <span className="sr-only">Close</span>
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
                          <circle cx="12" cy="12" r="10" />
                          <path d="m15 9-6 6" />
                          <path d="m9 9 6 6" />
                        </svg>
                      </button>
                    </div>
                  )}
                  {searchLoading && (
                    <div className="absolute inset-y-0 end-2 flex items-center pointer-events-none z-20 pe-1">
                      <div
                        className="animate-spin inline-block size-4 border-[2px] border-black border-t-transparent text-blue-600 rounded-full"
                        role="status"
                        aria-label="loading"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <button
                type="button"
                className={`md:hidden size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 ${toggleSearchbar ? "bg-gray-100" : ""
                  } disabled:opacity-50 disabled:pointer-events-none`}
                onClick={()=>setToggleSearchbar(!toggleSearchbar)}
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
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>


            <div className="flex flex-row items-center justify-end gap-1">
              {!isLoggedIn ? (
                <>
                  <div className="flex gap-1 md:gap-5 flex-row md:items-center md:justify-end md:ps-5">
                    <Link
                      to="/login"
                      className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                    >
                      <span className="hidden md:block">Login</span>
                      <button type="button" className="md:hidden size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100  disabled:opacity-50 disabled:pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24" strokeWidth={2} stroke="currentColor" className="shrink-0 size-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                        </svg>
                        <span className="sr-only">Login</span>
                      </button>
                    </Link>
                    <Link
                      to="/register"
                      className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                    >
                      <span className="hidden md:block">
                        Register
                      </span>
                      <button type="button" className="md:hidden size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100  disabled:opacity-50 disabled:pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} width="24" height="24" stroke="currentColor" className="shrink-0 size-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                        </svg>
                        <span className="sr-only">Register</span>
                      </button>
                    </Link>
                  </div>
                </>
              ) : null}


              {isLoggedIn ? (
                <>
                  <button
                    type="button"
                    className="size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
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
                      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                    </svg>
                    <span className="sr-only">Notifications</span>
                  </button>
                  <div className="relative inline-flex" ref={profileDropdownRef}>
                    <button
                      onClick={() =>
                        setIsOpenProfileDropdown(!isOpenProfileDropdown)
                      }
                      type="button"
                      className="size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                    >
                      <img
                        className="shrink-0 size-[38px] rounded-full"
                        src={user?.image}
                        alt="Avatar"
                      />
                    </button>

                    <div
                      className={`absolute right-0 top-full transition-[opacity,margin] duration ${isOpenProfileDropdown} ${isOpenProfileDropdown
                        ? "opacity-100 block"
                        : "opacity-0 hidden"
                        } min-w-60 bg-white shadow-md rounded-lg mt-2`}
                    >
                      <div className="py-3 px-5 bg-gray-100 rounded-t-lg dark:bg-neutral-700">
                        <p className="text-sm text-gray-500 dark:text-neutral-500">
                          Signed in as
                        </p>
                        <p className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                          {user?.email}
                        </p>
                      </div>
                      <div className="p-1.5 space-y-0.5">
                        <button
                          className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                          onClick={() => { navigate('/profile'); setIsOpenProfileDropdown(false) }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="size-4 shrink-0"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                          Profile
                        </button>
                        <button
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                          onClick={() => { navigate('/profile'); setIsOpenProfileDropdown(false) }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="size-4 shrink-0"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                          Settings
                        </button>
                        <button
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                          onClick={() => { navigate('/profile'); setIsOpenProfileDropdown(false) }}
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
                            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                            <path d="M12 12v9" />
                            <path d="m8 17 4 4 4-4" />
                          </svg>
                          Downloads
                        </button>
                        <button
                          onClick={() => { setIsOpenProfileDropdown(false); handleLogout(); }}
                          className="w-full cursor-pointer flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
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
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
