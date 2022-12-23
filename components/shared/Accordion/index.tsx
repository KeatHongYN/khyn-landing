/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { AccordionProps, AccordionGroupProps } from "./types";
import useReplaceLinksAndEmailInStr from "../../../hooks/useReplaceLinksAndEmailInStr";

const AccordionGroup = ({
    content,
    expanded,
    setExpanded,
    linkMap
}: AccordionGroupProps): JSX.Element => {
    const [height, setHeight] = useState(0);
    const ref = useRef<any>(null);

    const isTargettedGroup = expanded === content.id;
    useEffect(() => {
        const changeHeight = () => {
            if (ref.current) {
                if (isTargettedGroup) {
                    setHeight(ref.current.offsetHeight);
                } else {
                    setHeight(0);
                }
            }
        };
        changeHeight();
        window.addEventListener("resize", changeHeight);
        return () => window.removeEventListener("resize", changeHeight);
    }, [expanded, isTargettedGroup]);

    const handleOnClick = () => {
        setExpanded((prevValue: number | null) => {
            if (prevValue !== null && prevValue === content.id) {
                return null;
            }
            return content.id;
        });
    };

    const formattedDetails = useReplaceLinksAndEmailInStr(content.details, {
        ...linkMap
    });

    return (
        <div className="c-Accordion-group" onClick={handleOnClick}>
            <div className="c-Accordion-group__Summary c-Summary">
                <h1>{content.summary}</h1>
                <Icon
                    className={`c-Summary__Icon ${
                        isTargettedGroup ? "c-Summary__Icon--expanded" : ""
                    }`}
                    icon="dashicons:arrow-down-alt2"
                />
            </div>
            <div
                style={{ height }}
                className="c-Accordion-group__Detail c-Detail"
            >
                <p ref={ref}>{formattedDetails}</p>
            </div>
        </div>
    );
};

const Accordion = ({ contents, linkMap }: AccordionProps): JSX.Element => {
    const [expanded, setExpanded] = useState<string | null>(null);

    return (
        <div className="c-Accordion">
            {contents && contents.length ? (
                contents.map((content, index) => {
                    content.id = index;
                    return (
                        <AccordionGroup
                            key={index}
                            expanded={expanded}
                            setExpanded={setExpanded}
                            content={content}
                            linkMap={linkMap}
                        />
                    );
                })
            ) : (
                <p>There is no content</p>
            )}
        </div>
    );
};

export default Accordion;
