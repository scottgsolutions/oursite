<template>
  <section class="adhoc-services-section">
    <div class="container">
      <h2 class="section-title">Ad Hoc Service Hours</h2>
      <div class="services-list">
        <div class="service-item">
          <div class="service-info">
            <h3 class="service-name">Design / Strategy Calls</h3>
            <span class="service-price">$100 / hr</span>
          </div>
          <button class="btn btn-primary">Buy Now</button>
        </div>
        
        <div class="service-item">
          <div class="service-info">
            <h3 class="service-name">Website Updates / Integrations</h3>
            <span class="service-price">$150 / hr</span>
          </div>
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.adhoc-services-section {
  /* background: var(--black); */
  color: var(--white);
  padding: 50px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.services-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  max-width: 600px;
}

.service-item {
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-xl);
  padding: var(--spacing-lg) var(--spacing-xl);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--gray-light);
  transition: var(--transition);
}

.service-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
}

.service-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.service-name {
  font-size: var(--fontsize-h4);
  font-weight: var(--fontweight-h4);
  color: var(--white);
  margin: 0;
}

.service-price {
  font-size: var(--fontsize-body);
  font-weight: 500;
  color: var(--primary);
}

.btn {
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: var(--fontsize-caption);
  border: none;
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background: transparent;
  color: var(--white);
  border: 2px solid var(--primary);
  min-width: 100px;
}

.btn-primary:hover {
  background: var(--primary);
  color: var(--black);
}

@media (max-width: 768px) {
  .section-title {
    text-align: center;
  }
  
  .service-item {
    flex-direction: column;
    align-items: stretch;
    gap: var(--spacing-md);
    text-align: center;
  }
  
  .service-info {
    align-items: center;
  }
}
</style>