<template>
    <router-link :to="value._id">
        {{ value.title }}
    </router-link>
</template>

<script>
export default {
  name: 'NoteItemDrawer',
  props: {
    value: Object
  }
}
</script>
