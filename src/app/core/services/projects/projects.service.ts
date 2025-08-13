import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Project } from '../../../shared/models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private apiUrl = environment.projectsApi;

  constructor(private _http: HttpClient) {}

     /**
     * Fetches data from the projects local JSON API.
     * @returns An observable of type projects[] | API Server error.
     */
  getProjects(): Observable<Project[]> {
    return this._http.get<Project[]>(this.apiUrl).pipe(
      catchError((err) => {
        console.error('API error', err);
        return throwError(() => err);
      })
    );
  }

  /**
   * Fetches data from the projects local JSON API.
   * @returns An observable of type project object | API Server error.
   */
  getFeaturedProject(): Observable<Project> {
    return this._http.get<Project[]>(this.apiUrl).pipe(
      map((projects) => {
        return projects[projects.length - 1];
      }),
      catchError((err) => {
        console.error('API error', err);
        return throwError(() => err);
      })
    );
  }

  /**
   * Fetches single record of project with id.
   * @param id The unique identifier for the project.
   * @returns An observable type project object  | API Server error.
   */
  getSelectedProject(_id?: number): Observable<Project> {
    return this._http.get<Project[]>(this.apiUrl).pipe(
      map(
        (projects) => projects.find((project) => project.id === _id) as Project
      ),

      catchError((err) => {
        console.error('API error', err);
        return throwError(() => err);
      })
    );
  }
}
