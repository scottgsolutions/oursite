<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-content">
        <div class="text-content">
          <h1 class="hero-title">
            <span class="title-line"><span class="accent">Sites</span> that win work<span class="accent">.</span></span>
            <span class="title-line"><span class="accent">Systems</span> that get work done<span class="accent">.</span></span>
          </h1>
          <p class="hero-subtitle">
            Small businesses thrive when they can focus on delivering value to clients.<br>
            I help the rest fall into place.
          </p>
          <div class="cta-buttons">
            <button class="btn btn-primary cta">Get Started Free</button>
            <button class="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div class="hero-image">
          <img src="/assets/laptop.svg" alt="Laptop showing website" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {

  /* background-color: color-mix(in srgb, var(--black) 99%, transparent); */
  color: var(--white);
  
  /* min-height: 75vh; */
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background: url('/grid-pattern.svg') repeat; */
  opacity: 0.1;
  z-index: 1;
}
.container{
  max-width: 100%;
  margin: 0 auto;
  padding: 110px 0;
}
.hero-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: var(--fontsize-h1);
  font-weight: var(--fontweight-h1);
  line-height: var(--lineheight-h1);
  margin-bottom: var(--spacing-lg);
}

.title-line {
  display: block;
}

.accent {
    color: var(--primary);
}

.hero-subtitle {
  font-size: var(--fontsize-h4);
  line-height: var(--lineheight-body);
  margin-bottom: var(--spacing-xl);
  color: var(--gray-light);
}

.cta-buttons {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.cta:hover {
  background: var(--primary-dark);
}
.hero-image img {
  width: 100%;
  height: auto;
  max-width: 500px;
  margin-inline: auto 0
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
    text-align: center;
  }
  
  .hero-title {
    font-size: var(--fontsize-h2);
  }
  
  .cta-buttons {
    justify-content: center;
  }

}
</style>