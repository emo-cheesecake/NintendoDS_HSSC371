// Select all timeline entries, images, and captions
const entries = document.querySelectorAll('.timeline-entry');
const images = document.querySelectorAll('.gallery img');
const captions = document.querySelectorAll('.caption');

// Add click event to each timeline entry
entries.forEach(entry => {
  entry.addEventListener('click', () => {
    const targetId = entry.getAttribute('data-target');

    // Hide all images and captions
    images.forEach(img => img.classList.remove('active'));
    captions.forEach(cap => cap.classList.remove('active'));

    // Show the selected image safely
    const img = document.getElementById(targetId);
    if (img) {
      img.classList.add('active');

      // Show the corresponding caption if it exists
      const caption = img.nextElementSibling;
      if (caption && caption.classList.contains('caption')) {
        caption.classList.add('active');
      }
    }
  });
});
