import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CarouselProps } from "./types";

const Carousel = ({ pictureList }: CarouselProps): JSX.Element | null => {
    const [selectedFileId, setSelectedFileId] = useState<number | null>(null);

    useEffect(() => {
        if (pictureList && pictureList.length) {
            setSelectedFileId(pictureList[0].fileId);
        }

        const slideInterval = setInterval(() => {
            setSelectedFileId((prevValue) =>
                prevValue === pictureList.length ? 1 : prevValue! + 1
            );
        }, 7000);

        return () => clearInterval(slideInterval);
    }, []);

    if (!pictureList || !pictureList.length) {
        return <p>No pictures inputted.</p>;
    }

    const handleIndicatorOnClick = (newSelectedFileId: number | null) => {
        setSelectedFileId(newSelectedFileId);
    };

    return (
        <div className="c-Carousel">
            <div className="c-Carousel__Img-container c-Img-container">
                {pictureList.map((onePicture) => (
                    <Image
                        className={`c-Img-container__Img c-Img ${
                            selectedFileId === onePicture.fileId
                                ? "c-Img--selected"
                                : ""
                        }`}
                        src={onePicture.filePath}
                        width={350} // the real source comes from _carousel.scss
                        height={350}
                        alt="picture"
                        key={`img-${onePicture.fileId}`}
                        priority={onePicture.fileId === 1}
                    />
                ))}
            </div>

            <div className="c-Carousel__Indicators">
                {pictureList.map((onePicture) => (
                    <span
                        className={`c-Indicators__Tab c-Tab ${
                            selectedFileId === onePicture.fileId
                                ? "c-Tab--selected"
                                : ""
                        }`}
                        onClick={() =>
                            handleIndicatorOnClick(onePicture.fileId)
                        }
                        key={`indicator-${onePicture.fileId}}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
