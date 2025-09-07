import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { IProject as IProject } from '../../../shared/models/project.model';

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
  getProjects(): Observable<IProject[]> {
    return this._http.get<IProject[]>(this.apiUrl).pipe(
      map(
        (projects) => projects
      ),
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

   /**
   * Fetches single record of project with id.
   * @param id The unique identifier for the project.
   * @returns An observable type project object  | API Server error.
   */
  getSelectedProject(_id?: number): Observable<IProject> {
    return this._http.get<IProject[]>(this.apiUrl).pipe(
      map(
        (projects) => projects.find((project) => project.id === _id) as IProject
      ),

      catchError((err) => {
        console.error('API error', err);
        return throwError(() => err);
      })
    );
  }
}
