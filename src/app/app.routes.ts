import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Register } from '../register/register';
import { Userhome } from '../userhome/userhome';
import { Adminhome } from './adminhome/adminhome';

export const routes: Routes = [
    {path:'register',component:Register},
    {path:'userhome',component:Userhome},
    {path:'adminhome',component:Adminhome}
];
