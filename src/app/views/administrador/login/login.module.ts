import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login.routing.module';
import { LoginService } from 'src/app/services/login.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [LoginRoutingModule, FormsModule, CommonModule],
  declarations: [LoginComponent],
  entryComponents: [],
  providers: [LoginService],
})
export class LoginModule {}
