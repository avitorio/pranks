export function rotatePage(): void {
  if (typeof window === 'undefined') return;

  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    body {
      animation: spin 3s linear infinite;
      transform-origin: center center;
    }
  `;

  document.head.appendChild(style);
}

// Auto-execute when script loads
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', rotatePage);
  } else {
    rotatePage();
  }
} 