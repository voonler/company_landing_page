import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TooltipPosition} from '@angular/material/tooltip';
import {FormControl} from '@angular/forms';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';



export interface Section {
  name: string;
  description: string;
  link: string;
  icon: string;
}


@Component({
  selector: 'ask-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  url = null;


  menues: Section[] = [
    {
      name: 'Karriereseite',
      description: 'Infos auf Webseite des Unternehmens',
      link: "www.google.com",
      icon: "assignment_ind",
    },
    {
      name: 'Aktuelle Jobangebote',
      description: 'Mit one-click Bewerbung',
      link: "www.youtube.com",
      icon: "chrome_reader_mode"
    },
    {
      name: 'HM-Alumni @ work',
      description: 'Was sagen unsere Absolventen?',
      link: "/home",
      icon: "supervisor_account",
    },
    {
      name: 'Initiativbewerbung',
      description: 'CV freigeben',
      link: "#",
      icon: "cloud_upload",
    },

  ];
  constructor(private _snackBar: MatSnackBar, private _bottomSheet: MatBottomSheet) { }


  ngOnInit() {

  }

  openSnackBar(message: string, action:string) {
    this._snackBar.open( message, action,
      {duration: 5000,
        panelClass: ["violette-snackbar"]
      }

    );
  }
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  openBottomSheet(): void {
    this._bottomSheet.open(ShareSheet);
  }

}



@Component({
  selector: 'share-sheet',
  templateUrl: './landing.share.html',
})
export class ShareSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<ShareSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
