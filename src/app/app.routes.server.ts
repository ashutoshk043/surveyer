import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'survey/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: () => {
      // Return a promise that resolves to an array of parameter objects
      return Promise.resolve([
        { id: '1' },
        { id: '2' },
        { id: '3' }
      ]);
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
