import { Component } from '@angular/core';import { routes } from "./app-routing.module";
import { LoadingIndicationService } from "./services/loading-indication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-practice';
  protected readonly routes = routes;

  constructor(public loading: LoadingIndicationService) {}
}
