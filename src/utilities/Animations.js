class Animation {
  static animation = new Animation();

  fadeInScreen = (screenName) => {
    const screen = document.getElementById('screen_name');
    if (!screenName || !screen) return;

    screen.style.opacity = '5';
    screen.style.transform = 'translateY(1px)';
  }
}

export default Animation;
