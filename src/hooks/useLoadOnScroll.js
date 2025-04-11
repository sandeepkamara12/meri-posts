import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';

const useLoadOnScroll = ({hasMore, loading, param, totalPages, endPoint}) => {
    const observer = useRef(null);
    const loaderRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (loading || !hasMore) return;
        
        if (observer.current) observer.current.disconnect(); // Disconnect previous observer
        
        observer.current = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    // if (param?.page <= (totalPages - 1)) { 
                        dispatch(endPoint({param}));
                    // }
                }
            },
            { threshold: 1.0 }
        );

        if (loaderRef?.current) observer.current.observe(loaderRef?.current);
        return () => {
            if (observer.current) observer.current.disconnect();
        };
    }, [loading, hasMore]);
    return loaderRef;
}

export default useLoadOnScroll
