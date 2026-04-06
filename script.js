const revealNodes = document.querySelectorAll(
  ".hero-copy, .hero-card, .metrics article, .panel, .timeline-item, .quote-card, .contact-card"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealNodes.forEach((node) => {
  node.classList.add("reveal");
  observer.observe(node);
});
