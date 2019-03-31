const defaultRadius = 10;
const lastLevelRadius = 5;

const reignDates = {
  petri: [1682, 1725],
  ekaterinai: [1725, 1727],
  petrii: [1727, 1730],
  anna: [1730, 1740.5],
  ivanvi: [1740.5, 1741.5],
  elizaveta: [1741.5, 1762],
  petriii: [1762, 1762.5],
  ekaterinaii: [1762.5, 1796.75],
  paveli: [1796.75, 1801],
  alexandri: [1801, 1825],
  nikolayi: [1825, 1855],
  alexandrii: [1855, 1881],
  alexandriii: [1881, 1894],
  nikolayii: [1894, 1917]
};

const bornDates = {
  petri: 1672,
  ekaterinai: 1684,
  petrii: 1715,
  anna: 1693,
  ivanvi: 1740,
  elizaveta: 1709,
  petriii: 1728,
  ekaterinaii: 1729,
  paveli: 1754,
  alexandri: 1777,
  nilolayi: 1796,
  alexandrii: 1818,
  alexandriii: 1845,
  nikolayii: 1868
};

const config = [
  {
    key: 'petri',
    color: '#883813',
    levels: [
      {
        level: 'first',
        points: [bornDates.petri, reignDates.petri[0]],
        radiusRight: defaultRadius
      },
      {
        level: 'throne',
        points: reignDates.petri,
        radiusLeft: defaultRadius,
        radiusRight: lastLevelRadius
      },
    ]
  },
  {
    key: 'ekaterinai',
    color: '#ec3000',
    levels: [
      {
        level: 'first',
        points: [bornDates.ekaterinai, reignDates.petri[1]],
        radiusRight: defaultRadius
      },
      {
        level: 'throne',
        points: reignDates.ekaterinai,
        radiusLeft: defaultRadius,
        radiusRight: lastLevelRadius
      },
    ]
  },
  {
    key: 'petrii',
    color: '#f27300',
    levels: [
      {
        level: 'second',
        points: [bornDates.petrii, reignDates.petri[1]],
        radiusRight: defaultRadius
      },
      {
        level: 'first',
        points: reignDates.ekaterinai,
        radiusRight: defaultRadius,
        radiusLeft: defaultRadius
      },
      {
        level: 'throne',
        points: reignDates.petrii,
        radiusLeft: defaultRadius,
        radiusRight: defaultRadius
      },
      {
        level: 'out',
        points: [reignDates.petrii[1], reignDates.petrii[1]],
        radiusLeft: 0,
        radiusRight: 0,
      },
    ]
  },
  {
    key: 'anna',
    color: '#fec900',
    levels: [
      {
        level: 'third',
        points: [bornDates.anna, reignDates.petri[1]],
        radiusRight: defaultRadius
      },
      {
        level: 'second',
        points: reignDates.ekaterinai,
        radiusRight: defaultRadius,
        radiusLeft: defaultRadius
      },
      {
        level: 'first',
        points: reignDates.petrii,
        radiusRight: defaultRadius,
        radiusLeft: defaultRadius
      },
      {
        level: 'throne',
        points: reignDates.anna,
        radiusLeft: defaultRadius,
        radiusRight: lastLevelRadius
      },
    ]
  },
  {
    key: 'ivanvi',
    color: '#7acccf',
    levels: [
      {
        level: 'first',
        points: [bornDates.ivanvi, reignDates.anna[1]],
        radiusLeft: 3,
        radiusRight: 3,
        doNotRenderHorizontal: true,
      },
      {
        level: 'throne',
        points: reignDates.ivanvi,
        radiusLeft: 5,
        radiusRight: 5,
      },
      {
        level: 'out',
        points: [reignDates.ivanvi[1], 1764],
        radiusRight: lastLevelRadius,
        radiusLeft: defaultRadius,
      }
    ]
  },
  {
    key: 'elizaveta',
    color: '#afd500',
    levels: [
      {
        level: 'throne',
        points: [bornDates.elizaveta - 1, bornDates.elizaveta - 1],
        radiusRight: defaultRadius * 2,
        doNotRenderHorizontal: true
      },
      {
        level: 'fourth',
        points: [bornDates.elizaveta, reignDates.petri[1]],
        radiusRight: defaultRadius
      },
    ]
  },
  {
    key: 'elizaveta',
    color: '#afd500',
    levels: [
      {
        level: 'first',
        points: [bornDates.elizaveta - 1, bornDates.elizaveta - 1],
        radiusRight: defaultRadius * 3,
        doNotRenderHorizontal: true
      },
      {
        level: 'fourth',
        points: [bornDates.elizaveta, reignDates.petri[1]],
        radiusRight: defaultRadius
      },
      {
        level: 'third',
        points: reignDates.ekaterinai,
        radiusRight: defaultRadius,
        radiusLeft: defaultRadius
      },
      {
        level: 'second',
        points: reignDates.petrii,
        radiusRight: defaultRadius,
        radiusLeft: defaultRadius
      },
      {
        level: 'first',
        points: [reignDates.anna[0], bornDates.ivanvi],
        radiusLeft: defaultRadius,
        radiusRight: defaultRadius
      },
      {
        level: 'second',
        points: [bornDates.ivanvi, reignDates.anna[1]],
        radiusLeft: 3,
        radiusRight: 3,
        doNotRenderHorizontal: true
      },
      {
        level: 'first',
        points: reignDates.ivanvi,
        radiusLeft: defaultRadius,
        radiusRight: 5,
        doNotRenderHorizontal: true
      },
      {
        level: 'throne',
        points: reignDates.elizaveta,
        radiusLeft: defaultRadius,
        radiusRight: lastLevelRadius
      },
    ]
  },
  {
    key: 'petriii',
    color: '#33b125',
    levels: [
      {
        level: 'third',
        points: [bornDates.petriii, reignDates.petrii[1]],
        radiusRight: defaultRadius
      },
      {
        level: 'second',
        points: [reignDates.anna[0], bornDates.ivanvi],
        radiusLeft: defaultRadius,
        radiusRight: defaultRadius
      },
      {
        level: 'third',
        points: [bornDates.ivanvi, reignDates.anna[1]],
        radiusLeft: 3,
        radiusRight: 3,
        doNotRenderHorizontal: true
      },
      {
        level: 'second',
        points: reignDates.ivanvi,
        radiusLeft: defaultRadius,
        radiusRight: 5,
        doNotRenderHorizontal: true
      },
      {
        level: 'first',
        points: reignDates.elizaveta,
        radiusLeft: defaultRadius,
        radiusRight: defaultRadius
      },
      {
        level: 'throne',
        points: reignDates.petriii,
        radiusLeft: 4,
        radiusRight: 1,
        doNotRenderHorizontal: true
      },
      {
        level: 'outpetriii',
        points: [reignDates.petriii[1], reignDates.petriii[1]],
        radiusLeft: 0,
        radiusRight: 0,
        doNotRenderHorizontal: true
      }
    ]
  },
  {
    key: 'ekaterinaii',
    color: '#b2c2ea',
    levels: [
      {
        level: 'third',
        points: [bornDates.ekaterinaii + 2, reignDates.anna[1]],
        radiusRight: defaultRadius
      },
      {
        level: 'fourth',
        points: [bornDates.ivanvi, reignDates.anna[1]],
        radiusLeft: 3,
        radiusRight: 3,
        doNotRenderHorizontal: true
      },
      {
        level: 'third',
        points: reignDates.ivanvi,
        radiusLeft: defaultRadius,
        radiusRight: 5,
        doNotRenderHorizontal: true
      },
      {
        level: 'second',
        points: reignDates.elizaveta,
        radiusLeft: defaultRadius,
        radiusRight: defaultRadius
      },
      {
        level: 'first',
        points: reignDates.petriii,
        radiusLeft: 4,
        radiusRight: 4,
        doNotRenderHorizontal: true
      },
      {
        level: 'throne',
        points: reignDates.ekaterinaii,
        radiusLeft: defaultRadius,
        radiusRight: lastLevelRadius
      },
    ]
  },
  {
    key: 'paveli',
    color: '#1bb9fb',
    levels: [
      {
        level: 'first',
        points: [bornDates.paveli - 1, bornDates.paveli - 1],
        radiusRight: defaultRadius * 3,
        doNotRenderHorizontal: true
      },
      {
        level: 'third',
        points: [bornDates.paveli, reignDates.elizaveta[1]],
        radiusRight: defaultRadius
      },
    ]
  },
  {
    key: 'paveli',
    color: '#1bb9fb',
    levels: [
      {
        level: 'second',
        points: [bornDates.paveli - 1, bornDates.paveli - 1],
        radiusRight: defaultRadius * 3,
        doNotRenderHorizontal: true
      },
      {
        level: 'third',
        points: [bornDates.paveli, reignDates.elizaveta[1]],
        radiusRight: defaultRadius
      },
      {
        level: 'second',
        points: reignDates.petriii,
        radiusLeft: 4,
        radiusRight: 4,
        doNotRenderHorizontal: true
      },
      {
        level: 'first',
        points: reignDates.ekaterinaii,
        radiusLeft: defaultRadius,
        radiusRight: defaultRadius
      },
      {
        level: 'throne',
        points: reignDates.paveli,
        radiusLeft: defaultRadius,
        radiusRight: lastLevelRadius
      },
    ]
  },
  {
    key: 'alexandri',
    color: '#0972c7',
    levels: [
      {
        level: 'first',
        points: [bornDates.alexandri - 1, bornDates.alexandri - 1],
        radiusRight: defaultRadius * 2,
        doNotRenderHorizontal: true
      },
      {
        level: 'second',
        points: [bornDates.alexandri, reignDates.ekaterinaii[1]],
        radiusRight: defaultRadius
      },
      {
        level: 'first',
        points: reignDates.paveli,
        radiusLeft: defaultRadius,
        radiusRight: defaultRadius
      },
      {
        level: 'throne',
        points: reignDates.alexandri,
        radiusLeft: defaultRadius,
        radiusRight: lastLevelRadius
      }
    ]
  },
  {
    key: 'nikolayi',
    color: '#792094',
    levels: [
      {
        level: 'first',
        points: [bornDates.nikolayi - 1, bornDates.nikolayi - 1],
        radiusRight: defaultRadius * 2,
        doNotRenderHorizontal: true
      },
      {
        level: 'third',
        points: [bornDates.nilolayi, reignDates.ekaterinaii[1]],
        radiusRight: defaultRadius,
        doNotRenderHorizontal: true
      },
      {
        level: 'second',
        points: reignDates.paveli,
        radiusLeft: defaultRadius,
        radiusRight: defaultRadius
      },
      {
        level: 'first',
        points: reignDates.alexandri,
        radiusLeft: defaultRadius,
        radiusRight: defaultRadius
      },
      {
        level: 'throne',
        points: reignDates.nikolayi,
        radiusLeft: defaultRadius,
        radiusRight: lastLevelRadius
      },
    ]
  },
  {
    key: 'alexandrii',
    color: '#bcbec0',
    levels: [
      {
        level: 'first',
        points: [bornDates.alexandrii - 1, bornDates.alexandrii - 1],
        radiusRight: defaultRadius * 2,
        doNotRenderHorizontal: true
      },
      {
        level: 'second',
        points: [bornDates.alexandrii, reignDates.alexandri[1]],
        radiusRight: defaultRadius
      },
      {
        level: 'first',
        points: reignDates.nikolayi,
        radiusLeft: defaultRadius,
        radiusRight: defaultRadius
      },
      {
        level: 'throne',
        points: reignDates.alexandrii,
        radiusLeft: defaultRadius,
        radiusRight: lastLevelRadius
      }
    ]
  },
  {
    key: 'alexandriii',
    color: '#6d6e71',
    levels: [
      {
        level: 'first',
        points: [bornDates.alexandriii - 1, bornDates.alexandriii - 1],
        radiusRight: defaultRadius * 2,
        doNotRenderHorizontal: true
      },
      {
        level: 'second',
        points: [bornDates.alexandriii, reignDates.nikolayi[1]],
        radiusRight: defaultRadius
      },
      {
        level: 'first',
        points: reignDates.alexandrii,
        radiusLeft: defaultRadius,
        radiusRight: defaultRadius
      },
      {
        level: 'throne',
        points: reignDates.alexandriii,
        radiusLeft: defaultRadius,
        radiusRight: lastLevelRadius
      }
    ]
  },
  {
    key: 'nikolayii',
    color: '#242021',
    levels: [
      {
        level: 'first',
        points: [bornDates.nikolayii - 1, bornDates.nikolayii - 1],
        radiusRight: defaultRadius * 2,
        doNotRenderHorizontal: true
      },
      {
        level: 'second',
        points: [bornDates.nikolayii, reignDates.alexandrii[1]],
        radiusRight: defaultRadius
      },
      {
        level: 'first',
        points: reignDates.alexandriii,
        radiusLeft: defaultRadius,
        radiusRight: defaultRadius
      },
      {
        level: 'throne',
        points: reignDates.nikolayii,
        radiusLeft: defaultRadius,
        radiusRight: defaultRadius
      },
      {
        level: 'outnickolayii',
        points: [1917, 1918],
        radiusLeft: defaultRadius,
        radiusRight: defaultRadius,
        doNotRenderHorizontal: true
      }
    ]
  },
];

export default config.reverse();