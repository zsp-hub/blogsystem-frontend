import {Component, OnInit} from '@angular/core';
import {ManageService} from "../services/manage.service";
import {Router} from "@angular/router";
import {log} from "util";

@Component({
  selector: 'app-manage-sidebar',
  templateUrl: './manage-sidebar.component.html',
  styleUrls: ['./manage-sidebar.component.css']
})
export class ManageSidebarComponent implements OnInit {

  constructor(private manageService: ManageService,
              private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.manageService.logout().subscribe((response: any) => {
      if (response['code'] == 200) {
        localStorage.removeItem("login");
        this.router.navigate(['/']);
      }
    });
  }
}
