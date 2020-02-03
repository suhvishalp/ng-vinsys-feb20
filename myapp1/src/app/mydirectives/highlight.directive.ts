import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector:'[app-highlight]'
})
export class HighlightDirective{

    @HostBinding('style.backgroundColor') bgColor = 'lightblue';

    @HostListener('mouseover')
    changeColorOnOver(){
        this.bgColor = 'red'
    }

    @HostListener('mouseout')
    changeColorOnOut(){
        this.bgColor = 'lightblue'
    }

    @HostListener('click')
    handleClick(){
        alert('you clicked me')
    }

    // constructor(private eleRef:ElementRef){
    //     console.log('HighLightDirective object is created')
    //     console.log(this.eleRef)
    //     this.eleRef.nativeElement.style.backgroundColor='yellow'
       
    // }
}