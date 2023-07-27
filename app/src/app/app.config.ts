import { App } from "src/models";

export const APP_CONFIG: App = {
  title: 'Compnay Name',
  description: 'Company Description',
  assets: [
    {
        src: '/assets/imgs/404.png',
        alt: 'Page Not Found',
        title: '404 Error',
        id: '404-img',
    },
    {
      src: '/assets/svgs/logo.svg',
      alt: 'Logo alt goes here',
      aria_label: 'Company is good',
      title: 'Company Logo',
      id: 'logo-img',
    },
  ],
  transition_duration: 1000,
  longitude: -78.76153584234433, 
  latitude: 39.650956118386446,
  maps_url: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=39.65095611838644%2C-78.76153584234433&pitch=45'
};
