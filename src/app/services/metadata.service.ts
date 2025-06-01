import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private meta: Meta, private titleService: Title) { }

  updateMetaTags({
    title = '',
    description = '',
    image = '',
    url = '',
    type = 'website',
    keywords = []
  }: {
    title?: string,
    description?: string,
    image?: string,
    url?: string,
    type?: string,
    keywords?: string[]
  }) {
    this.titleService.setTitle(title);

    // Standard SEO
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: keywords.join(', ') });

    // Open Graph (Facebook, LinkedIn, Telegram, WhatsApp)
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: type });

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' }); // or 'summary'
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
    this.meta.updateTag({ name: 'twitter:url', content: url });

    // Optional but recommended for completeness
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }
}
