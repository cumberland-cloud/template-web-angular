import { App } from "src/models";

export const APP_CONFIG: App = {
  title: 'Sunshine Daze',
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
    {
      src: '/assets/svgs/graphics/keyframes_desktop_screen_power.svg',
      alt: 'On Off Keyframes',
      title: 'Power Animation',
      id: 'power-animation'
    },
    {
      src: '/assets/svgs/graphics/keyframes_desktop_screen_static.svg',
      alt: 'Television Static',
      title: 'Television Static Animation',
      id: 'static-animation'
    },
    {
      src: '/assets/svgs/graphics/keyframes_desktop_clothing_transition.svg',
      alt: 'Clothing Department Transition',
      title: 'Clothing Department Transition Animation',
      id: 'clothing-transition-animation'
    },
    {
      src: '/assets/svgs/graphics/keyframes_desktop_clothing_transition.svg',
      alt: 'Clothing Department Transition',
      title: 'Clothing Department Transition Animation',
      id: 'clothing-transition-animation'
    },
    {
      src: '/assets/svgs/graphics/definitions_viewport.svg',
      alt: 'Desktop Viewport Definitions',
      title: 'Desktop Viewport Symbol Definitions',
      id: 'desktop-clothing-definitions'
    },
  ],
  transition_duration: 1000,
  longitude: -78.76153584234433, 
  latitude: 39.650956118386446,
  maps_url: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=39.65095611838644%2C-78.76153584234433&pitch=45'
};
