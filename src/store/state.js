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

  festivalsVisitiors: {
    head: [
      {
        title: 'Name',
      },
      {
        title: 'Genre',
        modification: 'is-less-important',
      },
      {
        title: 'Ort',
        modification: 'is-less-important',
      },
      {
        title: 'Besucher',
        modification: 'is-number',
      },
    ],
    body: [
      [
        'Bochum Total',
        'Pop, Rock',
        'Bochum',
        '1.000.000',
      ],
      [
        'Maiwoche',
        'verschiedene Stilrichtungen',
        'Osnabrück',
        '800.000',
      ],
      [
        'Internationales Dixieland Festival Dresden',
        'Jazz',
        'Dresden',
        '500.000',
      ],
      [
        'Schlagermove',
        'Schlager',
        'Hamburg',
        '400.000',
      ],
      [
        'Das Fest',
        'Rock, Pop, Electro, Hip-Hop',
        'Karlsruhe',
        '400.000',
      ],
      [
        'Schlossgrabenfest',
        'Pop, Schlager, Rock',
        'Darmstadt',
        '400.000',
      ],
      [
        'Rock im Park',
        'Rock',
        'Nürnberg',
        '210.000',
      ],
      [
        'Bardentreffen',
        'Folk, Worlsmusik, Rock, Pop, Bühnen- und Straßenmusik',
        'Nürnberg',
        '200.000',
      ],
      [
        'Breminale',
        'Rock, Pop, Jazz, Elektro, Hip-Hop',
        'Bremen',
        '220.000',
      ],
      [
        'Düsseldorfer Jazz-Rally',
        'Jazz',
        'Düsseldorf',
        '300.000',
      ],
    ],
  },

  rankedBiggestFestivalsWorldwide: [
    {
      title: 'Donauinselfest',
      value: '2.800.000',
      modification: 'is-number',
    },
    {
      title: 'Mawazine',
      value: '2.500.000',
      modification: 'is-number',
    },
    {
      title: 'Rock in Rio',
      value: '1.300.000',
      modification: 'is-number',
    },
    {
      title: 'Streetparade',
      value: '1.100.000',
      modification: 'is-number',
    },
    {
      title: 'Bochum Total',
      value: '1.000.000',
      modification: 'is-number',
    },
  ],
};
