import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './page/inicio/inicio.component';
import { TrabajoComponent } from './page/trabajo/trabajo.component';
import { ServiciosComponent } from './page/servicios/servicios.component';
import { ContactoComponent } from './page/contacto/contacto.component';
import { EquipoComponent } from './page/equipo/equipo.component';
const routes: Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'',component:InicioComponent},
  {path:'trabajo',component:TrabajoComponent},
  {path:'servicios',component:ServiciosComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'equipo',component:EquipoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
