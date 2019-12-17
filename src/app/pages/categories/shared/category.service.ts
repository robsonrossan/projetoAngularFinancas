import { Injectable } from '@angular/core';
import { Observable, throwError, from} from "rxjs";
import { map, catchError } from "rxjs/operators";
import {Category} from "./category.model";
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiPath: string = "api/categories";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]>{

  return this.http.get(this.apiPath).pipe(
    catchError(this.handleError),
    map(this.JsonDataToCategories)
  )
}

getById(id: number): Observable<Category> {

  const url = `${this.apiPath}/${id}`;

  return this.http.get(url).pipe(
    catchError(this.handleError),
    map(this.JsonDataToCategory)
  )
}

create(category: Category): Observable<Category> {
  return this.http.post(this.apiPath, category).pipe(
    catchError(this.handleError),
    map(this.JsonDataToCategory)
  )
}

update(category: Category): Observable<Category> {
  const url = `${this.apiPath}/${category.id}`;
  return this.http.put(url, category).pipe(
    catchError(this.handleError),
    map(() => category),
    catchError(this.handleError)
  )
}

delete(id: number): Observable<any> {
  const url = `${this.apiPath}/${id}`;
  return this.http.delete(url).pipe(
    map(() => null),
    catchError(this.handleError)
  )
}

  private JsonDataToCategories(JsonData: any[]): Category[]{
    const categories: Category[] = [];
    JsonData.forEach(element => categories.push(element as Category));
    return categories;
  }

  /**
   * Converte any no Objeto Category
   */
  private JsonDataToCategory(jsonData: any): Category{
    return jsonData as Category;
  }

  private handleError (error: any): Observable<any>{
    console.log("Erro na Requisição: ", error );
    return throwError(error);
  }
}