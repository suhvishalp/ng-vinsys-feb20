import { ErrorHandler } from '@angular/core';

export class MyErrorHandler implements ErrorHandler {
  handleError(error: any): void {
     console.log('this is my own ErrorHandler, handling the error globally')
      console.log(error)
      let errorMessage = ''
     
      if (error.status >= 400 && error.status < 500) {
        errorMessage = error.message;
         throw new Error(errorMessage)
      } else {
        alert('something went wrong..Server error')
      }
      
    }   
}