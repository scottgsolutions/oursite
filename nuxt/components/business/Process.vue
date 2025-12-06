<template>
  <section class="process-section">
    <div class="container">
      <h2 class="section-title">Process</h2>
      <div class="process-grid">
        <div class="process-step">
          <div class="step-number">1</div>
          <h3 class="step-title">Discovery</h3>
          <p class="step-description">
            Free initial consult, discuss requirements, finalize work order
          </p>
        </div>
        
        <div class="process-step">
          <div class="step-number">2</div>
          <h3 class="step-title">Design</h3>
          <p class="step-description">
            Discuss strategy and design, business process assessment, draft mockups and review
          </p>
        </div>
        
        <div class="process-step">
          <div class="step-number">3</div>
          <h3 class="step-title">Build</h3>
          <p class="step-description">
            Build, implement, test, review. <br />Meet regularly on larger projects
          </p>
        </div>
        
        <div class="process-step">
          <div class="step-number">4</div>
          <h3 class="step-title">Go Live</h3>
          <p class="step-description">
            Deploy, live testing, training, and turnover
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.process-section {
  background-color: color-mix(in srgb, var(--black) 90%, transparent);
  color: var(--white);
}

.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 50px 0;
}



.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
}

.process-step {
  background: var(--black);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl) var(--spacing-lg);
  text-align: left;
  transition: var(--transition);
  border: 1px solid var(--gray-light);
}

.process-step:hover {
  transform: translateY(-5px);
  background: #000;
  /* rgba(255, 255, 255, 0.03); */

  .step-number {
    background: var(--secondary);
    color: var(--black);
  }
}

.step-number {
  background: var(--primary);
  color: var(--black);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: var(--fontsize-h4);
  margin-bottom: var(--spacing-md);
}

.step-title {
  font-size: var(--fontsize-h3);
  font-weight: var(--fontweight-h3);
  margin-bottom: var(--spacing-md);
  color: var(--white);
}

.step-description {
  font-size: var(--fontsize-caption);
  line-height: var(--lineheight-body);
  color: var(--gray-light);
  margin: 0;
}

@media (max-width: 768px) {
  .process-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    text-align: center;
  }
}
</style>