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

  getProjects(): Observable<Project[]> {
    /**
     * Fetches data from the projects local JSON API.
     * @param id The unique identifier for the item.
     * @returns An observable array of projects list | API Server error.
     */
    return this._http.get<Project[]>(this.apiUrl).pipe(
      catchError((err) => {
        console.error('API error', err);
        return throwError(() => err);
      })
    );
  }

   getFeaturedProject(): Observable<Project> {
    /**
     * Fetches data from the projects local JSON API.
     * @returns An observable of the featured project | API Server error.
     */
    return this._http.get<Project[]>(this.apiUrl).pipe(
      map(
        (projects) => {
          return projects[projects.length - 1];
        }
      ),
      catchError((err) => {
        console.error('API error', err);
        return throwError(() => err);
      })
    );
  }

  getSelectedProject(_id?: number): Observable<Project> {
    /**
     * Fetches single record of project with id.
     * @param id The unique identifier for the project.
     * @returns An observable object of project | API Server error.
     */
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
