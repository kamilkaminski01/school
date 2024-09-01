import { ref } from 'vue'
import { useEventListener } from './event'

export function useIsPhone() {
  const isPhone = ref(window.innerWidth <= 640)

  const handleResize = () => {
    isPhone.value = window.innerWidth <= 640
  }

  useEventListener(window, 'resize', handleResize)

  return { isPhone }
}
