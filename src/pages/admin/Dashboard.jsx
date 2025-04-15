import React from "react";
import Table from "../../components/admin/Table";
import UserTable from "../../components/admin/user/UserTable";
import PostTable from "../../components/admin/post/PostTable";
import Card from "../../components/admin/card/Card";

const Dashboard = () => {
  return (
    <>
      <div className="w-full lg:ps-64">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <Card label="Total Users" text="The number of daily users" value="72,540" percentage="1.7%" level="up" />
              <Card label="Total Posts" text="The number of daily users" value="72,540" percentage="1.7%" level="up" />
              <Card label="Total Keywords" text="The number of daily users" value="72,540" percentage="1.7%" level="up" />
              <Card label="Total Images" text="The number of daily users" value="72,540" percentage="1.7%" level="up" />
            </div>

            {/* <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 md:p-5 min-h-102.5 flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <div>
                    <h2 className="text-sm text-gray-500 dark:text-neutral-500">
                      Income
                    </h2>
                    <p className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                      $126,238.49
                    </p>
                  </div>

                  <div>
                    <span className="py-[5px] px-1.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-md bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-500">
                      <svg
                        className="inline-block size-3.5"
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
                        <path d="M12 5v14"></path>
                        <path d="m19 12-7 7-7-7"></path>
                      </svg>
                      25%
                    </span>
                  </div>
                </div>

                <div
                  id="hs-multiple-bar-charts"
                  // style="min-height: 315px;"
                  className=""
                ></div>
              </div>

              <div className="p-4 md:p-5 min-h-102.5 flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <div>
                    <h2 className="text-sm text-gray-500 dark:text-neutral-500">
                      Visitors
                    </h2>
                    <p className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                      80.3k
                    </p>
                  </div>

                  <div>
                    <span className="py-[5px] px-1.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-md bg-red-100 text-red-800 dark:bg-red-500/10 dark:text-red-500">
                      <svg
                        className="inline-block size-3.5"
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
                        <path d="M12 5v14"></path>
                        <path d="m19 12-7 7-7-7"></path>
                      </svg>
                      2%
                    </span>
                  </div>
                </div>

                <div
                  id="hs-single-area-chart"
                  // style="min-height: 315px;"
                  className=""
                >
                  <div
                    id="apexchartsy4ixpj98"
                    className="apexcharts-canvas apexchartsy4ixpj98 apexcharts-theme-"
                    // style="width: 747px; height: 300px;"
                  >
                    <div className="apexcharts-tooltip apexcharts-theme-light">
                      <div
                        className="apexcharts-tooltip-title"
                        style={{
                          fontFamily: "Helvetica, Arial, sans-serif",
                          fontSize: "12px"
                        }}
                      ></div>
                      <div
                        className="apexcharts-tooltip-series-group apexcharts-tooltip-series-group-0"
                        style={{ order: "1" }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          shape="circle"
                          style={{ color: "rgb(37, 99, 235)" }}
                        ></span>
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: "12px"
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label"></span>
                            <span className="apexcharts-tooltip-text-y-value"></span>
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label"></span>
                            <span className="apexcharts-tooltip-text-goals-value"></span>
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label"></span>
                            <span className="apexcharts-tooltip-text-z-value"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                      <div className="apexcharts-yaxistooltip-text"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <Table component={<UserTable />} />
            <Table component={<PostTable />} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
