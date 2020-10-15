<template>
    <v-navigation-drawer permanent app width="30%">
      <v-list>
        <v-list-item class="px-2">
          <h1>Personal Knowledge Base</h1>
        </v-list-item>
        <v-list-item>
          <v-text-field label="Search" rounded filled></v-text-field>
          <v-btn fab>
              <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="note in notes" :key="note._id">
            <note-item-drawer :v-model="note"></note-item-drawer>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import NoteItemDrawer from './NoteItemDrawer'

export default {
  name: 'Drawer',
  components: {
    NoteItemDrawer
  },
  data: () => {
    return {
      notes: [
        {
          _id: '5f70a3ae24ef4d02c6a1d80d',
          title: 'Ma super note',
          text: 'Yololo denzkdze',
          createdAt: '2020-09-27T14:37:34.581Z',
          updatedAt: '2020-09-27T14:37:34.583Z',
          __v: 0
        },
        {
          _id: '5f70d5d39ddb390387778069',
          title: 'Une autre note',
          text: 'Yololo denzkdze',
          createdAt: '2020-09-27T18:11:31.593Z',
          updatedAt: '2020-09-27T18:11:44.419Z',
          __v: 0
        }
      ]
    }
  }
}
</script>
