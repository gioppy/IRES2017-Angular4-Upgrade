import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cry',
  templateUrl: './cry.component.html',
  styleUrls: ['./cry.component.scss']
})
export class CryComponent implements OnInit {
  @Input() audio: string;
  @ViewChild('player') player: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onPlay() {
    this.player.nativeElement.load();
    this.player.nativeElement.play();
  }

}
