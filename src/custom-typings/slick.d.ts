// Type definitions for Slick
// Project: http://kenwheeler.github.io/slick/
// Definitions by: Anton Burkovskii <https://github.com/burkovsky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ISlickPluginOptions {
    accessibility?: boolean;
    adaptiveHeight?: boolean;
    autoplay?: boolean;
    autoplaySpeed?: number;
    centerMode?: boolean;
    centerPadding?: string;
    cssEase?: string;
    customPaging?: Function;
    dots?: boolean;
    dotsClass?: string;
    draggable?: boolean;
    easing?: string;
    edgeFriction?: number;
    fade?: boolean;
    arrows?: boolean;
    appendArrows?: string;
    appendDots?: string;
    mobileFirst?: boolean;
    prevArrow?: string | Object;
    nextArrow?: string | Object;
    infinite?: boolean;
    initialSlide?: number;
    lazyLoad?: string;
    pauseOnFocus?: boolean;
    pauseOnHover?: boolean;
    pauseOnDotsHover?: boolean;
    respondTo?: string;
    responsive?: Object[];
    rows?: number;
    slide?: string;
    slidesPerRow?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    speed?: number;
    swipe?: boolean;
    swipeToSlide?: boolean;
    touchMove?: boolean;
    touchThreshold?: number;
    useCSS?: boolean;
    useTransform?: boolean;
    variableWidth?: boolean;
    vertical?: boolean;
    verticalSwiping?: boolean;
    rtl?: boolean;
    waitForAnimate?: boolean;
    zIndex?: number;
}

interface ISlick extends JQuery {
    slick(options?: ISlickPluginOptions): void;
}
