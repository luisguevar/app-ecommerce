import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthProfileModule } from './modules/auth-profile/auth-profile.module';
import { AuthProfileComponent } from './modules/auth-profile/auth-profile.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },

  {
    path: 'auth',
    loadChildren: () => import('./modules/auth-profile/auth-profile.module').then(m => m.AuthProfileModule)
  },

  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
