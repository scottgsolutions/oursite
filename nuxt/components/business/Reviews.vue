<template>
  <section class="reviews-section">
    <div class="container">
      <h2 class="section-title">Client Reviews</h2>
      <div class="reviews-container">
        <div class="review-card" v-for="review in reviews" :key="review.id">
          <p class="review-text">{{ review.text }}</p>
          <div class="review-author">
            <span class="author-name">{{ review.author }}</span>
            <span class="review-source">
              <img src="/assets/google-icon.svg" alt="Google" class="google-icon" />
              Google
            </span>
          </div>
        </div>
      </div>
      <div class="cta-container">
        <button class="btn btn-primary cta" @click="openBooking">Get Started Free</button>
      </div>
    </div>
  </section>
</template>

<script setup>
const reviews = [
  {
    id: 1,
    text: "Scott did a great job updating my business website. He was very knowledable and explained all the options I should consider. He was very quick to act and had my website transformed at record pace. My business benefited immediately from his updates and I wish I would have done it earlier. I would highly recommend ScottG Solutions for any of his services.",
    author: "Laura K.",
    source: "Google"
  },
  {
    id: 2,
    text: "I just needed a simple site where people could see my credentials, services, and book an onsite visit. We had it up in 2 weeks I highly recommend Scott to get you online.",
    author: "Marco G.",
    source: "Google"
  },
  {
    id: 3,
    text: "I met with Scott to build a blog and portfolio as a dietician. I tried Wix in the past but it was too much for me. The planning and design was super helpful and he was very helpful and responsive. Now I have something to show patients and interviews. It is easy to grow my site now and I want to meet with Scott again soon for a shop idea!",
    author: "Jing B.",
    source: "Google"
  }
]


const openBooking = () => {
  const url = "https://outlook.office.com/bookwithme/user/00c7dfba3d57416d953c1d312352de52@sgsolutions.dev/meetingtype/R4raDAJ0Cku7BFtvm7jbjg2?anonymous&ismsaljsauthenabled&ep=mlink";
  
  // Open a pop-up window 800x600
  window.open(url, "bookingWindow", "width=800,height=600,top=100,left=100,resizable=yes,scrollbars=yes");
};

</script>

<style scoped>
.reviews-section {
  /* background: var(--black); */
  color: var(--white);
  /* padding: 100px 0; */
}

.container {
  /* max-width: 1200px; */
  /* margin: 0 auto; */
  padding-block: 50px;
}

.reviews-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.review-card {
  background: var(--white);
  color: var(--black);
  /* border-radius: var(--radius-xl); */
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-xl);
  transition: var(--transition);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.review-card:hover {
  transform: translateY(-5px);
}

.review-text {
  font-size: var(--fontsize-body);
  line-height: var(--lineheight-body);
  margin-bottom: var(--spacing-md);
  color: var(--gray-dark);
}

.review-author {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.author-name {
  font-weight: 600;
  color: var(--black);
}

.review-source {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--fontsize-caption);
  color: var(--gray);
}

.google-icon {
  width: 16px;
  height: 16px;
}

.cta-container {
  text-align: center;
}


@media (max-width: 768px) {
  .reviews-container {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    text-align: center;
  }
  
  .review-author {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-sm);
  }
}
</style>