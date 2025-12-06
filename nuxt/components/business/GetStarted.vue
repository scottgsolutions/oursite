<template>
    <section class="get-started-section">
        <div class="container">
            <h1 class="section-title">Get Started</h1>
            <div class="section-content">
                <div class="booking">
                    <!-- <iframe 
                        src='https://outlook.office.com/book/BusinessBookings@sgsolutions.dev/?ismsaljsauthenabled' 
                        width='100%' height='100%' scrolling='yes' 
                        style='border:0'>
                    </iframe> -->
                </div>
                <div class="contact-me">

                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.get-started-section {

  /* background-color: color-mix(in srgb, var(--black) 99%, transparent); */
  color: var(--white);
  
  /* min-height: 75vh; */
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.get-started-section::before {
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
  background: color-mix(in srgb, var(--black) 90%, transparent);
  max-width: 100%;
  margin: 0 auto;
  padding: 110px 0;
}
.get-started-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 2;
}
</style>