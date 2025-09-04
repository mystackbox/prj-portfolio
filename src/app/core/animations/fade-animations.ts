import {
  trigger,
  style,
  transition,
  animate,
  animation,
  useAnimation,
} from '@angular/animations';

//animation - fade
export const fadeAnimation = animation([
  style({
    opacity: '{{ elementStart }}',
  }),
  animate(
    '{{ time }}  ease-in',
    style({
      opacity: '{{ elementEnd }}',
    })
  ),
],
{
  params: { elementStart: 0, elementEnd: 0, time: '0ms' } 
});

//trigger - fade-in
export const fadeInTrigger = trigger('fadeIn', [
  transition(':enter', [
    useAnimation(fadeAnimation, {
      params: { elementStart: 0, elementEnd: 1, time: '1500ms' } 
    })
  ]),
]);

//trigger - fade-out
export const fadeOutTrigger = trigger('fadeOut', [
  transition(':leave', [
    useAnimation(fadeAnimation, {
      params: { elementStart: 0, elementEnd: 1, time: '1500ms' } 
    })
  ]),
]);




