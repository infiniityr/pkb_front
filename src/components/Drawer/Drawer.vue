<template>
    <v-navigation-drawer permanent app width="30%">
      <v-list>
        <v-list-item class="px-2">
          <h1>Personal Knowledge Base</h1>
        </v-list-item>
        <v-list-item class="align-start">
          <v-text-field v-model="search" label="Search" rounded filled></v-text-field>
          <v-btn fab>
              <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="note in filteredNotes" :key="note._id">
            <note-item-drawer :value="note"></note-item-drawer>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import NoteItemDrawer from './NoteItemDrawer'

export default {
  name: 'Drawer',
  components: {
    NoteItemDrawer
  },
  data: () => {
    return {
      search: ''
    }
  },
  computed: {
    ...mapGetters('note', [
      'notes'
    ]),
    filteredNotes () {
      return this.notes.filter((v) => v.title.toUpperCase().includes(this.search.toUpperCase()))
    }
  },
  methods: {
    ...mapActions('note', [
      'retrieveNotes'
    ])
  },
  mounted () {
    this.retrieveNotes()
  }
}
</script>
