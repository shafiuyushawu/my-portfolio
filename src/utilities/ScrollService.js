import { Subject } from 'rxjs';
import { TOTAL_SCREENS } from './commonUtils';

class ScrollService {
  static scrollHandler = new ScrollService();

  static currentScreenBroadCaster = new Subject();

  static currentScreenFadeIn = new Subject();

  constructor() {
    window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);
  }

  scrollToHireMe = () => {
    const contactMeScreen = document.getElementById('Contact Me');
    if (!contactMeScreen) return;
    contactMeScreen.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToHome = () => {
    const homeScreen = document.getElementById('Home');
    if (!homeScreen) return;
    homeScreen.scrollIntoView({ behavior: 'smooth' });
  }

  isElementInView = (elem, type) => {
    const rec = elem.getBoundingClientRect();
    const elementTop = rec.top;
    const elementBotton = rec.Bottom;

    const patiallyVisible = elementTop < window.innerHeight && elementBotton >= 0;
    const completelyVisible = elementTop >= 0 && elementBotton <= window.innerHeight;

    switch (type) {
      case 'partial':
        return patiallyVisible;
      case 'complete':
        return completelyVisible;
      default:
        return false;
    }
  }

  checkCurrentScreenUnderViewport = (event) => {
    if (!event || Object.keys(event).length < 1) return;

    TOTAL_SCREENS.forEach((screen) => {
      const screenFromDom = document.getElementById(screen.screen_name);
      if (!screenFromDom) return;

      const fullyVisible = this.isElementInView(screenFromDom, 'complete');
      const partiallyVisible = this.isElementInView(screenFromDom, 'partial');

      const updatedScreen = { ...screen };

      if (partiallyVisible && !updatedScreen.alreadyRendered) {
        ScrollService.currentScreenFadeIn.next({
          fadeInScreen: updatedScreen.screen_name,
        });
        updatedScreen.alreadyRendered = true;
      } else if (fullyVisible) {
        ScrollService.currentScreenBroadCaster.next({
          screenInView: updatedScreen.screen_name,
        });
      }
    });
  }
}

export default ScrollService;
