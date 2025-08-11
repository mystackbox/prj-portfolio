import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private  baseUrl = environment.projectsUrl;

  constructor(private _http: HttpClient) { }

  getProjects() {
    return this._http.get(this.baseUrl);
  }


}
