import { AppHighLight } from './appHighLight';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestCompComponent } from './Components/test-comp/test-comp.component';
import { ItemComponent } from './Components/item/item.component';
import { ItemDetailsComponent } from './Components/item-details/item-details.component';
import { ParentComponent } from './Components/parent/parent.component';
import { ChildComponent } from './Components/child/child.component';
import { RandomColorDirective } from './Directive/random-color.directive';


@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent,
    ItemComponent,
    ItemDetailsComponent,
    ParentComponent,
    ChildComponent,
    AppHighLight,
    RandomColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
