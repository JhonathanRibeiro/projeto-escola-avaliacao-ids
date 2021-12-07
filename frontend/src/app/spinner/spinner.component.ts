import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  public loading: Subject<boolean> = this.service.isLoading;

  constructor(private service: SpinnerService) { }

}
