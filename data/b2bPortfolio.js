// Hồ sơ đào tạo doanh nghiệp VNTechies — the one place that describes the deck.
// Replacing the deck means replacing the PDF file and bumping `version` and `cacheKey`.
const b2bPortfolio = {
  version: '11/2026',
  cacheKey: '2026-11',
  pdfPath: '/static/docs/vntechies-ho-so-dao-tao-doanh-nghiep.pdf',
  fileName: 'vntechies-ho-so-dao-tao-doanh-nghiep.pdf',
  coverImage: '/static/images/enterprises/ho-so-dao-tao-cover.png',
  pages: 32,
  sizeLabel: '3,3 MB',
  // Empty means the form runs in fallback mode: it shows the download and the Zalo link.
  // Set this to the deployed Apps Script `/exec` URL after deploy
  // (see scripts/google-apps-script/b2b-leads/README.md).
  leadScriptUrl: '',
}

export const pdfHref = `${b2bPortfolio.pdfPath}?v=${b2bPortfolio.cacheKey}`

export const downloadLabel = `Tải hồ sơ đào tạo (PDF · ${b2bPortfolio.pages} trang · ${b2bPortfolio.sizeLabel})`

export default b2bPortfolio
