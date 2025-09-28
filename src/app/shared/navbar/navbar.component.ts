import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(public languageService: LanguageService) {}

  changeLang(lang: 'en' | 'ar') {
    this.languageService.setLanguage(lang);
  }
}
