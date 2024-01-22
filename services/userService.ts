import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiResponse } from '../models/ApiResponse';

@Injectable({
    providedIn: 'root',
})

export class UserService {
    private apiUrl = 'https://api.slingacademy.com/v1/sample-data/users/1';

    constructor(private http: HttpClient) { }

    getUserById(): Observable<ApiResponse> {
        const url = `${this.apiUrl}`;
        return this.http.get<ApiResponse>(url)
            .pipe(
                catchError(error => {
                    console.error('Error fetching user data:', error);
                    return throwError(error);
                })
            );
    }
}
