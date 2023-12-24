<template>
  <div class="intr">
    <div class="intr-container">
      <sr-article-container ref="render"></sr-article-container>
    </div>
  </div>
</template>

<script>
import intr from '@/Document/documents/intr'
export default {
  mounted() {
    this.$refs.render.setArticle(intr.data)
    this.$refs.render.render()
  },
  beforeUnmount() {
    window.scrollTo(0, 0)
  }
}
</script>

<style>
.intr {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.intr-container {
  width: 100%;
  max-width: var(--container-max-width);
}
.intr-container h1 > span,
.intr-container h2 > span,
.intr-container h3 > span,
.intr-container h4 > span,
.intr-container h5 > span,
.intr-container h6 > span {
  scroll-margin-top: 50px;
}
</style>