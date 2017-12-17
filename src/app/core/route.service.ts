import {Routes} from '@angular/router';

import {ShellComponent} from './shell/shell.component';

/**
 * Provides helper methods to create routes.
 */
export class Route {

  /**
   * @param routes The routes to add.
   * @return {Routes} The new routes using shell as the base.
   */
  static withShell(routes: Routes): Routes {
    return [{
      path: '',
      component: ShellComponent,
      children: routes,
      // Reuse ShellComponent instance when navigating between child views
      data: {reuse: true}
    }];
  }

}
