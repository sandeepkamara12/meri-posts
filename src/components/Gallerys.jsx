import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Gallerys = () => {
  const images = [
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
      caption: "Sunset in the hills"
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
      caption: "Sunset in the hills"
    },
    {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        caption: "Sunset in the hills"
    },
    {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
      caption: "Sunset in the hills"
    },
    {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
        caption: "Sunset in the hills"
    },
    {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        caption: "Sunset in the hills"
    },
    {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        caption: "Sunset in the hills"
    },
    {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
      caption: "Sunset in the hills"
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
      caption: "Sunset in the hills"
    },
    {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        caption: "Sunset in the hills"
    },
  ];
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const lightboxImgRef = useRef(null);
  const dragOffset = useRef({ x: 0, y: 0 });

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = () =>
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const showNext = () =>
    setLightboxIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  const handleKeyDown = (e) => {
    if (lightboxIndex !== null) {
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "Escape") closeLightbox();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  // Zoom + Drag functionality
  const handleMouseDown = (e) => {
    const img = lightboxImgRef.current;
    img.style.cursor = "grabbing";
    img.style.transition = "none";

    dragOffset.current = {
      x: e.clientX - img.offsetLeft,
      y: e.clientY - img.offsetTop
    };

    const handleMouseMove = (e) => {
      img.style.left = `${e.clientX - dragOffset.current.x}px`;
      img.style.top = `${e.clientY - dragOffset.current.y}px`;
    };

    const handleMouseUp = () => {
      img.style.cursor = "grab";
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <>
      <blockquote className="text-center p-4 sm:px-7 my-10">
        <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-neutral-200">
          To say that switching to Preline has been life-changing is an
          understatement. My business has tripled and I got my life back.
        </p>
        <p className="mt-5 text-gray-800 dark:text-neutral-200">
          Nicole Grazioso
        </p>
      </blockquote>

      <div className="gallery-wrapper">
            {images.map((img, index) => (
                <>
                  <Link
                    className="group block relative overflow-hidden rounded-lg mb-4"
                    to="#"
                    key={index}
                  >
                    <img
                      src={img.src}
                      alt={img.caption}
                      loading="lazy"
                      onClick={() => openLightbox(index)}
                      className="lightbox-img w-full grid-img transition-transform group-hover:scale-110 cursor-pointer"
                    />
                    <div className="absolute bottom-2 end-2 opacity-0 group-hover:opacity-100 transition">
                      <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg">
                        <svg
                          className="shrink-0 size-3"
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
                        <span className="text-xs">View</span>
                      </div>
                    </div>
                  </Link>
                </>
              ))}
      </div>

     

      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close-btn">&times;</span>

          <img
            src={images[lightboxIndex].src}
            alt="lightbox-img"
            ref={lightboxImgRef}
            onMouseDown={handleMouseDown}
            onClick={(e) => e.stopPropagation()}
            className="lightbox-img"
            style={{
              position: "relative",
              maxWidth: "90%",
              maxHeight: "80vh",
              cursor: "grab"
            }}
          />

          <p className="caption">{images[lightboxIndex].caption}</p>

          <button
            className="nav-btn left"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            className="nav-btn right"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      )}
      {/* {lightboxIndex !== null && (
                <div className="lightbox" onClick={closeLightbox}>
                    <span className="close-btn">&times;</span>
                    <img
                        src={images[lightboxIndex]}
                        alt="lightbox-img"
                        className="lightbox-img"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <p className="caption">{images[lightboxIndex].caption}</p>
                    <button className="nav-btn left" onClick={(e) => { e.stopPropagation(); showPrev(); }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button className="nav-btn right" onClick={(e) => { e.stopPropagation(); showNext(); }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            )} */}
    </>
  );
};

export default Gallerys;
