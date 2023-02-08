export interface IProduct {
    _id: string;
    description: string;
    images: string[];
    slug: string;
    tags: string[];
    title: string;
    type: IType;
}


export type IType = 'cards';
