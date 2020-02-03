import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    public companyName:string = 'Knowledge And Human Development Authority';
    public imageUrl:string = '/assets/logo1.jpg'
    public isActive:boolean = true;

    constructor(){
        setTimeout(() => {
            this.companyName = 'KHDA'
            this.isActive = false;
        }, 5000);
    }

    handleClick(){
        console.log('Button is Clicked...')
    }
}