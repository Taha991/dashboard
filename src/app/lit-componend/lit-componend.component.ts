import { Component } from '@angular/core';

@Component({
  selector: 'app-lit-componend',
  templateUrl: './lit-componend.component.html',
  styleUrls: ['./lit-componend.component.css']
})
export class LitComponendComponent {
  checkboxColors: { [key: number]: string } = {}; // Store checkbox colors

  isDropdownOpen = false; // Initialize as closed
  toggleDropdown() {
    console.log('Dropdown clicked');
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleCheckbox(checkboxId: number) {
    // Toggle the checkbox color
    if (this.checkboxColors[checkboxId] === '#FF7F5C') {
      this.checkboxColors[checkboxId] = ''; // Reset to default color
    } else {
      this.checkboxColors[checkboxId] = '#FF7F5C'; // Set to selected color
    }
  }
}

