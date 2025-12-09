
<template>
    <section class="get-started-section">
        <div class="container">
            <!-- <h2 class="section-title">Get Started</h2> -->
            <!-- <div class="get-started-content">
                <div class="booking"> -->

                    <!-- <FormToBooking
                      form-src="https://forms.office.com/r/uXp30m6Zkh?embed=true
"
                      booking-url="https://outlook.office.com/bookwithme/user/00c7dfba3d57416d953c1d312352de52@sgsolutions.dev/meetingtype/R4raDAJ0Cku7BFtvm7jbjg2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile"
                      :auto-open="false"
                    /> -->
                <!-- </div> -->
                <div class="contact-me">
                    <h2>Contact Me</h2>
                    
                      <a href="tel:703-828-4836" class="contact-item">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                          703-828-4836
                      </a>
                      
                      <a href="mailto:scottg@sgsolutions.dev" class="contact-item">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                          scottg@sgsolutions.dev
                      </a>
                      
                      <a href="https://share.google/fxg7oPN4QaQ36E3LP" target="_blank" class="contact-item">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                              <path d="M2 12h20"></path>
                          </svg>
                          ScottG Solutions
                      </a>
                      
                      <a href="https://linkedin.com/in/scottgarberjr" target="_blank" class="contact-item">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                              <rect x="2" y="9" width="4" height="12"></rect>
                              <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                          scottgarberjr
                      </a>
                      
                </div>
            <!-- </div> -->
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
  width: clamp(300px, 100%, 1200px);
  max-width: 100%;
  /* margin: 0 auto; */
  padding: 110px 0;
}
.get-started-content {
  /* background: color-mix(in srgb, var(--black) 90%, transparent); */
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 2;
  min-width: 100%
}

.contact-me {

  background: color-mix(in srgb, var(--black) 90%, transparent); 
  width: clamp(260px, 100%, 400px);
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

/* 
.contact-me h2 {
  color: var(--white);
  margin-bottom: var(--spacing-md);
} */

.contact-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  color: var(--white);
  text-decoration: none;
  font-size: var(--fontsize-body);
}

.contact-item svg {
  color: var(--primary-light);
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .container{
    margin: 0 auto;
    max-width: 265px;
  }
}
</style>