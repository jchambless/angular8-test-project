import {
  trigger,
  state,
  animate,
  style,
  transition
} from '@angular/core';

export function adminModuleAnimation() {
  return trigger('routerTransition', []);
}