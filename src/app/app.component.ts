import { Component, inject } from '@angular/core';
import { TranslatePipe } from './translate.pipe';
import { TranslateService } from './translate.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private translateService = inject(TranslateService);

  setLang(lang: string): void {
    this.translateService.use(lang);
  }
}
