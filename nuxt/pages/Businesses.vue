<template>
  <div class="landing-page">
    <div class="fixed-bg"></div>

    <Navigation class="adapt"/>
    
    <SectionsBusinessHero class="section adapt"/>
    
    <SectionsBusinessProcess class="section adapt"/>
    
    <SectionsBusinessReviews class="section adapt"/>

    <SectionsBusinessServices class="section adapt diagonal"/>
    
    <SectionsBusinessServicePlans class="section adapt"/>
    
    <SectionsBusinessAdHoc class="section adapt diagonal-black"/>
  </div>
</template>

<script setup>
// Page metadata
useHead({
  title: 'SG Solutions - Professional Web Development & Tech-Enabled Business Solutions',
  meta: [
    { name: 'description', content: 'Expert web development and technology consulting services. Transform your business with custom, tech-enabled business solutions.' },
    { name: 'keywords', content: 'web development, tech-enabled business systems, software development, technology consulting' }
  ]
})
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  /* background-color: var(--black);
  background-image: url('@/assets/grid-pattern.svg'); */
 

}
.fixed-bg{
  position: fixed;
  background-image: url("@/assets/stacked-waves-haikei.svg");
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  z-index: -1;
  inset: 0;
  pointer-events: none;
}
.diagonal {
  position: relative;
  isolation: isolate;
}
.diagonal::before{
  content: '';
  position: absolute;
  z-index: -1;
  inset: 0;
  
  --skew-angle: -5deg;
  --background: 
  /* var(--primary-dark); */
  linear-gradient(45deg, var(--primary-dark), var(--secondary-dark));
  background: var(--background);
  transform: skewY(var(--skew-angle));
}
.diagonal-black {
  position: relative;
  isolation: isolate;
}
.diagonal-black::before{
  content: '';
  position: absolute;
  z-index: -1;
  inset: 0;
  
  --skew-angle: -5deg;
  --background: var(--black);
  background: var(--background);
  transform: skewY(var(--skew-angle));
}
</style>