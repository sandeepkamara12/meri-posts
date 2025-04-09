import React, { useState } from 'react';
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Gallerys = () => {
    const images = [
        {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            original: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            width: 320,
            height: 212,
            // tags: [
            //   { value: "Nature", title: "Nature" },
            //   { value: "Flora", title: "Flora" },
            // ],
            caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            original: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            width: 320,
            height: 212,
            caption: "Boats (Jeshu John - designerspics.com)",
        },
        {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            original: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            width: 320,
            height: 212,
            caption: "Color Pencils (Jeshu John - designerspics.com)",
        },
        {
            src: "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg",
            original: "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg",
            width: 320,
            height: 212,
            caption: "Red Apples with other Red Fruit (foodiesfeed.com)",
        },
        {
            src: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
            original: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
            width: 320,
            height: 212,
            caption: "37H (gratispgraphy.com)",
        },
        {
            src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
            original: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
            width: 320,
            height: 212,
            // tags: [{ value: "Nature", title: "Nature" }],
            caption: "8H (gratisography.com)",
        },
        {
            src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
            original: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
            width: 320,
            height: 212,
            caption: "286H (gratisography.com)",
        },
        {
            src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
            original: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
            width: 320,
            height: 212,
            // tags: [{ value: "People", title: "People" }],
            caption: "315H (gratisography.com)",
        }
    ];
    const [index, setIndex] = useState(-1);

    const currentImage = images[index];
    const nextIndex = (index + 1) % images.length;
    const nextImage = images[nextIndex] || currentImage;
    const prevIndex = (index + images.length - 1) % images.length;
    const prevImage = images[prevIndex] || currentImage;

    const handleClick = (index, item) => setIndex(index);
    const handleClose = () => setIndex(-1);
    const handleMovePrev = () => setIndex(prevIndex);
    const handleMoveNext = () => setIndex(nextIndex);
    return (
        <>
            <blockquote className="text-center p-4 sm:px-7 my-10">
                <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-neutral-200">
                    To say that switching to Preline has been life-changing is an understatement. My business has tripled and I got my life back.
                </p>
                <p className="mt-5 text-gray-800 dark:text-neutral-200">
                    Nicole Grazioso
                </p>
            </blockquote>
                <Gallery
                    images={images}
                    onClick={handleClick}
                    enableImageSelection={false}
                />
                {!!currentImage && (
                    /* @ts-ignore */
                    <Lightbox
                        mainSrc={currentImage.original}
                        imageTitle={currentImage.caption}
                        mainSrcThumbnail={currentImage.src}
                        nextSrc={nextImage.original}
                        nextSrcThumbnail={nextImage.src}
                        prevSrc={prevImage.original}
                        prevSrcThumbnail={prevImage.src}
                        onCloseRequest={handleClose}
                        onMovePrevRequest={handleMovePrev}
                        onMoveNextRequest={handleMoveNext}
                    />
                )}
          
        </>
    );
}

export default Gallerys;
