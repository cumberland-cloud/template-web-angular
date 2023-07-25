import { Nav } from "./models";

export const NAV_CONFIG: Nav[] = [
    {
      path: '/',
      nav_title: 'Home',
      nav_id: 'home-nav',
      page_title: 'title goes here',
      page_description:
        'description goes here',
      menu: true,
      data: [
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          url: 'https://sunshine-daze.cumberland-cloud.com',
          logo: 'https://sunshine-daze.cumberland-cloud.com/assets/svgs/logo.svg',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          image: [
            'img url goes here',
            'img url goes here',
            'img url goes here',
          ],
          name: 'business name goes here',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '21 S Liberty St',
            addressLocality: 'Cumberland',
            addressRegion: 'MD',
            postalCode: '21502',
            addressCountry: 'US',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '39.651192385618494',
            longitude: '-78.76152174452781',
          },
          url: 'url goes here',
          telephone: '+13016975889',
          priceRange: '$',
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [ 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '10:00',
              closes: '17:00',
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [ 'Saturday'],
              opens: '11:00',
              closes: '17:00',
            },
          ],
        },
      ],
      meta: [
        {
          property: 'og:url',
          content: 'https://sunshine-daze.cumberland-cloud.com',
        },
        {
          property: 'og:image',
          content: 'https://sunshine-daze.cumberland-cloud.com/assets/svgs/cover.svg',
        },
        {
          property: 'og:image:secure_url',
          content: 'https://sunshine-daze.cumberland-cloud.com/assets/svgs/cover.svg',
        },
        {
          property: 'og:image:width',
          content: '1024',
        },
        {
          property: 'og:image:height',
          content: '1024',
        },
        {
          property: 'og:image:alt',
          content: 'Sunshine Daze: Far Out, Dude',
        },
        {
          property: 'twitter:image',
          content: 'https://sunshine-daze.cumberland-cloud.com/assets/svgs/cover.svg',
        },
        {
          property: 'twitter:image:alt',
          content: 'Sunshine Daze: A Softer, Gentler Machine Gun Hand',
        },
        {
          property: 'twitter:card',
          content: 'Sunshine Daze is a clothing store in Western Maryland.',
        },
      ],
    },
    {
      path: '/about',
      nav_title: 'About',
      nav_id: 'about-nav',
      page_title: 'title goes here',
      page_description:
        'description goes here',
      menu: true,
      data: [
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          url: 'url goes here',
          logo: 'logo url goes here',
        },
      ],
      meta: [
        {
          property: 'og:url',
          content: 'url goes here',
        },
        {
          property: 'og:image',
          content: 'url goes here',
        },
        {
          property: 'og:image:secure_url',
          content: 'url goes here',
        },
        {
          property: 'og:image:width',
          content: '1024',
        },
        {
          property: 'og:image:height',
          content: '1024',
        },
        {
          property: 'og:image:alt',
          content: 'alt goes here',
        },
        {
          property: 'twitter:image',
          content: 'url goes here',
        },
        {
          property: 'twitter:image:alt',
          content: 'alt goes here',
        },
        {
          property: 'twitter:card',
          content: 'summary',
        },
      ],
    },
    {
      path: '/contact',
      nav_title: 'Contact',
      nav_id: 'about-nav',
      page_title: 'title goes here',
      page_description:
        'description goes here',
      menu: true,
      data: [
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          url: 'url goes here',
          logo: 'logo url goes here',
        },
      ],
      meta: [
        {
          property: 'og:url',
          content: 'url goes here',
        },
        {
          property: 'og:image',
          content: 'url goes here',
        },
        {
          property: 'og:image:secure_url',
          content: 'url goes here',
        },
        {
          property: 'og:image:width',
          content: '1024',
        },
        {
          property: 'og:image:height',
          content: '1024',
        },
        {
          property: 'og:image:alt',
          content: 'alt goes here',
        },
        {
          property: 'twitter:image',
          content: 'url goes here',
        },
        {
          property: 'twitter:image:alt',
          content: 'alt goes here',
        },
        {
          property: 'twitter:card',
          content: 'summary',
        },
      ],
    },
]