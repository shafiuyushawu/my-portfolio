import React, { useState } from 'react';
import { faBars } from '@fontawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  TOTAL_SCREENS,
  GET_SCREEN_INDEX,
} from '../../../utilities/commonUtils';
import ScrollService from '../../../utilities/ScrollService';
import './Header.css';

const Header = () => {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) {
      return;
    }
    const screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0 || screenIndex >= TOTAL_SCREENS.length) return;
  };

  const currentScreenSubscription = ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen);

  const getHeaderOptionsClasses = (index) => {
    let classes = 'header-option ';
    if (index < TOTAL_SCREENS.length - 1) classes += 'header-option-seperator ';

    if (selectedScreen === index) classes += 'selected-header-option ';

    return classes;
  };

  const switchScreen = (index, screen) => {
    const screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: 'smooth' });
    setSelectedScreen(index);
    setShowHeaderOptions(false);
  };

  const getHeaderOptions = () => TOTAL_SCREENS.map((Screen, i) => (
    <button
      type="button"
      key={Screen.screen_name}
      className={getHeaderOptionsClasses(i)}
      onClick={() => switchScreen(i, Screen)}
    >
      <span>{Screen.screen_name}</span>
    </button>
  ));

  return (
    <button
      type="button"
      className="header-option"
      onClick={() => setShowHeaderOptions(!showHeaderOptions)}
    >
      <div className="header-parent">
        <button
          type="button"
          className="header-hamburger"
          onClick={() => setShowHeaderOptions(!showHeaderOptions)}
        >
          <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
        </button>
        <div className="header-logo">
          <span>SHAFIU~</span>
        </div>
        <div
          className={
            showHeaderOptions
              ? 'header-options show-hamburger-options'
              : 'header-options'
          }
        >
          {getHeaderOptions()}
        </div>
      </div>
    </button>
  );
};

export default Header;
