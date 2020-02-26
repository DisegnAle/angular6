import { Component, Input} from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: []
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  
  constructor(private loggingService: LoggingService, private accountsService : AccountsService){

  }

  onSetTo(status: string) {
    var updateInfo = {
      id: this.id,
      newStatus: status
    }
    this.accountsService.onStatusChanged(updateInfo);
    this.accountsService.statusUpdated.emit(status);
  }


}
