<template>
  <section class="services-section">
    <div class="container">
      <h1 class="section-title">Services</h1>
      <div class="services-grid">
        <div class="service-card">
          <div class="wrapper">
            <h3 class="service-title">Simple Business Sites</h3>
            <br />
            <div class="service-features">
              <p><strong>Basic Site</strong> - Up to 3 pages, minimal customization, 2 design calls prior to build</p>
              <p><strong>Site integration</strong> with tools you already use (payment, newsletter signup, social feed, reviews, etc.)</p>
            </div>
          </div>
          <div class="service-price">$500 - $800</div>
        </div>

        <div class="service-card featured">
          <div class="wrapper">
            <h3 class="service-title">Custom Site & Business Suite Strategy</h3>
            <div class="service-features">
              <p><strong>Custom website</strong> with multiple pages and a blog, 3 design calls prior to build plus branding & market research to drive design decisions</p>
              <p><strong>Content manager</strong> to let your team make edits to pages and articles without a developer</p>
              <p><strong>Business Suite Scan</strong> - find out what tools you are already paying for and how to use them</p>
            </div>
          </div>
          <div class="service-price">$1200 - $4000</div>
        </div>

        <div class="service-card">
          <div class="wrapper">
            <h3 class="service-title">Tech-Enabled Business Systems</h3>
            <div class="service-features">
              <p><strong>Custom website</strong> with multiple pages and a blog, 3 design calls prior to build plus branding & market research to drive design decisions</p>
              <p><strong>Content manager</strong> to let your team make edits to pages and articles without a developer</p>
              <p><strong>Assessment and Strategic Planning</strong> - work shop business objectives, systems, and ways to streamline processes for your clients and team</p>
              <p><strong>Business System Implementation</strong> to include website, email, notification, lead onboarding, client pipelines, meeting scheduling, payment systems, AdSense, analytics, process automation and more according to our strategic planning sessions</p>
            </div>
          </div>
          <div class="service-price">$3500 - $7000</div>
        </div>
      </div>
      <div class="grid">
        <div class="empty"></div>
        <button class="btn btn-secondary cta grid-center">Get Started Free</button>
        <h3 class="grid-right">Service Plans Below 
          <!-- <svg class="dropdown-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg> -->
        </h3>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  /* background: var(--black); */
  color: var(--white);
  padding: 50px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-lg);
}

.service-card {
  background: var(--black);
   /* rgba(255, 255, 255, 0.05); */
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl) var(--spacing-lg);
  border: 1px solid var(--gray-light);
  transition: var(--transition);
  position: relative;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
}

.service-card:hover {
  transform: translateY(-5px);
  /* background: var(--gray-dark); */
  /* rgba(255, 255, 255, 0.08); */
}



.service-title {
  font-size: var(--fontsize-h3);
  font-weight: var(--fontweight-h3);
  margin-bottom: var(--spacing-lg);
  color: var(--white);
}

.service-features {
  margin-bottom: var(--spacing-lg);
}

.service-features p {
  font-size: var(--fontsize-caption);
  line-height: var(--lineheight-body);
  color: var(--gray-light);
  margin-bottom: var(--spacing-md);
}

.service-features strong {
  color: var(--primary);
}

.service-price {
  font-size: var(--fontsize-h3);
  font-weight: 700;
  color: var(--primary);
  text-align: center;
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--gray-light);
}

.cta {
  display: block;
  margin: var(--spacing-xl) auto 0 auto;
  /* margin-inline: auto; */
}
.cta:hover {
  transform: translateY(-2px);
}

.grid{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;                     
  gap: 1rem;
  width: 100%;
}
.grid-center{
  justify-self: center;
}
.grid-right{
  justify-self: end;  
  margin-top: var(--spacing-xl);  
  color: var(----white);
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    text-align: center;
  }
}
</style>