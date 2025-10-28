<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card class="pa-6">
          <v-card-title class="text-h5 font-weight-semibold">
            Testing Storybook
          </v-card-title>
          <v-card-subtitle class="mb-4">
            A narrative overview of the automated tests bundled with this project.
          </v-card-subtitle>

          <v-card-text class="py-4">
            <p class="mb-4">
              This storybook focuses on how we validate two critical areas of the app:
              the <strong>MovieCard</strong> presentation component and the <strong>movie store</strong>.
              Each test is written with <code>Vitest</code> and lives inside the <code>src/tests/unit</code> directory.
            </p>

            <v-divider class="my-4" />

            <section class="mb-4">
              <h3 class="text-subtitle-1 font-weight-medium mb-2">Test Scenarios</h3>
              <v-list density="compact" lines="two">
                <v-list-item title="MovieCard renders movie information correctly">
                  <v-list-item-subtitle>
                    Mounts the card with Vuetify stubs and checks that the title and year appear as expected.
                  </v-list-item-subtitle>
                </v-list-item>
                <v-list-item title="Movie store loads movies by title">
                  <v-list-item-subtitle>
                    Exercices the Pinia store to ensure search results update the movies collection.
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </section>

            <v-divider class="my-4" />

            <section class="mb-4">
              <h3 class="text-subtitle-1 font-weight-medium mb-2">How to Run the Tests</h3>
              <v-alert type="info" variant="tonal" class="mb-3">
                <code>npm test</code> &mdash; executes the targeted unit tests in a single run.
              </v-alert>
              <v-alert type="info" variant="tonal">
                <code>npm run test:report</code> &mdash; generates an HTML report under <code>test-results/</code>.
              </v-alert>
            </section>

            <v-divider class="my-4" />

            <section>
              <h3 class="text-subtitle-1 font-weight-medium mb-2">Behind the Scenes</h3>
              <p class="mb-2">
                Vitest runs in a JSDOM environment, enabling us to interact with Vue components just like a browser.
                We use <code>@vue/test-utils</code> to mount components and Pinia&apos;s testing helpers to isolate store state.
              </p>
              <p>
                By limiting the scope to these two specs we keep the feedback loop fast while ensuring the
                highest-risk UI and data flows behave as expected.
              </p>
            </section>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
