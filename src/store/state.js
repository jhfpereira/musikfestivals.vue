/*
 * store/actions.js
 */

export default {
  audioplayer: {
    isPlaying: false,
    selectedSong: null,
  },

  playlist: [],

  siteRecommendations: [
    {
      title: 'Maiwoche',
      text: 'Maiwoche ist der Name eines alljährlich stattfindenden Festes, das es sowohl in Osnabrück als auch in Herdecke gibt.',
      link: {
        to: '/maiwoche',
        text: 'mehr zur Maiwoche',
      },
      images: [
        {
          src: '/images/maiwoche-m.jpg',
          alt: '',
        },
        {
          src: '/images/maiwoche-marktplatz-m.jpg',
          alt: '',
        },
        {
          src: '/images/maiwoche-bigband-m.jpg',
          alt: '',
        },
      ],
    },
    {
      title: 'Musikfestivals',
      text: 'Musikfestivals sind in der Regel jährlich wiederkehrende musikalische Großveranstaltungen.',
      link: {
        to: '/',
        text: 'mehr zu Musikfestivals',
      },
      images: [
        {
          src: '/images/maiwoche-m.jpg',
          alt: '',
        },
      ],
    },
    {
      title: 'Open Air Festivals',
      text: 'Das Open Air ist ein live dargebotenes musikalisches Großereignis unter freiem Himmel.',
      link: {
        to: '/open-air-festivals',
        text: 'mehr zu Open Air Festivals',
      },
      images: [
        {
          src: '/images/duesseldorfer-jazz-rally-m.jpg',
          alt: '',
        },
        {
          src: '/images/dixieland-dresden-m.jpg',
          alt: '',
        },
        {
          src: '/images/bochum-total-m.jpg',
          alt: '',
        },
      ],
    },
  ],
};
