import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError } from 'rxjs/operators'
import { Subject, throwError } from 'rxjs';
 
@Injectable({providedIn: 'root'})
export class PostsService {
    error = new Subject<string>();
    
    constructor(private http: HttpClient, ){}

    createAndStorePost(title: string, content: string){
        //...
        // Send Http request
       const postData: Post  = {title: title, content: content}
       return this.http
          .post<{name: string}>(
            'https://ng-complete-guide-507e2.firebaseio.com/posts.json',
            postData
          )
          .subscribe(responseData => {
            console.log(responseData);
          }, error =>{
              this.error.next(error.message);
          });
    }

    fetchPosts(){
        return this.http
          .get<{[key:string]: Post}>(
              'https://ng-complete-guide-507e2.firebaseio.com/posts.json',
              {
                  headers: new HttpHeaders({"Custom-header": "Hello"}),
                  params: new HttpParams().set('print', 'pretty')
              }
              )
          .pipe(
              map((responseData)=>{
                const postsArray: Post[] = [];
                for(const key in responseData){
                  postsArray.push({...responseData[key], id: key});
                }
                return postsArray;
              })/*,
              catchError(errorRes => {
                  return throwError(errorRes);
              })*/
          );
    }

    deletePost(){
        return this.http
          .delete('https://ng-complete-guide-507e2.firebaseio.com/posts.json');
    }
}