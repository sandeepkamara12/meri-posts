import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { setCookie, getCookie } from "../../utils/cookieUtils";

const Cookiee = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const consent = getCookie("cookieConsent");
    if (!consent) {
      setVisible(true); // show if cookie not set or expired
    }
  }, []);
  const acceptCookies = () => {
    setCookie("cookieConsent", "accepted", 30); // store for 30 days
    setVisible(false);
  };

  const rejectCookies = () => {
    setCookie("cookieConsent", "rejected", 30); // store for 30 days
    setVisible(false);
    window.location.href="/"
  };

  if (!visible) return null;

  return (
    <>
      <div className="fixed bottom-0 z-60 inset-x-0">
        <div className="p-4 bg-white border border-gray-200 shadow-2xs dark:bg-neutral-900 dark:border-neutral-800">
          <div className="max-w-sm w-full mx-auto">
            <h2 className="font-semibold text-gray-800 dark:text-white">
              Cookie Settings
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              We use cookies to improve your experience and for marketing. Visit
              our{" "}
              <Link
                className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
                to="/"
              >
                Cookies Policy
              </Link>{" "}
              to learn more.
            </p>

            <div className="mt-5 inline-flex gap-x-2">
              <button
                type="button"
                onClick={acceptCookies}
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Agree
              </button>
              <button
              onClick={rejectCookies}
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <script>
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelectorAll('.hs-overlay').forEach((el) => HSOverlay.open(el));
    });
  });
</script> */}
    </>
  );
};

export default Cookiee;
