<script>
export default {};
</script>

<template>
  <div class="grid">
    <div>
      <slot name="one" />
    </div>
    <div>
      <slot name="two" />
    </div>
  </div>
</template>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>
