export interface Book {
    description: string;
    documentEncode: string;
    categoryId: number;
    authorId: number;
    yearPublish: Date | string;
    price: number;
    page: number;
    isbn: number;
}
