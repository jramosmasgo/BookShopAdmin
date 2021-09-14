import { Category } from '../category/category';
import { AuthorGetById } from '../author/author-getById';

export interface BookGetAll {
    id: number;
    title: string;
    desciption: string;
    photo: string;
    categoryId: number;
    authorId: number;
    yearPublish: Date;
    price: number;
    page: number;
    isbn: number;
    category?: Category;
    author?: AuthorGetById;
}