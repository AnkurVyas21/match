import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { Form1Component } from "./form1/form1.component";
import { Form3Component } from "./form3/form3.component";
import { Form2Component } from "./form2/form2.component";

const routes:Routes=[
    {
        path:'home',component:HomeComponent
    },
    {
        path:'form1', component:Form1Component
    },
    {
        path:'form2', component:Form2Component
    },
    {
        path:'form3', component:Form3Component
    },
    {
        path:'**', component:HomeComponent
    }
]


@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})

export class appRoutingModule{}