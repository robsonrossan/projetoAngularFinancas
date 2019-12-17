import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import { InMemoryDatabase} from "./in-memory-database";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase) // Remover esta linha e os 2 import //HttpClientInMemoryWebApiModule //InMemoryDatabase
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
