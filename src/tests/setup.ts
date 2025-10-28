import { beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

beforeEach(() => {
  // Activate a fresh Pinia instance for every test
  setActivePinia(createPinia())
})
