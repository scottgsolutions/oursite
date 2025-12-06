<template>
  <section class="service-plans-section">
    <div class="container">
      <h2 class="section-title">Service Plans</h2>
      <div class="plans-grid">
        <div class="plan-card">
          <div class="wrapper">
            <h3 class="plan-title">Simple Upkeep Plan</h3>
            <ul class="plan-features">
              <li>web hosting</li>
              <li>site maintenance</li>
              <li>monthly site updates (1-2x text/image content changes)</li>
            </ul>
          </div>
          <div class="plan-price">$80 / mo</div>
        </div>

        <div class="plan-card">
          <div class="wrapper">
            <h3 class="plan-title">Standard Support Plan</h3>
            <ul class="plan-features">
              <li>web hosting</li>
              <li>site maintenance</li>
              <li>monthly site updates (1-2x text/image and minor structural changes)</li>
              <li>weekly backups</li>
              <li>monthly site report</li>
              <li>monthly strategy touchpoint</li>
            </ul>
          </div>
          <div class="plan-price">$200 / mo</div>
        </div>

        <div class="plan-card featured">
          <div class="wrapper">
            <h3 class="plan-title">Priority Business Plan</h3>
            <ul class="plan-features">
              <li>web hosting</li>
              <li>site maintenance</li>
              <li>monthly site updates (1-3x text/image and minor structural changes)</li>
              <li>weekly backups</li>
              <li>monthly enhanced site report</li>
              <li>monthly strategy touchpoint</li>
              <li>priority tech support</li>
              <li>20% off adhoc service hours</li>
            </ul>
          </div>
          <div class="plan-price">$350 / mo</div>
        </div>
      </div>
      <div class="cta-container grid">
        <div class="empty"></div>
        <button class="btn btn-primary grid-center">Questions? Reach Out Here</button>
        <h3 class="grid-right">Ad Hoc Hours Below</h3>
      </div>
    </div>
  </section>
</template>

<style scoped>
.service-plans-section {
  /* background: var(--gray-dark); */
  color: var(--white);
  padding: 50px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: var(--fontsize-h1);
  font-weight: var(--fontweight-h1);
  margin-bottom: var(--spacing-lg);
  text-align: left;
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-lg);
  /* margin-bottom: var(--spacing-xl); */
}

.plan-card {
  background-color: color-mix(in srgb, var(--black) 90%, transparent);
  /* background: rgba(255, 255, 255, 0.05); */
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl) var(--spacing-lg);
  border: 1px solid var(--gray-light);
  transition: var(--transition);
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.plan-card:hover {
  transform: translateY(-5px);
  /* background: rgba(255, 255, 255, 0.08); */
}

.plan-title {
  font-size: var(--fontsize-h3);
  font-weight: var(--fontweight-h3);
  margin-bottom: var(--spacing-lg);
  color: var(--white);
}

.plan-features {
  list-style: none;
  padding: 0;
  margin-bottom: var(--spacing-xl);
  text-align: left;
}

.plan-features li {
  font-size: var(--fontsize-caption);
  line-height: 1.8;
  color: var(--gray-light);
  padding-left: var(--spacing-md);
  position: relative;
}

.plan-features li::before {
  content: '•';
  color: var(--primary);
  position: absolute;
  left: 0;
  font-weight: bold;
}

.plan-price {
  font-size: var(--fontsize-h2);
  font-weight: 700;
  color: var(--primary);
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--gray-light);
}

.cta-container {
  text-align: center;
}

.btn {
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: var(--fontsize-body);
  border: none;
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background: var(--primary);
  color: var(--black);
  margin: var(--spacing-xl) auto 0 auto;
}

.btn-primary:hover {
  background: var(--primary-dark);
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
  .plans-grid {
    grid-template-columns: 1fr;
  }
  
  .plan-card.featured {
    transform: none;
  }
  
  .plan-card.featured:hover {
    transform: translateY(-5px);
  }
  
  .section-title {
    text-align: center;
  }

}
</style>