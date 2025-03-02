import React from 'react';

const Comment = () => {
    return (
        <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 w-full">
                <div className="">
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
                    Leave a reply:
                    </h1>
                    <p className="mt-1 text-gray-600">
                    Your email address will not be published.
                    </p>
                </div>

                <div className="mt-12">
                    <form>
                        <div className="grid gap-4 lg:gap-6">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                                <div>
                                    <label for="hs-firstname-hire-us-2" className="block mb-2 text-sm text-gray-700 font-medium">First Name</label>
                                    <input type="text" name="hs-firstname-hire-us-2" id="hs-firstname-hire-us-2" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                                </div>

                            <div>
                                <label for="hs-work-email-hire-us-2" className="block mb-2 text-sm text-gray-700 font-medium">Email</label>
                                <input type="email" name="hs-work-email-hire-us-2" id="hs-work-email-hire-us-2" autocomplete="email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                            </div>

                                <div>
                                    <label for="phone" className="block mb-2 text-sm text-gray-700 font-medium">Phone</label>
                                    <input type="tel" name="phone" id="phone" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                                </div>
                            </div>                            

                            <div>
                                <label for="hs-about-hire-us-2" className="block mb-2 text-sm text-gray-700 font-medium">Message</label>
                                <textarea id="hs-about-hire-us-2" name="hs-about-hire-us-2" rows="6" className="resize-none py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"></textarea>
                            </div>
                        </div>

                        <div className="mt-6 grid">
                            <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Send message</button>
                        </div>

                       
                    </form>
                </div>
        </div>
    );
}

export default Comment;
