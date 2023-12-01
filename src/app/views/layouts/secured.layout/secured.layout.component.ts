import { Component ,OnInit} from '@angular/core';
import { CommonDataService } from 'src/app/services/commonData.service';
@Component({
  selector: 'app-secured.layout',
  templateUrl: './secured.layout.component.html',
  styleUrls: ['./secured.layout.component.scss']
})
export class SecuredLayoutComponent implements OnInit{

  public _subs_user_data:any;
  public userObj:any;

  
  constructor(
    public _commonDataService: CommonDataService
  ) {}

  ngOnInit(): void {
    this._subs_user_data = this._commonDataService.user$.subscribe(value => {
      this.userObj= value;
    });
  }
}
