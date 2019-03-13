import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LowercasePipeComponent } from './builtin/lowercase-pipe.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { UppercasePipeComponent } from './builtin/uppercase-pipe.component';
import { TitlecasePipeComponent } from './builtin/titlecase-pipe.component';
import { DecimalPipeComponent } from './builtin/decimal-pipe.component';
import { CurrencyPipeComponent } from './builtin/currency-pipe.component';
import { JsonPipeComponent } from './builtin/json-pipe.component';
import { PercentPipeComponent } from './builtin/percent-pipe.component';
import { DatePipeComponent } from './builtin/date-pipe.component';
import { KeyvaluePipeComponent } from './builtin/keyvalue-pipe.component';
import { SlicePipeComponent } from './builtin/slice-pipe.component';
import { AsyncPipeComponent } from './builtin/async-pipe.component';
import { MynamePipe } from './custom/myname.pipe';
import { MynamePipeComponent } from './custom/myname-pipe.component';
import { MynamewithprefPipe } from './custom/mynamewithpref.pipe';
import { PrintoutPipe } from './custom/printout.pipe';
import { PrintoutPipeComponent } from './custom/printout-pipe.component';
import { PrintoutimpurePipe } from './custom/printoutimpure.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LowercasePipeComponent,
    UppercasePipeComponent,
    TitlecasePipeComponent,
    DecimalPipeComponent,
    CurrencyPipeComponent,
    JsonPipeComponent,
    PercentPipeComponent,
    DatePipeComponent,
    KeyvaluePipeComponent,
    SlicePipeComponent,
    AsyncPipeComponent,
    MynamePipe,
    MynamePipeComponent,
    MynamewithprefPipe,
    PrintoutPipe,
    PrintoutPipeComponent,
    PrintoutimpurePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
