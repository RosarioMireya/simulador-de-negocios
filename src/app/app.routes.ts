import { RouterModule, Routes} from '@angular/router';
import { TablaDeDecisionComponent } from './tabla-de-decision/tabla-de-decision.component';
import { LoginComponent } from './login/login.component';

const APPROUTES: Routes = [
 { path: 'login', component:  LoginComponent },
 { path: 'tabla', component:  TablaDeDecisionComponent },
 { path: '**', pathMatch: 'full', redirectTo: 'login'}
];

// tslint:disable-next-line:eofline
export const APP_ROUTER = RouterModule.forRoot(APPROUTES);