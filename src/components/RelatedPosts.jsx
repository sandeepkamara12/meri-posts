import React from 'react';
import Post from './Post';

const RelatedPosts = ({ relatedPosts }) => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-4">
            {relatedPosts && relatedPosts?.length > 0 && (
                <div className="col-span-1 md:col-span-3 lg:col-span-3 md:mb-4">
                    <h2 className="text-xl font-bold md:text-2xl md:leading-tight dark:text-white">
                        Related Posts
                    </h2>
                    <p className=" mt-1 text-sm text-gray-500 dark:text-neutral-500">
                        See how game-changing companies are making the most of every
                        engagement with Preline.
                    </p>
                </div>
            )}

            {relatedPosts &&
                relatedPosts
                    ?.slice(0, 3)
                    .map((post, index) => (
                        <Post
                            key={index}
                            layout="vertical"
                            alignment="vertical"
                            data={post}
                        />
                    ))}
        </div>
    );
}

export default RelatedPosts;
