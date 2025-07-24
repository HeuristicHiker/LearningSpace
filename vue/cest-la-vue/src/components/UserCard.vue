<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        },
    }
}
</script>

<template>
  <div>
    <p>
      {{ user.id }}
    </p>
  </div>
</template>
