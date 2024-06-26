import { Routes } from '@angular/router';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'inscription', component: FormulaireComponent },

    {
        path: 'catalogue',
        loadComponent: () =>
            import('./components/liste-product/liste-product.component').then((catalogue) => catalogue.ListeProductComponent),
    },
    {
        path: 'panier',
        loadComponent: () =>
          import('./components/panier/panier.component').then((panier) => panier.PanierComponent),
    },
    {
        path: 'carte',
        loadChildren: () => import('./modules/carte/carte.module').then((c) => c.CarteModule),
    },
    {
        path: '**',
        component: HomeComponent,
    },
];
