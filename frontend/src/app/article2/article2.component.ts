import { Component } from '@angular/core';

@Component({
  selector: 'app-article2',
  standalone: true,
  template: `
    <div class="article-container">
      <h1>Talking to Family About ADHD</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend justo et libero sodales, a scelerisque justo facilisis.</p>
      <p>Nam vitae magna nec turpis hendrerit accumsan at id erat. Vivamus id eros sed metus tempus vehicula.</p>
      <p>Integer consectetur nisl ac turpis euismod, sit amet commodo sem lacinia. Ut id velit nec dolor bibendum mollis ut at orci.</p>
      <p>Suspendisse potenti. Fusce sit amet quam id arcu malesuada tincidunt quis nec nisi.</p>
    </div>
  `,
  styles: [`
    .article-container {
      padding: 20px;
      max-width: 800px;
      margin: auto;
    }

    h1 {
      margin-bottom: 20px;
    }
  `]
})
export class Article2Component {}
