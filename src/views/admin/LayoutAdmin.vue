<script setup>
import NavBar from '@/components/AdminNavBar.vue'
 </script>

<template>
  <NavBar />
    <router-view/>
</template>
<script>

export default {
  name: 'LayoutAdmin',
}
</script>