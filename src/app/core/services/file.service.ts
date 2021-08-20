import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class FileService {

    constructor() { }

    convertBase64(file: File): Promise<any> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result?.toString());
            reader.onerror = error => reject(error);
        });
    }

}