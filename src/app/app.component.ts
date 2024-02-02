import {AfterViewInit, Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CommonModule} from "@angular/common";
import {PingService} from "./ping.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'IsTheHostDown';
  down: null | boolean = true;

  constructor(
    private _ping: PingService
  ) {

  }

  ngOnInit(): void {
    this.down = this._ping.isDown()
  }
}
