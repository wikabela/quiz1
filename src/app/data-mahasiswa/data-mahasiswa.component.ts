import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from '../shared/mahasiswa';

@Component({
  selector: 'app-data-mahasiswa',
  templateUrl: './data-mahasiswa.component.html',
  styleUrls: ['./data-mahasiswa.component.css']
})
export class DataMahasiswaComponent implements OnInit {
  daftarMahasiswa:Mahasiswa[] = [];
  nim= '';
  nama ='';
  kelas = '';
  mahasiswa;
  constructor() { }

  ngOnInit() {
  }

  TambahMahasiswa(){
    this.mahasiswa = new Mahasiswa(this.nim, this.nama, this.kelas);
    this.daftarMahasiswa.push(this.mahasiswa);
    this.nim='';
    this.nama='';
    this.kelas='';
  }

}
