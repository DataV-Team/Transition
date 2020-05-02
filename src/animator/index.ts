import { Render } from '../types/animator'

function recursiveRender<T>(
  render: Render<T>,
  state: T[],
  endCallback: Function,
  frameIndex = 0,
  lastIndex = state.length - 1
): void {
  if (frameIndex > lastIndex) return endCallback()

  const currentState = state[frameIndex]

  requestAnimationFrame(() => {
    const next = render(currentState, frameIndex)

    if (next === false) return endCallback()

    recursiveRender(render, state, endCallback, ++frameIndex, lastIndex)
  })
}

export function createAnimator<T>(render: Render<T>) {
  return (state: T[]): Promise<void> => {
    return new Promise(resolve => {
      recursiveRender<T>(render, state, resolve)
    })
  }
}
