import { Component, OnInit, HostListener } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-doctors',
  standalone: false,
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
})
export class DoctorsComponent implements OnInit {
  constructor(public lang: LanguageService) {}

  doctors: string[] = [];
  currentIndex = 0;
  cardWidth = 220;      // عرض الكارت
  visibleCards = 4;     // عدد الكروت الظاهرة

  ngOnInit() {
    // هنا ممكن تحط عدد الصور اللي عندك
    this.doctors = Array.from(
      { length: 46 },
      (_, i) => `assets/images/doctors/doctor${i + 1}.jpg`
    );

    this.updateCardWidth();

    // سلايدر أوتوماتيك كل 3 ثواني
    setInterval(() => this.nextSlide(), 3000);
  }

  @HostListener('window:resize')
  onResize() {
    this.updateCardWidth();
  }

  updateCardWidth() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 576) {
      this.visibleCards = 1;
      this.cardWidth = 120;
    } else if (screenWidth <= 768) {
      this.visibleCards = 2;
      this.cardWidth = 140;
    } else if (screenWidth <= 992) {
      this.visibleCards = 3;
      this.cardWidth = 160;
    } else if (screenWidth <= 1200) {
      this.visibleCards = 4;
      this.cardWidth = 180;
    } else {
      this.visibleCards = 5;
      this.cardWidth = 200;
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextSlide() {
    if (this.currentIndex < this.doctors.length - this.visibleCards) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }
}
