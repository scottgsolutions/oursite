<template>
  <header class="header-nav">
    <nav class="container">
      <div class="nav-wrapper">
        <!-- Logo -->
        <div class="logo">
          <NuxtLink to="/" class="logo-link">
            <div class="logo-content">
              <img src="@/assets/dark-logo.svg" alt="ScottG Solutions Logo" class="logo-icon" />
              <div class="logo-text">
                <span class="company-name">SCOTTG</span>
                <span class="company-type">SOLUTIONS</span>
              </div>
            </div>
          </NuxtLink>
        </div>
        
        <!-- Desktop Navigation -->
        <ul class="nav-links desktop-nav">
          <li class="dropdown-container">
            <button class="nav-link dropdown-trigger" @mouseenter="showServicesDropdown" @mouseleave="hideServicesDropdown">
              Services
              <svg class="dropdown-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div class="dropdown-menu" :class="{ active: servicesDropdownOpen }" @mouseenter="showServicesDropdown" @mouseleave="hideServicesDropdown">
              <NuxtLink to="/Businesses" class="dropdown-item">Business</NuxtLink>
              <NuxtLink to="/Government" class="dropdown-item">Government</NuxtLink>
            </div>
          </li>
          <li><NuxtLink to="/about" class="nav-link">About</NuxtLink></li>
          <li><NuxtLink to="/blog" class="nav-link">Blog</NuxtLink></li>
        </ul>
        
        <!-- CTA Button -->
        <div class="nav-cta desktop-nav">
          <NuxtLink to="/contact" class="btn btn-secondary">Contact Me</NuxtLink>
        </div>
        
        <!-- Mobile Menu Toggle -->
        <button class="mobile-toggle" @click="toggleMobileMenu" aria-label="Toggle mobile menu">
          <span class="hamburger"></span>
        </button>
      </div>
      
      <!-- Mobile Navigation -->
      <div class="mobile-nav" :class="{ active: mobileMenuOpen }">
        <ul class="mobile-nav-links">
          <li>
            <button class="mobile-dropdown-trigger" @click="toggleMobileServices">
              Services
              <svg class="dropdown-arrow" :class="{ rotated: mobileServicesOpen }" width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div class="mobile-dropdown" :class="{ active: mobileServicesOpen }">
              <NuxtLink to="/services/businesses" class="mobile-dropdown-item" @click="closeMobileMenu">Businesses</NuxtLink>
              <NuxtLink to="/services/government" class="mobile-dropdown-item" @click="closeMobileMenu">Government</NuxtLink>
            </div>
          </li>
          <li><NuxtLink to="/about" class="nav-link" @click="closeMobileMenu">About</NuxtLink></li>
          <li><NuxtLink to="/blog" class="nav-link" @click="closeMobileMenu">Blog</NuxtLink></li>
        </ul>
        <div class="mobile-cta">
          <NuxtLink to="/contact" class="btn btn-outline" @click="closeMobileMenu">Contact Me</NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)
const servicesDropdownOpen = ref(false)
const mobileServicesOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  mobileServicesOpen.value = false
}

const showServicesDropdown = () => {
  servicesDropdownOpen.value = true
}

const hideServicesDropdown = () => {
  servicesDropdownOpen.value = false
}

const toggleMobileServices = () => {
  mobileServicesOpen.value = !mobileServicesOpen.value
}
</script>

<style scoped>
.header-nav {
  background-color: var(--black);
  border-bottom: 1px solid var(--gray-light);
  position: sticky;
  top: 0;
  z-index: 1000;
  /* backdrop-filter: blur(8px); */
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md) 0;
}

/* Logo Styles */
.logo-link {
  text-decoration: none;
  color: var(--white);
}

.logo-content {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.logo-icon {
  color: var(--black);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: var(--fontsize-h4);
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.company-name {
  font-weight: 700;
  font-size: var(--fontsize-h4);
  color: var(--white);
}

.company-type {
  font-weight: 400;
  font-size: var(--fontsize-caption);
  color: var(--gray-light);
  letter-spacing: 0.05em;
}

/* Navigation Links */
.nav-links {
  display: flex;
  list-style: none;
  gap: var(--spacing-xl);
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: var(--white);
  font-weight: 500;
  font-size: var(--fontsize-body);
  transition: var(--transition);
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) 0;
}

.nav-link:hover, 
.nav-link.router-link-active {
  color: var(--primary-light);
  font-weight: 600;
}

/* Dropdown Styles */
.dropdown-container {
  position: relative;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.dropdown-arrow {
  transition: var(--transition-fast);
  
}

.dropdown-trigger:hover .dropdown-arrow {
  color: var(--white);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--black);
  border: 1px solid var(--gray-light);
  border-radius: var(--radius-lg);
  padding: var(--spacing-sm);
  min-width: 160px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: var(--transition);
  box-shadow: var(--shadow-lg);
}

.dropdown-menu.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  display: block;
  padding: var(--spacing-md) var(--spacing-lg);
  color: var(--gray-light);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: var(--transition-fast);
  font-weight: 500;
}

.dropdown-item:hover {
  background: var(--primary-dark);
  color: var(--white);
}

/* CTA Button
.btn-outline {
  background: transparent;
  color: var(--white);
  border: 1px solid var(--gray-light);
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-lg);
  font-weight: 500;
  text-decoration: none;
  transition: var(--transition);
}

.btn-outline:hover {
  border-color: var(--primary);
  color: var(--primary);
  background: rgba(128, 186, 255, 0.1);
} */

/* Mobile Toggle */
.mobile-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-sm);
}

.hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--white);
  position: relative;
  transition: var(--transition);
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: var(--white);
  transition: var(--transition);
}

.hamburger::before {
  top: -8px;
}

.hamburger::after {
  bottom: -8px;
}

/* Mobile Navigation */
.mobile-nav {
  display: none;
  background-color: var(--gray-dark);
  border-top: 1px solid var(--gray-light);
  padding: var(--spacing-lg) 0;
}

.mobile-nav.active {
  display: block;
}

.mobile-nav-links {
  list-style: none;
  margin: 0 0 var(--spacing-lg) 0;
  padding: 0;
}

.mobile-nav-links li {
  margin-bottom: var(--spacing-sm);
}

.mobile-dropdown-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: none;
  border: none;
  color: var(--gray);
  font-weight: 500;
  font-size: var(--fontsize-body);
  padding: var(--spacing-md) 0;
  cursor: pointer;
  transition: var(--transition);
}

.mobile-dropdown-trigger:hover {
  color: var(--white);
}

.mobile-dropdown {
  max-height: 0;
  overflow: hidden;
  transition: var(--transition);
  background: var(--gray);
  border-radius: var(--radius-md);
  margin-top: var(--spacing-sm);
}

.mobile-dropdown.active {
  max-height: 200px;
  padding: var(--spacing-sm);
}

.mobile-dropdown-item {
  display: block;
  padding: var(--spacing-md);
  color: var(--gray);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: var(--transition-fast);
}

.mobile-dropdown-item:hover {
  background: var(--gray-dark);
  color: var(--white);
}

.dropdown-arrow.rotated {
  transform: rotate(180deg);
}

.mobile-cta {
  text-align: center;
}

/* Mobile Styles */
@media (width < 768px) {
  .desktop-nav {
    display: none;
  }
  
  .mobile-toggle {
    display: block;
  }
  
  .logo-text {
    display: none;
  }
}
</style>