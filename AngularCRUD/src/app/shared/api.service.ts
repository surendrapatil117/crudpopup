import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{map}from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postEmploayee(edata:any)
  {
    return this.http.post<any>("http://localhost:3000/posts",edata).
    pipe(map((res:any)=>{
    return res;
    }))

  }
  getAllEmploayee()
  {
    return this.http.get<any>("http://localhost:3000/posts").
    pipe(map((res:any)=>{
    return res;
    }))

  }
  updatemployee(data:any,id:number)
  {
    return this.http.put<any>("http://localhost:3000/posts/"+id,data).
    pipe(map((res=>{
      return res;
    })))

  }

  deleteemployee(id:number)
  {
    return this.http.delete<any>("http://localhost:3000/posts/"+id).
    pipe(map(res=>{
      return res;
    }))
  }
}
