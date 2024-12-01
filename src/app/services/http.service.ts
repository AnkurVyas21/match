import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map, Observable } from "rxjs";


@Injectable({
    providedIn:'root'
})

export class httpService {

    constructor( private http : HttpClient)
    {

    }

    get(APIparams:any):Observable <any>
    {
 //this variable will be used to hold the absoulate URL of API
 let apiUrl = '';

 // If the API slug passed in service then, we'll get the full API URL by this function
 if (APIparams.apiKey) apiUrl = this.getAPIUrl(APIparams.apiKey);

 // Appending The URI in APIs URL
 if (APIparams.uri) apiUrl = apiUrl + '?' + APIparams.uri;

 return this.http.get(apiUrl).pipe(map((res) => {
   return res;
 }));
    }


    post(APIparams:any): Observable<any> {
        //this variable will be used to hold the absoulate URL of API
        let apiUrl = '';
        // If the API slug passed in service then, we'll get the full API URL by this function
        if (APIparams.apiKey) apiUrl = this.getAPIUrl(APIparams.apiKey);
        // Appending The URI in APIs URL
        if (APIparams.uri) apiUrl = apiUrl + '?' + APIparams.uri;
    
        // Validating an HTTP POST BODY
        if (!APIparams.postBody) APIparams.postBody = {};
       
        let checkKeyvalue = this.checkBlankValue(APIparams.postBody);
      
        return this.http.post(apiUrl, checkKeyvalue /*,headers*/).pipe(map((res) => {
          return res;
    
        }));
      }



    
  getAPIUrl(apiSlug: string) {
    // let checkAPI = apiSlug.split('/');
    // let checkAPINew = apiSlug.substr(apiSlug.indexOf('/')).replace('/', '');

    let apiUrl = '';
    if (apiSlug)
      apiUrl =
        'localhost:3000' +
        '/' +
        apiSlug;
    return apiUrl;

  }

  checkBlankValue(recordForm:any) {
    console.log('---',recordForm)
    for (var propName in recordForm) {
      if (
        recordForm[propName] === null ||
        recordForm[propName] === undefined ||
        recordForm[propName] === ''
      ) {
        delete recordForm[propName];
      }
    }
    return recordForm;
  }
   
}