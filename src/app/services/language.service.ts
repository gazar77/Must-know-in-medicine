import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private _currentLang: 'en' | 'ar' = 'en';
  public currentLang$ = new BehaviorSubject<'en' | 'ar'>(this._currentLang);

  constructor() {
    const savedLang = localStorage.getItem('lang');
    if (savedLang === 'en' || savedLang === 'ar') {
      this._currentLang = savedLang;
      this.currentLang$.next(this._currentLang);
    }
  }

  setLanguage(lang: 'en' | 'ar'): void {
    this._currentLang = lang;
    localStorage.setItem('lang', lang);
    this.currentLang$.next(lang);
  }

  get currentLang(): 'en' | 'ar' {
    return this._currentLang;
  }

  translate(key: string): string {
    const translations: Record<string, Record<string, string>> = {
      // ========================= ENGLISH =========================
      en: {
        // Navbar & general
        home: 'Home',
        about: 'About Us',
        doctors: 'Our Doctors',
        patients: 'Patients & Visitors',
        contact: 'Contact Us',
        blog: 'Blog',
        call: 'CALL 16111 →',
        footerTitle: 'Contact Us',

        // Hero section
        hero_title: 'Cardiology & Catheterization Department',
        hero_subtitle: 'Excellence in cardiac care',

        // About page content
        about_intro: 'The Cardiology and Catheterization Department at Souad Kafafi University Hospital is dedicated to providing comprehensive and advanced cardiac care. With a focus on excellence, innovation, and patient-centered services, our department stands as a center of expertise in diagnosing and treating cardiovascular conditions. We aim to deliver exceptional healthcare with compassion, precision, and the highest ethical standards.',
        about_mission_title: 'Our Mission',
        about_mission: 'Our mission at Souad Kafafi University Hospital’s Cardiology Department is to deliver patient-centered healthcare of the highest standard, promoting wellness, restoring heart health, and enhancing quality of life. We achieve this by combining cutting-edge cardiac technology, world-class expertise, and a compassionate approach that treats each individual with dignity and respect.',

        // Services section
        services_title: 'Our Services',
        services_subtitle: 'Excellence in Care, Inspired by Legacy',
        cardiology_title: 'Cardiology',
        cardiology_desc: "Heart Care at Its Best: Our Cardiology department offers comprehensive, cutting-edge solutions for your heart's health.",
        catheterization_title: 'Cardiac Catheterization',
        catheterization_desc: 'Advanced diagnostic and interventional cardiac catheterization services to ensure accurate assessment and effective treatment of heart diseases.',
        emergency_title: 'Emergency Cardiac Care',
        emergency_desc: '24/7 emergency response unit equipped to handle critical cardiac cases with speed, precision, and care.',
        surgery_title: 'Heart Surgery',
        surgery_desc: 'Expert surgical team providing advanced heart surgeries with state-of-the-art technology to improve patients lives.',
        icu_title: 'Cardiac ICU',
        icu_desc: 'Specialized intensive care unit dedicated to cardiac patients, providing round-the-clock monitoring and advanced support.',
        rehab_title: 'Cardiac Rehabilitation',
        rehab_desc: 'Personalized programs for recovery, lifestyle improvement, and long-term heart health after cardiac events or surgery.',

        // Why Choose Us
        why_choose_title: 'Why Choose Us',
        why_choose_desc: 'Choose the Cardiology and Catheterization Department at Souad Kafafi University Hospital for exceptional care, advanced expertise, and a patient-centered approach.',
        expertise: 'Exceptional Expertise: Highly skilled cardiologists and healthcare professionals with years of experience.',
        patient_care: 'Patient-Centered Approach: Holistic care ensuring individualized treatment and overall well-being.',
        technology: 'Advanced Technology and Facilities: State-of-the-art catheterization labs and diagnostic equipment.',
        comprehensive_services: 'Comprehensive Services: From preventive care to rehabilitation, all under one roof.',
        community_engagement: 'Community Engagement: Active involvement in raising awareness about heart health and promoting wellness.',

        // Extra Section
        choose_hospital: 'Cardiology & Catheterization Department',
        choose_hospital_desc: 'Providing advanced cardiac care with a focus on innovation, patient-centered services, and comprehensive treatment at Souad Kafafi University Hospital.',

         doctors_title: 'Our Doctors',

        // Conference Section
        conference_title: 'Annual Cardiology Conference 2025',
        conference_subtitle: 'Join us for the latest insights and advancements in cardiac care.',
        conference_btn: 'Meet Our Doctors',

        // Blog Section
        blog_title: 'Medical Blog',
        read_more: 'Read More »',
        blog1_title: 'Latest Cardiac Catheterization Techniques',
        blog1_desc: 'This article reviews the latest methods and techniques in performing cardiac catheterization to ensure patient safety and treatment efficiency at Souad Kafafi Hospital.',
        blog2_title: 'Common Heart Diseases and Treatments',
        blog2_desc: 'An article explaining the most important heart diseases and how to manage them medically and practically at Souad Kafafi Hospital.',
        blog3_title: 'Heart Disease Prevention Tips',
        blog3_desc: 'Learn about preventive measures for heart disease and the importance of regular check-ups at Souad Kafafi Hospital.',
        blog4_title: 'Modern Catheterization Techniques',
        blog4_desc: 'Detailed explanation of modern cardiac catheterization techniques for accurate diagnosis and immediate treatment.',
        blog5_title: 'Cardiology Consultations',
        blog5_desc: 'How Souad Kafafi Hospital provides advanced consultations for patients to monitor their heart health.',
        blog6_title: 'Emergency Heart Surgery',
        blog6_desc: 'An article detailing key procedures in emergency heart surgery and methods to handle cases efficiently.',
        blog7_title: 'Cardiac Rehabilitation After Catheterization',
        blog7_desc: 'How cardiac rehabilitation programs help patients improve daily life after undergoing catheterization.',
        blog8_title: 'Early Symptoms of Heart Problems',
        blog8_desc: 'Learn the most important early symptoms of heart problems and how early intervention is done at Souad Kafafi Hospital.',
        blog9_title: 'Latest Research in Heart Diseases',
        blog9_desc: 'Overview of the latest studies and medical research related to heart diseases and the catheterization unit.',
      },

      // ========================= ARABIC =========================
      ar: {
        // Navbar & general
        home: 'الرئيسية',
        about: 'من نحن',
        doctors: 'أطباؤنا',
        patients: 'المرضى والزوار',
        contact: 'تواصل معنا',
        blog: 'المدونة',
        call: 'اتصل ١٦١١١ →',
        footerTitle: 'تواصل معنا',

        // Hero section
        hero_title: 'قسم القلب ووحدة القسطرة',
        hero_subtitle: 'تميز في الرعاية القلبية',

        // About page content
        about_intro: 'قسم القلب ووحدة القسطرة في مستشفى سعاد كفافي الجامعي مكرس لتقديم رعاية قلبية شاملة ومتقدمة. مع التركيز على التميز والابتكار وخدمات تركز على المريض، يقف قسمنا كمركز خبرة في تشخيص وعلاج الحالات القلبية. نهدف إلى تقديم رعاية صحية استثنائية مع التعاطف والدقة وأعلى المعايير الأخلاقية.',
        about_mission_title: 'مهمتنا',
        about_mission: 'مهمتنا في قسم القلب ووحدة القسطرة بمستشفى سعاد كفافي الجامعي هي تقديم رعاية صحية تركز على المريض بأعلى المعايير، تعزيز الصحة، استعادة صحة القلب، وتحسين جودة الحياة. نحقق ذلك من خلال دمج أحدث تقنيات القلب، خبرة عالمية المستوى، ونهج رحيم يعامل كل فرد بكرامة واحترام.',

        // Services section
        services_title: 'خدماتنا',
        services_subtitle: 'تميز في الرعاية، مستوحى من الإرث',
        cardiology_title: 'أمراض القلب',
        cardiology_desc: 'أفضل رعاية للقلب: يقدم قسم أمراض القلب لدينا حلولاً شاملة ومتقدمة لصحة قلبك.',
        catheterization_title: 'وحدة القسطرة القلبية',
        catheterization_desc: 'خدمات قسطرة قلبية تشخيصية وتداخلية متقدمة لضمان تقييم دقيق وعلاج فعال لأمراض القلب.',
        emergency_title: 'رعاية الطوارئ القلبية',
        emergency_desc: 'وحدة طوارئ تعمل ٢٤/٧ مجهزة للتعامل مع الحالات القلبية الحرجة بسرعة ودقة ورعاية.',
        surgery_title: 'جراحة القلب',
        surgery_desc: 'فريق جراحي متخصص يقدم أحدث جراحات القلب باستخدام تقنيات متطورة لتحسين حياة المرضى.',
        icu_title: 'العناية المركزة القلبية',
        icu_desc: 'وحدة عناية مركزة متخصصة لمرضى القلب، توفر مراقبة مستمرة ودعماً متقدماً على مدار الساعة.',
        rehab_title: 'التأهيل القلبي',
        rehab_desc: 'برامج شخصية للتعافي، وتحسين نمط الحياة، وصحة القلب طويلة الأمد بعد الجراحات أو الأزمات القلبية.',

        // Why Choose Us
        why_choose_title: 'لماذا تختارنا',
        why_choose_desc: 'اختر قسم القلب ووحدة القسطرة في مستشفى سعاد كفافي للرعاية الاستثنائية، والخبرة المتقدمة، ونهج يركز على المريض.',
        expertise: 'خبرة استثنائية: أطباء قلب ومهنيون صحيون ماهرون ذوي خبرة طويلة.',
        patient_care: 'نهج يركز على المريض: رعاية شاملة تضمن علاج فردي ورفاهية شاملة.',
        technology: 'تكنولوجيا ومرافق متقدمة: مختبرات قسطرة ومعدات تشخيصية متطورة.',
        comprehensive_services: 'خدمات شاملة: من الرعاية الوقائية إلى التأهيل، كل ذلك تحت سقف واحد.',
        community_engagement: 'المشاركة المجتمعية: المشاركة الفعالة في التوعية بصحة القلب وتعزيز الصحة.',

        // Extra Section
        choose_hospital: 'قسم القلب ووحدة القسطرة',
        choose_hospital_desc: 'تقديم رعاية قلبية متقدمة مع التركيز على الابتكار، خدمات تركز على المريض، وعلاج شامل في مستشفى سعاد كفافي الجامعي.',

        // Conference Section
        conference_title: 'المؤتمر السنوي لأمراض القلب 2025',
        conference_subtitle: 'انضم إلينا لاكتشاف أحدث التطورات في الرعاية القلبية.',
        conference_btn: 'تعرف على أطبائنا',

        doctors_title: 'أطباؤنا',

        // Blog Section
        blog_title: 'المدونة الطبية',
        read_more: 'اقرأ المزيد »',
        blog1_title: 'أحدث تقنيات القسطرة القلبية',
        blog1_desc: 'تستعرض هذه المقالة أحدث الطرق والتقنيات في إجراء القسطرة القلبية لضمان سلامة المرضى وفعالية العلاج في مستشفى سعاد كفافي.',
        blog2_title: 'أمراض القلب الشائعة وعلاجها',
        blog2_desc: 'مقالة تشرح أهم أمراض القلب وكيفية التعامل معها طبياً وعملياً في مستشفى سعاد كفافي.',
        blog3_title: 'نصائح للوقاية من أمراض القلب',
        blog3_desc: 'تعرف على نصائح للوقاية من أمراض القلب وأهمية الفحص الدوري للمرضى في مستشفى سعاد كفافي.',
        blog4_title: 'التقنيات الحديثة في القسطرة',
        blog4_desc: 'شرح مفصل للتقنيات الحديثة في القسطرة القلبية لضمان التشخيص الدقيق والعلاج الفوري.',
        blog5_title: 'الاستشارات الطبية للقلب',
        blog5_desc: 'كيف تقدم مستشفى سعاد كفافي استشارات طبية متقدمة للمرضى لمتابعة حالتهم الصحية للقلب.',
        blog6_title: 'جراحة القلب الطارئة',
        blog6_desc: 'مقالة توضح أهم الإجراءات في جراحة القلب الطارئة وطرق التعامل معها بسرعة وكفاءة.',
        blog7_title: 'التأهيل القلبي بعد القسطرة',
        blog7_desc: 'كيف يساعد برنامج التأهيل القلبي المرضى بعد إجراء القسطرة لتحسين حياتهم اليومية.',
        blog8_title: 'أعراض مشاكل القلب المبكرة',
        blog8_desc: 'تعرف على أهم الأعراض المبكرة لمشاكل القلب وكيفية التدخل المبكر في مستشفى سعاد كفافي.',
        blog9_title: 'أحدث الأبحاث في أمراض القلب',
        blog9_desc: 'نظرة على أحدث الدراسات والأبحاث الطبية المتعلقة بأمراض القلب ووحدة القسطرة.',
      }
    };

    return translations[this._currentLang][key] || key;
  }
}
