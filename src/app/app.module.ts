import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AngularSecurityModule } from "./angular-security/angular-security.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserStorageSampleModule } from "./browser-storage-sample/browser-storage-sample.module";
import { CoreModule } from "./core/core.module";
import { CustomPipeModule } from "./custom-pipe/custom-pipe.module";
import { CustomTwoWayDataBindingModule } from "./custom-two-way-data-binding/custom-two-way-data-binding.module";
import { CustomValidatorsModule } from "./custom-validators/custom-validators.module";
import { EmployeeModule } from "./employee/employee.module";
import { InjectionBeyondClassesModule } from "./injection-beyond-classes/injection-beyond-classes.module";
import { ModalBootstrapDialogsModule } from "./modal-bootstrap-dialogs/modal-bootstrap-dialogs.module";
import { ModelStateValidationModule } from "./model-state-validation/model-state-validation.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductModule } from "./product/product.module";
import { ReadAppConfigModule } from "./read-app-config/read-app-config.module";
import {
    ServiceComponentCommunicationModule,
} from "./service-component-communication/service-component-communication.module";
import { SharedModule } from "./shared/shared.module";
import { SimpleGridModule } from "./simple-grid/simple-grid.module";
import { TimersModule } from "./timers/timers.module";
import { UploadFileModule } from "./upload-file/upload-file.module";
import { UsingThirdPartyLibrariesModule } from "./using-third-party-libraries/using-third-party-libraries.module";
import { WelcomeComponent } from "./welcome/welcome.component";

@NgModule({
  declarations: [AppComponent, WelcomeComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule.forRoot(),
    EmployeeModule,
    ProductModule,
    CustomValidatorsModule,
    UploadFileModule,
    UsingThirdPartyLibrariesModule,
    SimpleGridModule,
    CustomPipeModule,
    AngularSecurityModule,
    BrowserStorageSampleModule,
    ReadAppConfigModule,
    ModelStateValidationModule,
    ServiceComponentCommunicationModule,
    ModalBootstrapDialogsModule,
    CustomTwoWayDataBindingModule,
    InjectionBeyondClassesModule,
    TimersModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
