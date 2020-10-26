import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usuarios: any = []
  public texto = '';

  constructor(private homesrc: HomeService) { }

  ngOnInit(): void {
    console.log('renderizei')
    this.homesrc.getUser().subscribe(res => {
      console.log(res)
      this.usuarios = res;
    })
  }

  searchUser(){
    this.homesrc.searchUser(this.texto).subscribe(res => {
      console.log(res);
      this.usuarios = res;
    })
  }

}
