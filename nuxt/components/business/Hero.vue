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
            <button class="btn btn-primary cta" @click="openBooking">Get Started Free</button>
            <!-- <button class="btn btn-secondary" href="#services">See Services</button> -->
            <NuxtLink to="#services" class="btn btn-secondary">See Services</NuxtLink>
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
@media (max-width: 1080px) {
  .hero-image img{
    display: none;
    
  }
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
  .hero-image {
    display: none;
  }
}
</style>

<script setup lang="ts">
const openBooking = () => {
  const url = "https://outlook.office.com/bookwithme/user/00c7dfba3d57416d953c1d312352de52@sgsolutions.dev/meetingtype/R4raDAJ0Cku7BFtvm7jbjg2?anonymous&ismsaljsauthenabled&ep=mlink";
  
  // Open a pop-up window 800x600
  window.open(url, "bookingWindow", "width=800,height=600,top=100,left=100,resizable=yes,scrollbars=yes");
};
</script>