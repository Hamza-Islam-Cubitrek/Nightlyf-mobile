const color = {
  white: '#FFFFFF',
  black: '#000000',
  green: '#00A376',
  red: '#FF585D',
  veryLightGreen: '#E5F6F1',
  gray: '#999999',
  veryLightGrey: '#f2f2f2',
  lightBlack: '#1F2227',
  darkBlue: '#0A0615',
  lightGray: '#B0A8A8',
  challengeCardText: '#5F646C',
  HeaderSweatChallenge: 'rgba(10, 6, 21, 1)',
};

const images = {};

const ListCards = {
  colors: [
    'rgba(255, 255, 255, 0.6)',
    'rgba(255, 255, 255, 0.7)',
    'rgba(255, 255, 255, 0.6)',
    'rgba(255, 255, 255, 0.5)',
  ],
};

const ios_shadow = {
  shadowColor: color.black,
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.2,
  shadowRadius: 4,
};

const ios_shadow_thinner = {
  shadowColor: color.black,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.2,
  shadowRadius: 3,
};

const ios_shadow_thicker = {
  shadowColor: color.black,
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.3,
  shadowRadius: 4,
};

const ios_shadow_bold = {
  shadowColor: color.black,
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.7,
  shadowRadius: 10,
};

const theme = {
  color,
  images,
  ListCards,
  ios_shadow,
  ios_shadow_thinner,
  ios_shadow_thicker,
  ios_shadow_bold,
};

export {theme};
