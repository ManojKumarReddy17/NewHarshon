import {RouterModule, Routes } from '@angular/router';



import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { PageComponent } from './page/page.component';

import { WebinarrecordingComponent } from '../webinarrecording/webinarrecording.component';
import { AboutComponent } from './about/about.component';

import { OfficesComponent } from './offices/offices.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';

import { AwsComponent } from './aws/aws.component';
import { DotnetComponent } from './dotnet/dotnet.component';
import { MysqlComponent } from './mysql/mysql.component';
import { AngularComponent } from './angular/angular.component';
import { MssqlComponent } from './mssql/mssql.component';

import { AzureComponent } from './azure/azure.component';
import { PythonComponent } from './python/python.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { ReactComponent } from './react/react.component';
import { DevopsComponent } from './devops/devops.component';

import { RequestdemoComponent } from './requestdemo/requestdemo.component';
import { DistributormanagementComponent } from './distributormanagement/distributormanagement.component';
//import {jew}
export const routes: Routes = [
    {
        path: '', // Distribution management route
        component: AppComponent,
        children:
        [
            {path:'',component:PageComponent, pathMatch: 'full'},
            // {path:'',redirectTo:'home',pathMatch: 'full'},
            
            {path:'home',component:HomeComponent,pathMatch: 'full'},
            
             {path:'webrecording',component:WebinarrecordingComponent,pathMatch: 'full'},
            {path:'about',component:AboutComponent,pathMatch: 'full'},
         
            {path:'office',component:OfficesComponent,pathMatch: 'full'},
             {path:'leadership',component:LeadershipComponent,pathMatch: 'full'},
             {path:'career',component:CareersComponent,pathMatch: 'full'},
            {path:'contact',component:ContactComponent,pathMatch: 'full'},
            {path:'softwaredevelopment',component:SoftwareDevelopmentComponent,pathMatch: 'full'},
            {path:'requestdemo',component:RequestdemoComponent,pathMatch: 'full'},
           
                  { path: 'aws', component: AwsComponent,pathMatch: 'full' },
                  { path: 'Azure', component:AzureComponent ,pathMatch: 'full' },
                  { path: 'dotnet', component: DotnetComponent ,pathMatch: 'full'},
                  { path: 'mysql', component: MysqlComponent ,pathMatch: 'full'},
                  { path: 'angular', component: AngularComponent,pathMatch: 'full' },
                  { path: 'mssql', component: MssqlComponent,pathMatch: 'full' },
                  {path:'python', component:PythonComponent,pathMatch: 'full'},
                  {path:'react',component:ReactComponent,pathMatch: 'full'},
                  {path:'devops',component:DevopsComponent,pathMatch: 'full'},
                  // {path:'crm',component:CrmComponent,pathMatch: 'full'} ,
                  {path:'distibutor',component:DistributormanagementComponent},
                  {path:'jewelery',component:JewelleryComponent},
                  {path:'jewlery',component:JewelleryComponent,pathMatch: 'full'},
                
                       
             
        ]
      },
     
       
 
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }


