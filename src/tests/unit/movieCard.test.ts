import { mount } from '@vue/test-utils'
import { setupVuetify } from '../vuetify-test-plugin'
import MovieCard from '@/components/MovieCard.vue'

const vuetify = setupVuetify()

test('renders movie info', () => {
  const tooltipStub = {
    template: '<div><slot name="activator" :props="{}" /><slot /></div>',
  }

  const wrapper = mount(MovieCard, {
    global: {
      plugins: [vuetify],
      stubs: {
        'v-card': { template: '<div><slot /></div>' },
        'v-chip': { template: '<div><slot /></div>' },
        'v-tooltip': tooltipStub,
        FavoriteButton: { template: '<button />' },
      },
    },
    props: {
      movie: { Title: 'Inception', Year: '2010', imdbID: '123' },
    },
  })

  expect(wrapper.text()).toContain('Inception')
  expect(wrapper.text()).toContain('2010')
})
