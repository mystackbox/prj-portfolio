import {
  trigger,
  style,
  transition,
  animate,
  animation,
  useAnimation,
  query,
  stagger,
  state,
} from '@angular/animations';

/* ----------------------------  FADES  -------------------------------- */
//animation - fade
export const fadeAnimation = animation(
  [
    style({
      opacity: '{{ opecityBefore }}',
    }),
    animate(
      '{{ time }}  ease-in',
      style({
        opacity: '{{ opecityAfter }}',
      })
    ),
  ],
  {
    params: { opecityBefore: 0, opecityAfter: 0, time: '0ms' },
  }
);

//trigger - fade-in
export const fadeInTrigger = trigger('animateFadeIn', [
  transition(':enter', [
    useAnimation(fadeAnimation, {
      params: { opecityBefore: 0, opecityAfter: 1, time: '1500ms' },
    }),
  ]),
]);

//trigger - fade-out
export const fadeOutTrigger = trigger('animateFadeOut', [
  transition(':leave', [
    useAnimation(fadeAnimation, {
      params: { opecityBefore: 1, opecityAfter: 0, time: '1600ms' },
    }),
  ]),
]);





/* ----------------------------  ZOOM  -------------------------------- */
//animation - zoom
export const zoomAnimation = animation(
  [
    style({
      transform: '{{ scaleBefore }}',
    }),
    animate(
      '{{ time }}  ease-in',
      style({
        transform: '{{ scaleAfter }}',
      })
    ),
  ],
  {
    params: { scaleBefore: 0, scaleAfter: 0, time: '0ms' },
  }
);

//trigger - zoom-in
export const zoomInTrigger = trigger('animateZoomIn', [
  transition(':enter', [
    useAnimation(zoomAnimation, {
      params: {
        scaleBefore: 'scale(0)',
        scaleAfter: 'scale(1)',
        time: '1200ms',
      },
    }),
  ]),
]);

//trigger - zoom-out
export const zoomOutTrigger = trigger('animateZoomOut', [
  transition(':leave', [
    useAnimation(zoomAnimation, {
      params: {
        scaleBefore: 'scale(1)',
        scaleAfter: 'scale(0)',
        time: '1500ms',
      },
    }),
  ]),
]);




/* ----------------------------  SLIDES  ------------------------------ */
//Animation - slide
export const slideAnimation = animation(
  [
    style({
      opacity: '{{ opecityBefore }}',
      transform: '{{ positionBefore }}',
    }),
    animate(
      '{{ time }}  ease-in',
      style({ opacity: '{{ opecityAfter }}', transform: '{{ positionAfter }}' })
    ),
  ],
  {
    params: {
      opecityBefore: 0,
      opecityAfter: 0,
      time: '0ms',
      positionBefore: 0,
      positionAfter: 0,
    },
  }
);

//trigger - sldie-in-from-top
export const slideInFromTopTrigger = trigger('animateSlideInFromTop', [
  transition(':enter', [
    useAnimation(slideAnimation, {
      params: {
        opecityBefore: 0,
        opecityAfter: 1,
        time: '1500ms',
        positionBefore: 'translateY(-50%)',
        positionAfter: 'translateY(0)',
      },
    }),
  ]),
]);

//Trigger - sldie-in-from-bottom
export const slideInFromBottomTrigger = trigger('animateSlideInFromBottom', [
  transition(':enter', [
    useAnimation(slideAnimation, {
      params: {
        opecityBefore: 0,
        opecityAfter: 1,
        time: '1500ms',
        positionBefore: 'translateY(50%)',
        positionAfter: 'translateY(0)',
      },
    }),
  ]),
]);

//Trigger - sldie-in-from-left
export const slideInFromLeftTrigger = trigger('animateSlideInFromLeft', [
  transition(':enter', [
    useAnimation(slideAnimation, {
      params: {
        opecityBefore: 0,
        opecityAfter: 1,
        time: '1500ms',
        positionBefore: 'translateX(-50%)',
        positionAfter: 'translateY(0)',
      },
    }),
  ]),
]);

//Trigger - sldie-in-from-right
export const slideInFromRightTrigger = trigger('animateSlideInFromRight', [
  transition(':enter', [
    useAnimation(slideAnimation, {
      params: {
        opecityBefore: 0,
        opecityAfter: 1,
        time: '1500ms',
        positionBefore: 'translateX(50%)',
        positionAfter: 'translateX(0)',
      },
    }),
  ]),
]);

