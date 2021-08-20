export interface BookList {
    Id: number;
    Title: string;
    Desciption: string;
    Photo: string;
    CategoryId: number;
    AuthorId: number;
    YearPublish: Date | string;
    Price: number;
    Page: number;
    Isbn: number;
    //Category: GetAllCategoriesViewModel;
    //Author: GetAllAuthorsViewModel;
}