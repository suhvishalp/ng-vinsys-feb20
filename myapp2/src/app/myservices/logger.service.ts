import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class LoggerService{

    //some data

    public log(message:string){
        console.log('Message : ' + message)
    }

}