import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useClickOutside from '../../services/useClickOutside';

const Notification = () => {
    const notificationRef = useRef(null);
    const [notificationModal, setNotificationModal] = useState(false);
    useClickOutside(notificationRef, () => {
        setNotificationModal(false);
    });
    return (
        <div>
            <button ref={notificationRef} onClick={() => setNotificationModal(!notificationModal)} className="size-10 relative justify-center inline-flex  items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none text-center hover:text-gray-900 focus:outline-none" type="button">
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                <div className="absolute block w-3 h-3 bg-red-500 border-2 border-white rounded-full top-1 end-1"></div>
            </button>

            <div id="dropdownNotification" className={`${!notificationModal ? 'hidden' : ''} shadow-notification z-20 absolute top-full right-0 border border-gray-100 w-full max-w-sm bg-white rounded-lg`} aria-labelledby="dropdownNotificationButton">
                <div className="block p-4 font-medium text-gray-800 rounded-t-lg text-sm flex flex-wrap items-center justify-between">
                    <span>
                        Notifications
                    </span>
                    <svg className="cursor-pointer text-gray-500 hover:text-blue-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </div>
                <Link to="#" className="flex px-8 py-6 bg-gray-100 border-t border-gray-200 relative">
                    <div className="shrink-0">
                        <span className='absolute left-4 top-10 rounded-lg w-2 h-2 bg-blue-600'></span>
                        <img className="rounded-full w-9 h-9" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Jese" />
                    </div>
                    <div className="w-full ps-5">
                        <span className='text-xs text-gray-500 block'>3 days ago</span>
                        <span className='text-sm text-gray-800 block font-medium'>Clara Becker</span>
                        <div className="text-gray-500 text-sm mt-1">Add yourself to our new “Hire Page”. Let visitors know you’re open to freelance or full-time work.</div>
                    </div>
                </Link>
                <Link to="#" className="flex px-8 py-6 !border-t !border-gray-200 last:border-b-transparent relative">
                    <div className="shrink-0">
                        <span className='absolute left-4 top-10 rounded-lg w-2 h-2 bg-blue-600'></span>
                        <img className="rounded-full w-9 h-9" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Jese" />
                    </div>
                    <div className="w-full ps-5">
                        <span className='text-xs text-gray-500 block'>2 hours ago</span>
                        <span className='text-sm text-gray-800 block font-medium'>2 hours ago</span>
                        <div className="text-gray-500 text-sm mt-1">changed an issue from 'in Progress' to 'Review'</div>
                    </div>
                </Link>

                <a href="#" className="block py-4 text-sm font-medium text-center group rounded-b-lg !border-t !border-gray-200">
                    <div className="inline-flex items-center text-gray-500 group-hover:text-blue-600 text-sm gap-2">
                        <svg className="text-gray-500 group-hover:text-blue-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 7 17l-5-5"></path><path d="m22 10-7.5 7.5L13 16"></path></svg>
                        Mark all as read
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Notification;
