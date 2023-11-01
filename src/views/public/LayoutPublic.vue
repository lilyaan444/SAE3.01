<script setup>
import NavBar from '@/components/PublicNavBar.vue'
 </script>

<template>
  <NavBar />
    <router-view/>
</template>
<script>

export default {
  name: 'LayoutPublic',
}
</script>