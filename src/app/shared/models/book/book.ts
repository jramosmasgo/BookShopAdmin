export interface Book {
    title: string;
    description: string;
    stock: number;
    photo: string;
    categoryId: number;
    authorId: number;
    yearPublish: Date | string;
    price: number;
    page: number;
    isbn: number;
}
