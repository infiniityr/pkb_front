<template>
  <div>
    <v-app-bar>
      <h2>{{ title }}</h2>
      <v-spacer></v-spacer>
      button
    </v-app-bar>
    <div v-html="compiledNote" class="pa-3"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NoteVisu',
  computed: {
    ...mapGetters('note', [
      'note'
    ]),
    compiledNote () {
      return this.$marked(this.note(this.$route.params.id)?.text || '')
    },
    title () {
      return this.note(this.$route.params.id)?.title || ''
    }
  }
}
</script>

<style>

</style>
