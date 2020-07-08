/*
 * based on https://stackoverflow.com/a/39545306
 */

class Swipe {
  constructor(element) {
    this.xDown = null;
    this.yDown = null;
    this.element = typeof (element) === 'string' ? document.querySelector(element) : element;
    this.boundTouchStart = this.touchStart.bind(this);
    this.boundTouchMove = this.touchMove.bind(this);
  }

  onLeft(callback) {
    this.onLeft = callback;
  }

  onRight(callback) {
    this.onRight = callback;
  }

  onUp(callback) {
    this.onUp = callback;
  }

  onDown(callback) {
    this.onDown = callback;
  }

  handleTouchMove(evt) {
    if (!this.xDown || !this.yDown) {
      return;
    }

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;

    this.xDiff = this.xDown - xUp;
    this.yDiff = this.yDown - yUp;

    if (Math.abs(this.xDiff) > Math.abs(this.yDiff)) { // Most significant.
      if (this.xDiff > 0 && this.onLeft) {
        this.onLeft();
      } else if (this.onRight) {
        this.onRight();
      }
    } else if (this.yDiff > 0 && this.onUp) {
      this.onUp();
    } else if (this.onDown) {
      this.onDown();
    }

    // Reset values.
    this.xDown = null;
    this.yDown = null;
  }

  init() {
    this.element.addEventListener('touchstart', this.boundTouchStart);
    this.element.addEventListener('touchmove', this.boundTouchMove);
  }

  unbind() {
    this.element.removeEventListener('touchstart', this.boundTouchStart);
    this.element.removeEventListener('touchmove', this.boundTouchMove);
  }

  touchStart(evt) {
    this.xDown = evt.touches[0].clientX;
    this.yDown = evt.touches[0].clientY;
  }

  touchMove(evt) {
    this.handleTouchMove(evt);
  }
}

export default Swipe;
