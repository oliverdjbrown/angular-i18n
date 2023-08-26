import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  public data: any = {};
  private http = inject(HttpClient);

  use(lang: string): Promise<{}> {
    return new Promise<{}>((resolve) => {
      const defaultLang = environment.defaultLang;
      const langPath = `assets/i18n/${lang || defaultLang}.json`;

      this.http.get(langPath).subscribe({
        next: (transFile) => {
          this.data = transFile || {};
          resolve(this.data);
        },
        error: () => {
          this.data = {};
          resolve(this.data);
        },
      });
    });
  }

  translate(keyword: string): string {
    const translation = this.data[keyword];
    return translation;
  }
}
