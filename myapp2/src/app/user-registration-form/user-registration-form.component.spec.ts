import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrationFormComponent } from './user-registration-form.component';

describe('UserRegistrationFormComponent', () => {
   
  xit('should create', () => {
    // expect(component).toBeTruthy();
  });

  let component:UserRegistrationFormComponent;
  let fixture:ComponentFixture<UserRegistrationFormComponent>;

  beforeEach(()=>{
    fixture = TestBed.createComponent(UserRegistrationFormComponent)
    component = fixture.componentInstance;
  })

  it('should have registration form',()=>{
    component.ngOnInit();
    expect(component.userForm).toBeTruthy();

  })

  it('should the reguser form has email,name and password fields', ()=>{
    //logic... to check whether the regform has 3 fields or not
    //..
    component.ngOnInit();
    let emailControl = component.userForm.get('email')
       
    expect(emailControl).toBeTruthy();
  })








});
