import { Component } from '@angular/core';
import {
  DisplayGrid,
  GridsterConfig,
  GridsterItem,
  GridType,
} from 'angular-gridster2';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'album';
  imageChangedEvent: any = '';
  croppedImage: any = '';
  // @ts-ignore
  options: GridsterConfig;
  // @ts-ignore
  dashboard: Array<GridsterItem> = [];

  ngOnInit(): void {
    this.options = {
      maxCols: 8,
      maxRows: 8,
      gridType: GridType.Fit,
      displayGrid: DisplayGrid.None,
      margin: 30,
      swap: true,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
      },
    };

    this.dashboard = [
      {
        cols: 2,
        rows: 1,
        y: 0,
        x: 0,
        imgUrl:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthewowstyle.com%2Fwp-content%2Fuploads%2F2015%2F05%2Fpictures-of-beautiful-women..jpg&f=1&nofb=1',
      },
      {
        cols: 2,
        rows: 1,
        y: 0,
        x: 0,
        imgUrl:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthewowstyle.com%2Fwp-content%2Fuploads%2F2015%2F05%2Fpictures-of-beautiful-women..jpg&f=1&nofb=1',
      },
      {
        cols: 2,
        rows: 1,
        y: 0,
        x: 0,
        imgUrl:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthewowstyle.com%2Fwp-content%2Fuploads%2F2015%2F05%2Fpictures-of-beautiful-women..jpg&f=1&nofb=1',
      },
      {
        cols: 2,
        rows: 1,
        y: 0,
        x: 0,
        imgUrl:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthewowstyle.com%2Fwp-content%2Fuploads%2F2015%2F05%2Fpictures-of-beautiful-women..jpg&f=1&nofb=1',
      },
      {
        cols: 2,
        rows: 1,
        y: 0,
        x: 0,
        imgUrl:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthewowstyle.com%2Fwp-content%2Fuploads%2F2015%2F05%2Fpictures-of-beautiful-women..jpg&f=1&nofb=1',
      },
      {
        cols: 2,
        rows: 1,
        y: 0,
        x: 0,
        imgUrl:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthewowstyle.com%2Fwp-content%2Fuploads%2F2015%2F05%2Fpictures-of-beautiful-women..jpg&f=1&nofb=1',
      },
      {
        cols: 2,
        rows: 1,
        y: 0,
        x: 0,
        imgUrl:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthewowstyle.com%2Fwp-content%2Fuploads%2F2015%2F05%2Fpictures-of-beautiful-women..jpg&f=1&nofb=1',
      },
      {
        cols: 2,
        rows: 1,
        y: 0,
        x: 0,
        imgUrl:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthewowstyle.com%2Fwp-content%2Fuploads%2F2015%2F05%2Fpictures-of-beautiful-women..jpg&f=1&nofb=1',
      },
    ];
  }

  // changedOptions() {
  //   this.options.api.optionsChanged();
  // }

  //@ts-ignore
  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  // addItem() {
  //   this.dashboard.push({});
  // }
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
}
