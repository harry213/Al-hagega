<template>
  <router-view :key="$route.path" />
</template>
<script>
  export default {
    name: 'App',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'الحقيقة ديلي برس',
      // all titles will be injected into this template
      titleTemplate: '%s | الحقيقة ديلي برس'
    }
  }
</script>
<style>

</style>
