type ContentType = {
    id?: number | null;
    summary: string;
    details: string;
};

export interface AccordionProps {
    contents: ContentType[];
    linkMap?: Record<string, unknown> | null;
}

export interface AccordionGroupProps {
    content: ContentType;
    expanded: string | null;
    setExpanded: Function;
    linkMap?: Record<string, unknown> | null;
}
