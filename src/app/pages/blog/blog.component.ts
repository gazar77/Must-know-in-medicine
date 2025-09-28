import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-blog',
  standalone: false,
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  constructor(public languageService: LanguageService) {}

  blogPosts = [
    { titleKey: 'blog1_title', descKey: 'blog1_desc', image: 'download (2).jpg', link: 'https://www.bangkokhospital.com/ar/bangkok-heart/content/radial-artery-approach-for-performing-coronary-catheter-procedures-in-patient-with-coronary-artery-disease?utm_source=chatgpt.com' },
    { titleKey: 'blog2_title', descKey: 'blog2_desc', image: 'download (3).jpg', link: 'https://www.mayoclinic.org/ar/diseases-conditions/heart-disease/symptoms-causes/syc-20353118?utm_source=chatgpt.com' },
    { titleKey: 'blog3_title', descKey: 'blog3_desc', image: 'images (1).jpg', link: 'https://www.mayoclinic.org/ar/diseases-conditions/heart-disease/in-depth/heart-disease-prevention/art-20046502?utm_source=chatgpt.com' },
    { titleKey: 'blog4_title', descKey: 'blog4_desc', image: 'download (4).jpg', link: 'https://dr-fouadrasekh.com/%D8%A3%D9%86%D9%88%D8%A7%D8%B9-%D8%A7%D9%84%D9%82%D8%B3%D8%B7%D8%B1%D8%A9/?utm_source=chatgpt.com' },
    { titleKey: 'blog5_title', descKey: 'blog5_desc', image: 'download (5).jpg', link: 'https://altibbi.com/?utm_source=chatgpt.com' },
    { titleKey: 'blog6_title', descKey: 'blog6_desc', image: 'download (6).jpg', link: 'https://almoosahealthgroup.org/ar/article/%D8%AC%D8%B1%D8%A7%D8%AD%D8%A9-%D8%A7%D9%84%D9%82%D9%84%D8%A8/?utm_source=chatgpt.com' },
    { titleKey: 'blog7_title', descKey: 'blog7_desc', image: 'cardiac-catheterisation-illustration-8abdc5.gif', link: 'https://www.mayoclinic.org/ar/tests-procedures/cardiac-rehabilitation/about/pac-20385192?utm_source=chatgpt.com' },
    { titleKey: 'blog8_title', descKey: 'blog8_desc', image: 'download (7).jpg', link: 'https://almoosahealthgroup.org/ar/article/%D9%85%D8%A7-%D9%87%D9%8A-%D8%A3%D8%B9%D8%B1%D8%A7%D8%B6-%D9%85%D8%B1%D8%B6-%D8%A7%D9%84%D9%82%D9%84%D8%A8-%D8%A7%D9%84%D9%85%D8%A8%D9%83%D8%B1/?utm_source=chatgpt.com' },
    { titleKey: 'blog9_title', descKey: 'blog9_desc', image: 'download (8).jpg', link: 'https://www.webteb.com/heart/diseases/%D8%A7%D9%85%D8%B1%D8%A7%D8%B6-%D8%A7%D9%84%D9%82%D9%84%D8%A8?utm_source=chatgpt.com' },
  ];
}
