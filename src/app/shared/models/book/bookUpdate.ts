export interface BookUpdate {
    Id: number;
    Title: string;
    Desciption: string;
    DocumentEncode: string;
    CategoryId: number;
    AuthorId: number;
    YearPublish: Date | string;
    Price: number;
    Page: number;
    Isbn: number;
}