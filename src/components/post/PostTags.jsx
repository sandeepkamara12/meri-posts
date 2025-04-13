import React from 'react';
import { Link } from 'react-router-dom';

const PostTags = ({ blog}) => {
    return (
        <div className="flex flex-wrap items-center gap-1 mb-4">
            {blog?.tags?.map((tag) => (
                <Link
                    key={tag}
                    className="capitalize cursor-pointer transition hover:text-white hover:bg-blue-600 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-neutral-200"
                    to={`/tag-posts?tag=${tag}`}
                >
                    {tag}
                </Link>
            ))}
        </div>
    );
}

export default PostTags;
