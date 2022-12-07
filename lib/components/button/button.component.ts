import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'test-button',
  templateUrl: 'button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {

}
