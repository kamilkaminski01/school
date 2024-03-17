import { ref } from 'vue'
import { useEventListener } from './event'

export function useIsTablet() {
  const isTablet = ref(window.innerWidth <= 768)

  const handleResize = () => {
    isTablet.value = window.innerWidth <= 768
  }

  useEventListener(window, 'resize', handleResize)

  return { isTablet }
}
