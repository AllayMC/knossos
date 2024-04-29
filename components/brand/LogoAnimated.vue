<template>
  <div>
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd">
      <!--  logo  -->
      <path class="large"
            d="M 13.939 20.524 L 11.939 19.524 M 13.939 20.524 L 15.939 19.524 M 7.939 17.524 L 5.939 16.524 L 5.939 14.024 M 5.939 9.024 L 5.939 6.524 M 5.939 6.524 L 7.939 5.524 M 11.939 3.524 L 13.939 2.524 L 15.939 3.524 M 19.939 5.524 L 21.939 6.524 M 21.939 6.524 L 21.939 9.024 M 19.939 17.524 L 21.939 16.524 L 21.939 14.024"
            stroke="var(--color-special-bedrock)" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
      <path class="small"
            d="M 13.939 20.524 L 13.939 18.024 M 5.939 6.524 L 7.939 7.524 M 21.939 6.524 L 19.939 7.524 M 13.939 10.524 L 11.939 9.524 M 13.939 10.524 L 15.939 9.524 M 13.939 10.524 L 13.939 13.024"
            stroke="var(--color-special-bedrock)" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
  </div>
</template>

<script setup>
const { $anime } = useNuxtApp()
const loading = useLoading()
onMounted(() => {
  const large = $anime({
    targets: 'div svg .large',
    d: [
      { value: 'M 13.939 20.524 L 7.972 17.54 M 13.939 20.524 L 19.888 17.54 M 7.939 17.524 L 5.939 16.524 L 5.939 14.024 M 5.939 14.019 L 5.939 6.524 M 5.939 6.524 L 11.923 3.534 M 11.939 3.524 L 13.939 2.524 L 15.939 3.524 M 15.955 3.531 L 21.939 6.524 M 21.939 6.524 L 21.939 13.99 M 19.939 17.524 L 21.939 16.524 L 21.939 14.024' }
    ],
    easing: 'easeInOutSine',
    duration: 1000,
    direction: 'alternate',
    loop: true
  })
  const small = $anime({
    targets: 'div svg .small',
    d: [
      { value: 'M 13.939 20.524 L 13.939 18.024 M 5.939 6.524 L 7.939 7.524 M 21.939 6.524 L 19.939 7.524 M 13.939 10.524 L 7.967 7.538 M 13.939 10.524 L 19.954 7.516 M 13.939 10.524 L 13.939 17.989' }
    ],
    easing: 'easeInOutSine',
    duration: 1000,
    direction: 'alternate',
    loop: true
  })
  if (!loading.value) {
    large.pause()
    small.pause()
  }
  watch(loading, (n, o) => {
    if (n) {
      large.play()
      small.play()
    } else {
      large.pause()
      large.reset()
      small.pause()
      small.reset()
    }
  })
})
</script>


<style lang="scss" scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  margin-top: 1rem;

  svg {
    width: 5rem;
    height: 5rem;
    position: absolute;
  }
}
</style>
