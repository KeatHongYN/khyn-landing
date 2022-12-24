type SegmentedControlDataType = {
    id: number;
    heading: string;
    content: any;
};

export interface SegmentedControlProps {
    data: Array<SegmentedControlDataType>;
}
