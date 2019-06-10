import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ammo',
  templateUrl: './ammo.component.html',
  styleUrls: ['./ammo.component.scss']
})
export class AmmoComponent implements OnInit {
ammoUrl = 'https://image.sportsmansguide.com/adimgs/l/1/105729i_ts.jpg';
imageWidth = '200';
showDetails = false;

nalcs = [
  {
  nalc: 'A260',
  nomenclature: 'CTG, 9mm Jacketed Hollow Point JHP',
  fullDescription: 'Produces a subsonic velocity. Brass case, copper bullet, copper alloy jacket and lead-antimony slug.'
  },
  {
  nalc: 'A363',
  nomenclature: 'CTG, 9mm Ball M882'
  },
  {
  nalc: 'AA49',
  nomenclature: 'CTG, 9mm Ball (Comm.Pack) M882'
  },
  {
  nalc: 'AA16',
  nomenclature: 'CTG, 9mm Frangible MK254-0'
  },
  {
  nalc: 'A358',
  nomenclature: 'CTG, 9mm TP-T M939 for AT-4 Trainer'
  },
  {
  nalc: 'A359',
  nomenclature: 'CTG, 9mm Dummy M917'
  },
  {
  nalc: 'AA12',
  nomenclature: 'CTG, 9mm FX Red Marking'
  },
  {
  nalc: 'AA21',
  nomenclature: 'CTG, 9mm FX Blue Marking'
  },
  {
  nalc: 'AX10',
  nomenclature: 'CTG, 9mm Spotting Rifle MK218 Mod 0 Dummy'
  },
  {
  nalc: 'AX11',
  nomenclature: 'CTG, 9mm Spotting Rifle MK217 Mod 0'
  }
  ]
;

nineMmDetails = 'The Cartridge, 9mm, Ball, M882 is approved for service use with the M9 9mm and M11 9mm pistols, both for training and for combat. The ammunition complies with NATO STANAG 4090 test requirements. The M882 ball 9mm cartridge consists of a brass case, a copper alloy jacketed lead core bullet, a two-piece boxer-type primer, and a double-base propellant. The M882 has a plain bullet tip.';



presentAmmoData(): void {
  this.showDetails = !this.showDetails;
}




  constructor() { }

  ngOnInit() {
  }

}
