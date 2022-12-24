import React, { useEffect, useState } from "react";
import { SegmentedControlProps } from "./types";

const SegmentedControl = ({ data }: SegmentedControlProps): JSX.Element => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    useEffect(() => {
        if (data && data.length) {
            setSelectedId(data[0].id);
        }
    }, []);

    const handleOnClick = (newSelectedId: number | null) => {
        setSelectedId(newSelectedId);
    };

    if (!data || !data.length) {
        return <p>There are no data.</p>;
    }

    return (
        <div className="c-Segmented-control">
            <div className="c-Segmented-control__Tabs c-Tabs">
                {data.map((oneData) => (
                    <div
                        key={oneData.id}
                        className={`c-Tabs__Tab c-Tab ${
                            selectedId === oneData.id ? "c-Tab--selected" : ""
                        }`}
                        onClick={() => handleOnClick(oneData.id)}
                    >
                        <h1>{oneData.heading}</h1>
                    </div>
                ))}
            </div>
            <div className="c-Segmented-control__Contents c-Contents">
                {data.map((oneData) => (
                    <div
                        key={oneData.id}
                        className={`c-Contents__Content c-Content ${
                            selectedId === oneData.id
                                ? "c-Content--selected"
                                : ""
                        }`}
                    >
                        {oneData.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SegmentedControl;
