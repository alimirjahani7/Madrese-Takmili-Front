import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private  http: HttpClient) {
  }

  getAllUsers() {
    return this.http.get('https://localhost:44310/api/user', {observe: 'response'}).pipe(map(data => data.body));
  }

  getOneUser(id) {
    return this.http.get('https://localhost:44310/api/user/' + id.toString(), {observe: 'response'}).pipe(map(data => data.body));
  }

  login(user){
    return this.http.post('https://localhost:44310/api/user/login', user, {observe: 'response'}).pipe(map(data => data.body));
  }

  signUpUser(user) {
    return this.http.post('https://localhost:44310/api/user', user, {observe: 'response'}).pipe(map(data => data.body));
  }

  getAllPosts() {
    return this.http.get('https://localhost:44310/api/post', {observe: 'response'}).pipe(map(data => data.body));
  }

  getOnePost(id) {
    return this.http.get('https://localhost:44310/api/post' + id.toString(), {observe: 'response'}).pipe(map(data => data.body));
  }

  postPost(post) {
    return this.http.post('https://localhost:44310/api/post', post, {observe: 'response'}).pipe(map(data => data.body));
  }

  getOnePostComments(id) {
    return this.http.get('https://localhost:44310/api/post' + id.toString() + '/comments', {observe: 'response'})
      .pipe(map(data => data.body));
  }

  getAllLikes() {
    return this.http.get('https://localhost:44310/api/like', {observe: 'response'}).pipe(map(data => data.body));
  }

  getOnePostNumberOfLikes(id) {
    return this.http.get('https://localhost:44310/api/like' + id.toString() + '/numberOfLikes', {observe: 'response'})
      .pipe(map(data => data.body));
  }

  getOnePostLikes(id) {
    return this.http.get('https://localhost:44310/api/like' + id.toString() + '/likes', {observe: 'response'})
      .pipe(map(data => data.body));
  }

  postLikes(like) {
    return this.http.post('https://localhost:44310/api/like', like, {observe: 'response'})
      .pipe(map(data => data.body));
  }

  getAllComments() {
    return this.http.get('https://localhost:44310/api/comment', {observe: 'response'}).pipe(map(data => data.body));
  }

  getOnePostComment(id) {
    return this.http.get('https://localhost:44310/api/comment' + id.toString(), {observe: 'response'}).pipe(map(data => data.body));
  }

  sendComment(comment) {
    return this.http.post('https://localhost:44310/api/comment', comment, {observe: 'response'})
      .pipe(map(data => data.body));
  }

  clearDatabase() {
    this.http.get('https://localhost:44310/api/values', {observe: 'response'}).subscribe(x => {
      console.log('clear DataBase');
    });

  }

}
