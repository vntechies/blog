import { octoberOffer } from './courseOffers'

// Premium courses in learning-path order (Foundational → Associate → Bootcamp), with the
// facts a buyer compares on the catalog. Prices are the lowest published tier (VND);
// null means "ask for a quote" until the price is confirmed.
// fits: who the course suits, used by the "Mình nên học khoá nào?" picker.
export const premiumCatalog = [
  {
    slug: 'aws/clf/gioi-thieu',
    code: 'CLF-C02',
    level: 'Foundational',
    duration: '8 buổi · 16 giờ',
    fromPrice: 2499000,
    fits: ['beginner'],
  },
  {
    slug: 'aws/aif/gioi-thieu',
    code: 'AIF-C01',
    level: 'Foundational',
    duration: '5 tuần · 10 buổi',
    fromPrice: 4500000,
    fits: ['beginner', 'working'],
  },
  {
    slug: 'aws/saa/gioi-thieu',
    code: 'SAA-C03',
    level: 'Associate',
    duration: '8 tuần · 16 buổi',
    fromPrice: 6300000,
    offer: octoberOffer,
    fits: ['beginner', 'switch', 'working'],
  },
  {
    slug: 'aws/dva/gioi-thieu',
    code: 'DVA-C02',
    level: 'Associate',
    duration: '8 tuần · 15 buổi',
    fromPrice: 6300000,
    fits: ['working'],
  },
  {
    slug: 'aws/dea/gioi-thieu',
    code: 'DEA-C01',
    level: 'Associate',
    duration: '~40 giờ · 8 tuần',
    fromPrice: 8300000,
    fits: ['working'],
  },
  {
    slug: 'devops/gioi-thieu',
    code: 'VDE-C01',
    level: 'Bootcamp',
    duration: '8 tuần · 16 buổi',
    fromPrice: 6300000,
    offer: octoberOffer,
    fits: ['switch', 'working'],
  },
  {
    slug: 'data-engineer-bootcamp/gioi-thieu',
    code: 'VDT-C01',
    level: 'Bootcamp',
    duration: '8 tuần · 16 buổi',
    // courseCatalog.js is the canonical price source.
    fromPrice: 10000000,
    fits: ['switch', 'working'],
  },
]

export const audiences = [
  {
    id: 'beginner',
    label: 'Sinh viên / mới bắt đầu',
    path: 'Bắt đầu với CLF-C02 hoặc AIF-C01, sau đó lên SAA-C03.',
  },
  {
    id: 'switch',
    label: 'Muốn đổi ngành',
    path: 'Chọn một bootcamp (DevOps hoặc Data) để có lộ trình trọn gói, hoặc SAA-C03 nếu muốn vào Cloud.',
  },
  {
    id: 'working',
    label: 'Đã đi làm, muốn lên level',
    path: 'Chọn chứng chỉ Associate đúng vai trò: SAA (kiến trúc), DVA (phát triển), DEA (dữ liệu), hoặc bootcamp để chuyên sâu.',
  },
]
