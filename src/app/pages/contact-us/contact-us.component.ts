import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact-us',
   standalone: false,
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  lang: 'ar' | 'en' = 'ar';
  formSubmitted = false;

  texts = {
    ar: {
      title: 'تواصل معنا',
      namePlaceholder: 'اكتب اسمك هنا',
      emailPlaceholder: 'example@email.com',
      messagePlaceholder: 'اكتب رسالتك هنا',
      submitBtn: 'إرسال',
      successMsg: 'تم فتح البريد لإرسال رسالتك!'
    },
    en: {
      title: 'Contact Us',
      namePlaceholder: 'Enter your name',
      emailPlaceholder: 'example@email.com',
      messagePlaceholder: 'Enter your message',
      submitBtn: 'Send',
      successMsg: 'Your email client has been opened!'
    }
  };

  currentText = this.texts['ar'];

  constructor(public langService: LanguageService) {}

  ngOnInit() {
    this.updateText(this.langService.currentLang);
    this.langService.currentLang$.subscribe(lang => this.updateText(lang));
  }

  updateText(lang: 'ar' | 'en') {
    this.lang = lang;
    this.currentText = this.texts[lang];
  }

  sendEmail(form: any) {
    if (form.valid) {
      const name = encodeURIComponent(form.value.name);
      const email = encodeURIComponent(form.value.email);
      const message = encodeURIComponent(form.value.message);

      const mailtoLink = `mailto:mustknowinmedicine@mustknowinmedicine.com?subject=رسالة من ${name}&body=From: ${name} (${email})%0D%0A%0D%0A${message}`;
      window.location.href = mailtoLink;

      this.formSubmitted = true;
      form.reset();
      setTimeout(() => (this.formSubmitted = false), 3000);
    }
  }
}
