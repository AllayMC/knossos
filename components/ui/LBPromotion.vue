<template>
  <div class="GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD">
    <a
      :href="`https://discord.gg/lifeblock`"
      rel="noopener nofollow sponsored"
      target="_blank"
    ></a>
    <div class="GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD-0">
      <div class="GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD-1">
        <div class="GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD-2">
          <img id="lb" src="assets/icons/lifeblock.png" alt="lifeblock" />
          <span>
            <span> Sponsored by the </span>
            <strong>Lifeblock Network</strong>
            <span> - try <strong>play-lifeblock.net</strong></span>
          </span>
        </div>
      </div>
      <div class="GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD-4">
        <a rel="noopener sponsored" target="_blank" href="https://adrinth.com"> Ad via Adrinth </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD {
  position: relative;
  margin-bottom: var(--gap-lg);
  background: var(--color-ad);
  border: 1px solid var(--color-ad-raised);
  border-radius: var(--radius-lg);
  container-type: inline-size;
  width: 100%;

  > a {
    position: absolute;
    inset: 0;
  }

  &:has(> a:first-child:active) {
    scale: 0.99;
  }
}

.GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD-0 {
  font-size: 14px;
  line-height: 1.3em;
}

.GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD-1 {
  color: var(--color-base);
  padding: 1em;
  text-align: left;
}

.GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD-2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-base);
  margin-right: 7.5rem;

  #lb {
    height: 1.3rem;
    width: 1.3rem;
  }

  &:hover {
    text-decoration: none;
  }
}

.GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD-2 b,
.GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD-2 strong {
  color: var(--color-ad-highlight);
}

.GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD-3 {
  padding-top: 1px;
  height: 1.5rem;
  width: auto;
  flex-shrink: 0;
}

.GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD-4 a {
  position: absolute;
  bottom: -1px;
  right: -1px;
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8em;
  color: var(--color-ad-contrast);
  background: var(--color-ad-raised);
  letter-spacing: 0.1ch;
  margin: 0;
  padding: 2px 10px;
  border-top-left-radius: var(--radius-lg);
  border-bottom-right-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    text-decoration: none;
  }
}

@media screen and (max-width: 800px) {
  .GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD-2 {
    margin-bottom: 0.5rem;
  }
  .GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD-2 a {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
