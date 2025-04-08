import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Theme'
    },
    children: [
      {
        path: '',
        redirectTo: 'colors',
        pathMatch: 'full'
      },
      {
        path: 'live',
        loadComponent: () => import('./live/live.component').then(m => m.LiveComponent),
        data: {
          title: 'Live'
        }
      },
      {
        path: 'odometerlogs',
        loadComponent: () => import('./odometerlogs/odometerlogs.component').then(m => m.OdometerlogsComponent),
        data: {
          title: 'Odometer logs'
        }
      },
       {
        path: 'drivingsummary',
        loadComponent: () => import('./drivingsummary/drivingsummary.component').then(m => m.DrivingsummaryComponent),
        data: {
          title: 'Odometer logs'
        }
      },
      {
        path: 'analyticsreports',
        loadComponent: () => import('./analyticsreports/analyticsreports.component').then(m => m.AnalyticsreportsComponent),
        data: {
          title: 'Analytics Reports'
        }
      },
      {
        path: 'servicehistory',
        loadComponent: () => import('./servicehistory/servicehistory.component').then(m => m.ServicehistoryComponent),
        data: {
          title: 'Service history'
        }
      },
      {
        path: 'roadsideassistance',
        loadComponent: () => import('./roadsideassistance/roadsideassistance.component').then(m => m.RoadsideassistanceComponent),
        data: {
          title: 'Analytics Reports'
        }
      },
      {
        path: 'digitaldocuments',
        loadComponent: () => import('./digitaldocuments/digitaldocuments.component').then(m => m.DigitaldocumentsComponent),
        data: {
          title: 'Digital Documents'
        }
      },
      {
        path: 'privacypolicy',
        loadComponent: () => import('./privacypolicy/privacypolicy.component').then(m => m.PrivacypolicyComponent),
        data: {
          title: 'privacypolicy'
        }
      },
      {
        path: 'help',
        loadComponent: () => import('./help/help.component').then(m => m.HelpComponent),
        data: {
          title: 'Help'
        }
      },
      {
        path: 'activity',
        loadComponent: () => import('./activity/activity.component').then(m => m.ActivityComponent),
        data: {
          title: 'Activity'
        }
      },
      {
        path: 'trips',
        loadComponent: () => import('./trips/trips.component').then(m => m.TripsComponent),
        data: {
          title: 'Trips'
        }
      },
      {
        path: 'colors',
        loadComponent: () => import('./colors.component').then(m => m.ColorsComponent),
        data: {
          title: 'Live'
        }
      },
      {
        path: 'typography',
        loadComponent: () => import('./typography.component').then(m => m.TypographyComponent),
        data: {
          title: 'Typography'
        }
      }
    ]
  }
];

