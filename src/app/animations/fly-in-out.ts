import { animate, state, style, transition, trigger } from '@angular/animations';

export function flyInOutAnimation() {
  return trigger('flyInOut', [
    state('in', style({opacity: 1, transform: 'translateX(0)'})),
    transition('void => *', [
      style({
        opacity: 0,
        transition: 'translateX(-100%)'
      }),
      animate('.2s ease-in-out')
    ]),
    transition('* => void', [
      style({
        opacity: 1,
        transition: 'translateX(100%)'
      }),
      animate('.2s ease-in-out')
    ])
  ]);
};
