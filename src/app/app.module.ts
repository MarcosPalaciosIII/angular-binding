import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImageSwitcherComponent } from './image-switcher/image-switcher.component';
import { CounterComponent } from './counter/counter.component';
import { MessageComponent } from './message/message.component';
import { FoodSelectComponent } from './food-select/food-select.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageSwitcherComponent,
    CounterComponent,
    MessageComponent,
    FoodSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
