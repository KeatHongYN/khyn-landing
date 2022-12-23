export type PictureListType = Array<{
    fileId: number;
    filePath: string;
}>;

export interface CarouselProps {
    pictureList: PictureListType;
}
