export interface AuthorGetById {
    id: string;
    createdBy: string;
    lastModifiedBy?: string;
    created: Date;
    lastModified?: Date;
    name: string;
    bibliography: string;
    gender: string;
    photo?: string;
    dateBirth: Date;
}