import { RodapeModule } from './componetes/rodape/rodape.module';
import { CabecalhoModule } from './componetes/cabecalho/cabecalho.module';
import { CabecalhoComponent } from './componetes/cabecalho/cabecalho.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CabecalhoModule,
    RodapeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
