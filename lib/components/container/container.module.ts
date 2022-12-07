import {NgModule} from "@angular/core";
import {ContainerComponent} from "./container.component";
import {ButtonModule} from "@components/button/module";

@NgModule({
  imports: [
    ButtonModule
  ],
  declarations: [ContainerComponent],
  exports: [ContainerComponent],
})
export class ContainerModule {
}
