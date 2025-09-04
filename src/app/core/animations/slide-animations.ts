import {
  trigger,
  style,
  transition,
  animate,
  animation,
  useAnimation,
  query,
  stagger,
} from '@angular/animations';

//Animation slide
export const slideAnimation = animation(
  [
    style({ opacity: '{{ elementStart }}', transform: '{{ startPosition }}' }),
    animate(
      '{{ time }}  ease-in',
      style({ opacity: '{{ elementEnd }}', transform: '{{ endPosition }}' })
    ),
  ],
  {
    params: {
      elementStart: 0,
      elementEnd: 0,
      time: '100ms',
      startPosition: 0,
       endPosition: 0,
    }, // default values
  }
);

//trigger - sldie-in-from-top
export const slideInFromTopTrigger = trigger('slideInFromTop', [
  transition(':enter', [
    useAnimation(slideAnimation, {
      params: {
        elementStart: 0,
        elementEnd: 1,
        time: '700ms',
        startPosition: 'translateY(-100%)',
        endPosition: 'translateY(0)',
      },
    }),
  ]),
]);

//trigger - sldie-in-from-left
export const slideInFromLeftTrigger = trigger('slideInFromLeft', [
  transition(':enter', [
    useAnimation(slideAnimation, {
      params: {
        elementStart: 0,
        elementEnd: 1,
        time: '700ms',
        startPosition: 'translateX(-500%)',
        endPosition: 'translateY(0)',
      },
    }),
  ]),
]);

//trigger - sldie-in-from-right
export const slideInFromRightTrigger = trigger('slideInFromRight', [
  transition(':enter', [
    useAnimation(slideAnimation, {
      params: {
        elementStart: 0,
        elementEnd: 1,
        time: '1200ms',
        startPosition: 'translateX(20%)',
        endPosition: 'translateX(0)',
      },
    }),
  ]),
]);

//trigger - stagger-in-from-left
export const staggerInFromLeftTrigger = trigger('staggerInFromLeft', [
  transition(':enter', [
    query('.staggered-from-left', [
      stagger(150, [
        useAnimation(slideAnimation, {
          params: {
            elementStart: 0,
            elementEnd: 1,
            time: '1200ms',
            startPosition: 'translateX(-20%)',
            endPosition: 'translateX(0)',
          },
        }),
      ])
    ], { optional: true }),
  ]),
]);

//trigger - stagger-in-from-right
export const staggerInFromRightTrigger = trigger('staggerInFromRight', [
  transition(':enter', [
    useAnimation(slideAnimation, {
      params: {
        elementStart: 0,
        elementEnd: 1,
        time: '700ms',
        startPosition: 'translateX(500%)',
        endPosition: 'translateY(0)',
      },
    }),
  ]),
]);

//trigger - stagger-in-from-bottom
export const staggerInFromBottomTrigger = trigger('staggerInFromBottom', [
   transition(':enter', [
    query('.staggered-from-bottom', [
      stagger(150, [
        useAnimation(slideAnimation, {
          params: {
            elementStart: 0,
            elementEnd: 1,
            time: '1100ms',
            startPosition: 'translateY(50%)',
            endPosition: 'translateY(0)'
          }
        })
      ])
    ], { optional: true })
  ])
]);
