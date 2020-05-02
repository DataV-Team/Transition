import { Render } from '../types/animator';
export declare function createAnimator<T>(render: Render<T>): (state: T[]) => Promise<void>;
