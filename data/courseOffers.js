// Enrolment facts shared by the course landing pages: one place to change the intake
// wording and the time-limited offer.

export const MONTHLY_INTAKE = 'Khai giảng hàng tháng'

// SAA and DevOps published tuition: [working professional, student].
export const campaignTuition = {
  standard: [8000000, 7500000],
  earlyBird: [7200000, 6700000],
  group: [6800000, 6300000],
}

// Extra discount on top of every published tuition tier (Standard, Early Bird, Group,
// student and working-professional prices). Used by SAA-C03 and DevOps VDE-C01.
export const octoberOffer = {
  percent: 10,
  label: '13/10',
  // End of 13 October, Vietnam time. After this the pages fall back to normal prices.
  endsAt: '2026-10-13T23:59:59+07:00',
}
