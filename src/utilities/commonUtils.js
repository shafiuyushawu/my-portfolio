import Home from '../PortfolioContainer/Home/Home';

const TOTAL_SCREENS = [
  {
    screen_name: 'Home',
    component: Home,
  },
];

const GET_SCREEN_INDEX = (screenName) => {
  if (!screenName) return -1;
  for (let i = 0; i < TOTAL_SCREENS.length; i += 1) {
    if (TOTAL_SCREENS[i].screen_name === screenName) return i;
  }
  return -1;
};

export { TOTAL_SCREENS, GET_SCREEN_INDEX };
