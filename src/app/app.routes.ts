import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Register } from './register/register';
import { Userhome } from './userhome/userhome';
import { Adminhome } from './adminhome/adminhome';
import { Login } from './login/login';
import { Cart } from './cart/cart';
import { Orders } from './orders/orders';
import { Return } from './return/return';

export const routes: Routes = [
    {path:'register',component:Register},
    {path:'userhome',component:Userhome},
    {path:'adminhome',component:Adminhome},
    {path:'login',component:Login},
    {path:'cart',component:Cart},
    {path:'orders',component:Orders},
    {path:'return',component:Return},

];
