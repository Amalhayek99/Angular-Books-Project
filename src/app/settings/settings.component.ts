import { Component } from '@angular/core';
import { ServiesService } from '../servies.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  newAdmin: string = '';

  constructor(private serviesService: ServiesService) { }

  SetDarkMode = (event: Event) => {
    this.serviesService.toggleDarkMode();
  }

  addAdmin = () => {
    const result = this.serviesService.addAdmin(this.newAdmin);
    alert(result); // Show the result as an alert (success or error message)
    this.newAdmin = ''; // Reset input field
  }

  get admins() {
    return this.serviesService.getAdmins(); // Retrieve the list of admins from the service
  }
}

//trim זה מבטיח שאם המשתמש מזין בטעות רווחים נוספים לפני או אחרי שם המנהל, רווחים אלה יוסרו לפני בדיקת אורך השם או הוספתו למערך המנהלים