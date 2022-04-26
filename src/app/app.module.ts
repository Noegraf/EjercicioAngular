import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//servicios
import { EquipoService } from './equipo.service'


import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoutingComponent } from './routing/routing.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobremiComponent } from './sobremi/sobremi.component';


const routes: Routes = [
  { path: 'contacto', component: ContactoComponent},
  { path: 'ngif', component: NgifComponent},
  { path: 'ngclass', component: NgclassComponent},
  { path: 'ngfor', component: NgForComponent},
  { path: 'sobremi', component:SobremiComponent},
  { path: '',component: InicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
  
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    NgifComponent,
    NgclassComponent,
    NgForComponent,
    RoutingComponent,
    ContactoComponent,
    InicioComponent,
    SobremiComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EquipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
