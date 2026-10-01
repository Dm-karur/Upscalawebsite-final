/**
 * Upscala CMS API Client
 * Connects directly to CodeIgniter backend (via Vite proxy in dev)
 */

const API_BASE = '/api/v1';

async function request(endpoint, options = {}) {
  const url = ${API_BASE};
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(API Error:  );
  }

  const json = await response.json();
  return json.data;
}

export const api = {
  // Services
  getServices: (params = {}) => request(/services?),
  getServiceBySlug: (slug) => request(/services/),

  // Products
  getProducts: (params = {}) => request(/products?),
  getProductBySlug: (slug) => request(/products/),

  // Blog / Articles
  getBlog: (params = {}) => request(/blog?),
  getBlogPostBySlug: (slug) => request(/blog/),

  // Testimonials & Reviews
  getTestimonials: () => request('/testimonials'),
  getReviews: () => request('/reviews'),

  // Team & Careers
  getTeam: () => request('/team'),
  getCareers: () => request('/careers'),

  // FAQ & Portfolio
  getFaq: () => request('/faq'),
  getPortfolio: () => request('/portfolio'),
  getGallery: () => request('/gallery'),

  // Search
  search: (query) => request(/search?q=),
};

export default api;
