import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TESTIMONIAL_BG_META } from "../../../config/enum";
import { TestimonialsProps } from "./types";

const Testimonials = ({ testimonialList }: TestimonialsProps) => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    useEffect(() => {
        if (testimonialList && testimonialList.length) {
            setSelectedId(testimonialList[0].id);
        }
    }, []);

    const handleIndicatorOnClick = (newSelectedId: number | null) => {
        setSelectedId(newSelectedId);
    };

    if (!testimonialList || !testimonialList.length) {
        return <p>No data.</p>;
    }

    return (
        <div className="c-Testimonials">
            <div className="c-Testimonials__Testimonial">
                {testimonialList.map((oneTestimonial) => (
                    <div
                        key={oneTestimonial.id}
                        className={`c-Testimonial__Container c-Container c-Container--${
                            TESTIMONIAL_BG_META[oneTestimonial.bgVariation]
                                .classSuffix
                        } ${
                            selectedId === oneTestimonial.id
                                ? "c-Container--selected"
                                : ""
                        }`}
                    >
                        <div className="c-Container__Left c-Left">
                            <Image
                                width={150}
                                height={150}
                                src={oneTestimonial.avatarFilePath}
                                alt="avatar"
                                unoptimized
                            />
                        </div>
                        <blockquote className="c-Container__Right c-Right">
                            <p className="c-Right__Text c-Text">
                                {oneTestimonial.text}
                            </p>
                            <div className="c-Right__Meta c-Meta">
                                <h2>{oneTestimonial.name}</h2>
                                <p>{oneTestimonial.position}</p>
                            </div>
                        </blockquote>
                    </div>
                ))}
            </div>
            <div className="c-Testimonials__Indicators c-Indicators">
                {testimonialList.map((oneTestimonial) => (
                    <span
                        className={`c-Indicators__Tab c-Tab ${
                            selectedId === oneTestimonial.id
                                ? "c-Tab--selected"
                                : ""
                        }`}
                        onClick={() =>
                            handleIndicatorOnClick(oneTestimonial.id)
                        }
                        key={`indicator-${oneTestimonial.id}}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