//Trigger - toggleSlideTrigger
export const toggleSlideTrigger = trigger('animateToggleSlide', [
  transition(':enter', [
    // when element is added
    style({ opacity: 0 }),
    animate('2000ms ease-in', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    // when element is removed
    animate('1200ms ease-in', style({ opacity: 0 })),
  ]),
]);




/* ----------------------------  STAGGERS  -------------------------------- */
//Animation - forward Stagger
export const forwardStaggerAnimation = animation(
  [
    query(
      '.animate-stagger',
      [
        style({ opacity: 0 }),
        stagger(150, [animate('{{duration}}ms {{delayTime}}ms ease-in')]),
      ],
      { optional: true }
    ),
  ],
  {
    params: {
      duration: 400,
      delayTime: 300,
    },
  }
);

//Trigger - forwardStagger
export const forwardStaggerTrigger = trigger('animateForwardStagger', [
  transition(':enter', [
    useAnimation(forwardStaggerAnimation, {
      params: {
        duration: 500,
        delayTime: 300,
      },
    }),
  ]),
]);

//Animation - reverseStagger
export const reverseStaggerAnimation = animation(
  [
    query(
      '.animate-stagger',
      [
        style({ opacity: 0 }),
        stagger(-150, [animate('{{duration}}ms ease-in')]),
      ],
      { optional: true }
    ),
  ],
  {
    params: {
      duration: 400,
    },
  }
);

//Trigger - reverseStagger
export const reverseStaggerTrigger = trigger('animateReverseStagger', [
  transition(':enter', [
    useAnimation(reverseStaggerAnimation, {
      params: {
        duration: 500,
      },
    }),
  ]),
]);



//Animation - Generic Stagger-with-Slide 
export const slideforwardStaggerAnimation = animation(
  [
    query(
      '.animate-stagger',
      [
        style({
          opacity: '{{ opecityBefore }}',
          transform: '{{ positionBefore }}',
        }),
        stagger(150, [
          animate('{{duration}}ms {{delayTime}}ms ease-in'),
          style({
            opacity: '{{ opecityAfter }}',
            transform: '{{ positionAfter }}',
        })
        ]),
      ],
      { optional: true }
    ),
  ],
  {
    params: {
      duration: 0,
      delayTime: 0,
      opecityBefore: 0,
      positionBefore: 0,
      positionAfter: 0,
    },
  }
);

//Trigger - stagger-in-from-left
export const staggerInFromLeftTrigger = trigger('staggerInFromLeft', [
  transition(':enter', [
          useAnimation(slideforwardStaggerAnimation, {
            params: {
              opecityBefore: 0,
              positionBefore: 'translateX(-10%)',
              duration: 800,
              delayTime: 200,   
              opecityAfter: 1,           
              positionAfter: 'translateX(0)',
            },
          }),
    ]),
  ]);

//Animation - Stagger-with-Slide
export const staggerSlideAnimation = animation(
  [
    style({
      opacity: '{{ opecityBefore }}',
      transform: '{{ positionBefore }}',
    }),
    animate(
      '{{ time }}  ease-in',
      style({ opacity: '{{ opecityAfter }}', transform: '{{ positionAfter }}' })
    ),
  ],
  {
    params: {
      opecityBefore: 0,
      opecityAfter: 0,
      time: '100ms',
      positionBefore: 0,
      positionAfter: 0,
    },
  }
);

//Trigger - stagger-in-from-left
export const _staggerInFromLeftTrigger = trigger('staggerInFromLeft', [
  transition(':enter', [
    query(
      '.staggered-from-left',
      [
        stagger(150, [
          useAnimation(slideAnimation, {
            params: {
              opecityBefore: 0,
              opecityAfter: 1,
              time: '1500ms',
              positionBefore: 'translateX(-20%)',
              positionAfter: 'translateX(0)',
            },
          }),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);

//Trigger - stagger-in-from-right
export const staggerInFromRightTrigger = trigger('staggerInFromRight', [
  transition(':enter', [
    useAnimation(slideAnimation, {
      params: {
        opecityBefore: 0,
        opecityAfter: 1,
        time: '1500ms',
        positionBefore: 'translateX(500%)',
        positionAfter: 'translateY(0)',
      },
    }),
  ]),
]);

//Trigger - stagger-in-from-top
export const staggerInFromTopTrigger = trigger('staggerInFromTop', [
  transition(':enter', [
    query(
      '.staggered-from-top',
      [
        stagger(150, [
          useAnimation(slideAnimation, {
            params: {
              opecityBefore: 0,
              opecityAfter: 1,
              time: '1500ms',
              positionBefore: 'translateY(-50%)',
              positionAfter: 'translateY(0)',
            },
          }),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);

//Trigger - stagger-in-from-bottom
export const staggerInFromBottomTrigger = trigger('staggerInFromBottom', [
  transition(':enter', [
    query(
      '.animate-stagger',
      [
        stagger(150, [
          useAnimation(slideAnimation, {
            params: {
              opecityBefore: 0,
              opecityAfter: 1,
              time: '1500ms',
              positionBefore: 'translateY(50%)',
              positionAfter: 'translateY(0)',
            },
          }),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);

/* ----------------------------  COMBINATIONS  -------------------------------- */
