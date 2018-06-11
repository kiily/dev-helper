import anime from 'animejs';


export function setAnimation(animationName: string, targets: HTMLElement | HTMLElement[] | any, options: any = {}): any {
    return anime({ ...animationFactory(animationName, options), targets: targets, ...options });
}

export function animationFactory(animationName: string, options: any = {}): any {
    switch (animationName) {
        case FADE_IN_AND_SCALE:
            return fadeInAndScale(options);
        case SLIDE_IN_RIGHT:
            return slideInRight(options);
        default:
            return {};
    }
}

const FADE_IN_AND_SCALE = 'fade_in_and_scale';
export function fadeInAndScale(options?: { open: boolean}) {
    const start = options.open ? 0 : 1;
    const end = options.open ? 1 : 0;
    return {
        opacity: [start, end],
        scale: [start, end],
        easing: 'easeInOutQuart',
        fontSize: ['0em', '1.5em'],
        duration: 300
    }
}

const SLIDE_IN_RIGHT = 'slide_in_right'
export function slideInRight(options?: { open: boolean}) {
    const start = options.open ? '-100%' : 0;
    const end = options.open ? 0 : '-100%';
    return {
        easing: 'linear',
        translateX: [start,  end],
        opacity: [options.open ? 0 : 1, options.open ? 1 : 0],
        duration: 300
    }
}

export const animations = {
    FADE_IN_AND_SCALE,
    SLIDE_IN_RIGHT
}




