import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import { categories, popularPosts, recentPosts, allPosts } from "./data";
import { motion, AnimatePresence } from "framer-motion";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  const [posts, setPosts] = useState(allPosts);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPosts, setSelectedPosts] = useState(allPosts);
  // const deletedPost = async (id) => {
  //   const itemNeedToDelete = document.getElementById(id);
  //   if (itemNeedToDelete) {
  //     itemNeedToDelete.classList.add("fade");
  //     setTimeout(() => {
  //       setPosts((prev) => prev.filter((post) => post?.id !== id));
  //     }, 1000);
  //   }
  // };

  const filterPostViaCategory = (category) => {
    if (category === "all") {
      setSelectedPosts(allPosts);
    } else {
      const posted = posts.filter((post) =>
        post?.categories.includes(category)
      );
      setSelectedPosts(posted);
    }
  };

  return (
    <div className="App">
      <div className="flex flex-wrap max-w-6xl mx-auto px-4 sm:px-6 ">
        <Header />
        <div className="w-full">
          <div className="space-y-4">
            <div className="flex flex-wrap">
              <div className="py-10 lg:py-14 mx-auto w-full">
                <div className="grid sm:grid-cols-2 sm:items-center gap-8">
                  <div className="sm:order-2">
                    <div className="relative rounded-xl overflow-hidden w-full h-[200px] sm:h-[350px]">
                      <img
                        className="size-full absolute top-0 start-0 object-cover rounded-lg"
                        src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                        alt="Blog Image"
                      />
                    </div>
                  </div>

                  <div className="sm:order-1">
                    <p className="mb-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-neutral-200">
                      Business insight
                    </p>

                    <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800 dark:text-neutral-200">
                      <a
                        className="hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-300 dark:hover:text-white dark:focus:text-white"
                        href="#"
                      >
                        How to get buy-in and budget for direct hiring
                      </a>
                    </h2>

                    <div className="mt-6 sm:mt-10 flex items-center">
                      <div className="shrink-0">
                        <img
                          className="size-10 sm:h-14 sm:w-14 rounded-full"
                          src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                          alt="Blog Image"
                        />
                      </div>

                      <div className="ms-3 sm:ms-4">
                        <p className="sm:mb-1 font-semibold text-gray-800 dark:text-neutral-200">
                          Louise Donadieu
                        </p>
                        <p className="text-xs text-gray-500 dark:text-neutral-500">
                          Strategic Marketing Consultant
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-10 lg:py-14 mx-auto">
                <div className="grid lg:grid-cols-2 gap-6">
                  <a
                    className="group sm:flex rounded-xl focus:outline-none"
                    href="#"
                  >
                    <div className="shrink-0 relative rounded-xl overflow-hidden h-[200px] sm:w-[250px] sm:h-[350px] w-full">
                      <img
                        className="size-full absolute top-0 start-0 object-cover"
                        src="https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                        alt="Blog Image"
                      />
                    </div>

                    <div className="grow">
                      <div className="p-4 flex flex-col h-full sm:p-6">
                        <div className="mb-3">
                          <p className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-neutral-200">
                            Business
                          </p>
                        </div>
                        <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white dark:group-focus:text-white">
                          Preline becomes an official Instagram Marketing
                          Partner
                        </h3>
                        <p className="mt-2 text-gray-600 dark:text-neutral-400">
                          Great news we're eager to share.
                        </p>

                        <div className="mt-5 sm:mt-auto">
                          <div className="flex items-center">
                            <div className="shrink-0">
                              <img
                                className="size-[46px] rounded-full"
                                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                alt="Avatar"
                              />
                            </div>
                            <div className="ms-2.5 sm:ms-4">
                              <h4 className="font-semibold text-gray-800">
                                Aaron Larsson
                              </h4>
                              <p className="text-xs text-gray-500">
                                Feb 15, 2021
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a
                    className="group sm:flex rounded-xl focus:outline-none"
                    href="#"
                  >
                    <div className="shrink-0 relative rounded-xl overflow-hidden h-[200px] sm:w-[250px] sm:h-[350px] w-full">
                      <img
                        className="size-full absolute top-0 start-0 object-cover"
                        src="https://images.unsplash.com/photo-1669824774762-65ddf29bee56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                        alt="Blog Image"
                      />
                    </div>
                    <div className="grow">
                      <div className="p-4 flex flex-col h-full sm:p-6">
                        <div className="mb-3">
                          <p className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-neutral-200">
                            Announcements
                          </p>
                        </div>
                        <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white dark:group-focus:text-white">
                          Announcing a free plan for small teams
                        </h3>
                        <p className="mt-2 text-gray-600 dark:text-neutral-400">
                          At Wake, our mission has always been focused on
                          bringing openness.
                        </p>

                        <div className="mt-5 sm:mt-auto">
                          <div className="flex items-center">
                            <div className="shrink-0">
                              <img
                                className="size-[46px] rounded-full"
                                src="https://images.unsplash.com/photo-1669720229052-89cda125fc3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                alt="Avatar"
                              />
                            </div>
                            <div className="ms-2.5 sm:ms-4">
                              <h4 className="font-semibold text-gray-800 dark:text-neutral-200">
                                Hanna Wolfe
                              </h4>
                              <p className="text-xs text-gray-500 dark:text-neutral-500">
                                Feb 4, 2021
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className=" w-full">
                {allPosts?.length > 0 &&
                  allPosts?.map((post) => {
                    return (
                      <Post
                        key={post?.id}
                        alignment="vertical"
                        data={post}
                      />
                    );
                  })}
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
