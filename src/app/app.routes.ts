import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { LoginComponent } from './components/login/login/login.component';
import { NotFoundComponent } from './components/notFound/not-found/not-found.component';
import { SignUpComponent } from './components/signUp/sign-up/sign-up.component';
import { AuthComponent } from './layout/auth/auth/auth.component';
import { BlankComponent } from './layout/blank/blank/blank.component';
import { notAuthrizGuard } from './shared/gaurds/notAuth/not-authriz.guard';
import { authrizGuard } from './shared/gaurds/Auth/authriz.guard';

export const routes: Routes = [

    {
        
        path:'',component:AuthComponent,title:'Auth',
        canActivate:[notAuthrizGuard],
        children:[ 
            {path:'',redirectTo:'login',pathMatch:'full'},
            {path:'login',component:LoginComponent ,title:'Login'},
            {path:'signup',component:SignUpComponent,title:'Register'},]
    },{
        path:'blank',component:BlankComponent,title:'Blank',children:[{path:'',component:HomeComponent,title:'Home'},
            {path:'home',component:HomeComponent,title:'Home'},
        ],
        canActivate:[authrizGuard],
        
    }




   
];
