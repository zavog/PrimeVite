import { breakpointsTailwind } from '@vueuse/core'

const { smaller } = useBreakpoints(breakpointsTailwind)

export function useSmallerClass() {
  return { smallerClass }
}

/**
 * Returns a ref that is either the given class name or undefined depending on the given breakpoint
 */
function smallerClass(
  breakpoint: 'sm' | 'md' | 'lg' | 'xl' | '2xl',
  className: string,
) {
  const isSmaller = smaller(breakpoint)
  return computed(() => (isSmaller.value ? className : undefined))
}

// a "biggerClass" function could be added the same way.
