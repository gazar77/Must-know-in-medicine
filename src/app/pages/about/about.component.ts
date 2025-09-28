import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  currentText: any = {};
  private langSub!: Subscription;

  constructor(public languageService: LanguageService) {}

  ngOnInit(): void {
    this.updateText(this.languageService.currentLang);

    // متابعة أي تغيير للغة
    this.langSub = this.languageService.currentLang$.subscribe(lang => {
      this.updateText(lang);
    });
  }

  updateText(lang: 'en' | 'ar') {
    this.currentText = {
      heroTitle: this.languageService.translate('hero_title'),
      heroSubtitle: this.languageService.translate('hero_subtitle'),
      aboutTitle: this.languageService.translate('about'),
      aboutIntro: this.languageService.translate('about_intro'),
      missionTitle: this.languageService.translate('about_mission_title'),
      missionText: this.languageService.translate('about_mission'),
      whyTitle: this.languageService.translate('why_choose_title'),
      whyDesc: this.languageService.translate('why_choose_desc'),
      expertise: this.languageService.translate('expertise'),
      patientCare: this.languageService.translate('patient_care'),
      technology: this.languageService.translate('technology'),
      comprehensiveServices: this.languageService.translate('comprehensive_services'),
      communityEngagement: this.languageService.translate('community_engagement'),
      chooseHospital: this.languageService.translate('choose_hospital'),
      chooseHospitalDesc: this.languageService.translate('choose_hospital_desc'),
      contact: this.languageService.translate('contact')
    };
  }

  ngOnDestroy(): void {
    this.langSub.unsubscribe();
  }
}
