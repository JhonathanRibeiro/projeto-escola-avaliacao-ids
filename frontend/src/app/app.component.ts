import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = ' ';

  ngOnInit(): void {
    this.relogio();
  }

  relogio() {
    var div = document.querySelector('#time');
    const updateClock = () => {
      const present = new Date();
      const hour = present.getHours();
      const min = present.getMinutes();
      const sec = present.getSeconds();
      div.innerHTML = `${hour}:${min}:${sec}`;
    }
    setInterval(updateClock, 1000)
  }

}
