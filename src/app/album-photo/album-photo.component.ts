import {
  animate,
  style,
  state,
  transition,
  trigger,
} from '@angular/animations';
import { EventEmitter, Component, Input, OnInit, Output } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
@Component({
  selector: 'app-album-photo',
  templateUrl: './album-photo.component.html',
  styleUrls: ['./album-photo.component.scss'],

  animations: [
    trigger('overlayState', [
      state('show', style({ opacity: 1 })),
      state('hide', style({ opacity: 0 })),
      transition('show => hide', animate('200ms ease-out')),
      transition('hide => show', animate('200ms ease-in')),
    ]),
  ],
})
export class AlbumPhotoComponent implements OnInit {
  @Input() item: GridsterItem | null = null;
  showOverlay: 'show' | 'hide' = 'hide';
  @Output() deleteItemEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  setShowOverlay = (showOverlay: boolean) => {
    this.showOverlay = showOverlay ? 'show' : 'hide';
  };
  handleMouseDown = () => {
    this.setShowOverlay(false);
  };
  // @ts-ignore
  deleteItem = (item) => {
    this.deleteItemEvent.emit(item);
  };
}
