<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold">Blog Detail</h1>
    <p>Blog ID: {{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  name: "BlogDetail",
};
</script>
