import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-doctors',
  standalone: false,
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  constructor(public lang: LanguageService) {}

  doctors: string[] = [
    'assets/images/doctors/doctor1.jpg',
    'assets/images/doctors/doctor1.jpg',
    'assets/images/doctors/doctor1.jpg',
    'assets/images/doctors/doctor1.jpg',
    'assets/images/doctors/doctor1.jpg',
    'assets/images/doctors/doctor1.jpg',
    'assets/images/doctors/doctor1.jpg'
  ]; // هنعبيها بصور الدكاترة
  currentIndex = 0;

  ngOnInit() {
    // لو عندك 50 صورة باسم doctor1.jpg ... doctor50.jpg
    this.doctors = Array.from({ length: 50 }, (_, i) => `assets/images/doctors/doctor${i + 1}.jpg`);

    // خيار التحريك التلقائي كل 3 ثواني
    setInterval(() => this.nextSlide(), 3000);
  }

  prevSlide() {
    if (this.currentIndex > 0) this.currentIndex--;
  }

  nextSlide() {
    if (this.currentIndex < this.doctors.length - 4) this.currentIndex++; // 4 صور ظاهرة
    else this.currentIndex = 0; // ترجع للبداية
  }
}
