'use strict';
/* Facts from official sources (lenders, Maruti Suzuki, IRDAI, Government of India, Global NCAP, Bharat NCAP)
   plus verified Sehgal Autoriders operational, Vahan, Retail Finance, Wholesale Inventory & Insurance portfolio data, updated 06-11-2026. */
const FACTS_DATA = {
 "checkedOn": "06-11-2026",
 "sehgalSummary": {
  "foundedYear": 1988,
  "yearsOfExcellence": "27+ Years (Group Heritage Since 1988)",
  "workforce": "2,400+ Trained Professionals",
  "marutiServiceVisits": "2,83,000+ Job Cards",
  "heroCustomers": "1,01,505+ Hero Riders",
  "dualBrandFamilies": "5,707+ Families Owning Both Sehgal Maruti & Hero",
  "fy27YtdRetails": "3,815 New Maruti Suzuki Cars (FY 2026-27 YTD)",
  "cngGreenMixPct": "71.5% Factory S-CNG & Green Fuel Mix",
  "extendedWarrantyPenetrationPct": "29.1% (1,110 Extended Warranty Policies in FY26-27 YTD)",
  "trueValueExchangesYtd": "553 Verified Exchanges in FY26-27 YTD",
  "insurancePortfolioCount": "15,047 Maruti Suzuki Policies + 5,652 Hero Policies",
  "preferredInsurer": "Bajaj Allianz General Insurance (#1 with 43.22% New Car Share · ₹1 Cr Strategic Cashless Tie-Up)",
  "preferredFinancier": "HDFC Bank (#1 with 23.48% Financed New Car Share in Retail & Vahan)",
  "centralDeskPhone": "8380038244",
  "salesEscalationPhone": "7888012800",
  "serviceEscalationPhone": "7888060161",
  "insuranceDeskPhone": "8888881399",
  "financeDeskPhone": "8888881341",
  "heroDeskPhone": "9289922306"
 },
 "ncap": [
  {
   "model": "Dzire",
   "programme": "Global NCAP",
   "protocol": "2022+",
   "adultStars": 5,
   "childStars": 4,
   "testDate": "2024",
   "source": "https://www.globalncap.org/news/new-dzire-from-maruti-suzuki-achieves-five-star-rating-in-global-ncap-voluntary-test"
  },
  {
   "model": "Victoris",
   "programme": "Global NCAP",
   "protocol": "2022+",
   "adultStars": 5,
   "childStars": 5,
   "testDate": "2025",
   "source": "https://www.globalncap.org/news/five-star-victoris"
  },
  {
   "model": "Celerio (6 airbags)",
   "programme": "Global NCAP",
   "protocol": "2022+",
   "adultStars": 3,
   "childStars": 2,
   "testDate": "2025",
   "source": "https://www.globalncap.org/news/mixed-results-for-maruti-suzuki"
  },
  {
   "model": "Brezza",
   "programme": "Bharat NCAP",
   "protocol": "",
   "adultStars": 5,
   "childStars": 5,
   "testDate": "2026",
   "source": "https://www.bncap.in/vehicle/maruti-brezza/"
  },
  {
   "model": "Dzire",
   "programme": "Bharat NCAP",
   "protocol": "",
   "adultStars": 5,
   "childStars": 5,
   "testDate": "2025",
   "source": "https://www.bncap.in/vehicle/maruti-dzire-gasoline/"
  },
  {
   "model": "e VITARA",
   "programme": "Bharat NCAP",
   "protocol": "",
   "adultStars": 5,
   "childStars": 5,
   "testDate": "2025",
   "source": "https://www.bncap.in/vehicle/maruti-suzuki-e-vitara/"
  },
  {
   "model": "Invicto",
   "programme": "Bharat NCAP",
   "protocol": "",
   "adultStars": 5,
   "childStars": 5,
   "testDate": "2025",
   "source": "https://www.bncap.in/vehicle/maruti-suzuki-invicto/"
  },
  {
   "model": "Victoris",
   "programme": "Bharat NCAP",
   "protocol": "",
   "adultStars": 5,
   "childStars": 5,
   "testDate": "2025",
   "source": "https://www.bncap.in/vehicle/maruti-suzuki-victoris/"
  },
  {
   "model": "Baleno (2 airbags)",
   "programme": "Bharat NCAP",
   "protocol": "",
   "adultStars": 4,
   "childStars": 3,
   "testDate": "2025",
   "source": "https://www.bncap.in/vehicle/maruti-baleno-gasoline-2-airbags/"
  },
  {
   "model": "Baleno (6 airbags)",
   "programme": "Bharat NCAP",
   "protocol": "",
   "adultStars": 4,
   "childStars": 3,
   "testDate": "2025",
   "source": "https://www.bncap.in/vehicle/maruti-baleno-gasoline-6-airbags/"
  }
 ],
 "ncapNote": "Only ratings that apply to the version on sale today are shown. Earlier tests of previous generations or lower-airbag versions are listed on the programmes’ own websites.",
 "loans": [
  {
   "lender": "HDFC Bank",
   "preferred": true,
   "sehgalRank": 1,
   "sehgalShare": "23.5% of Financed New Cars (#1 in DMS Retail & Vahan RC)",
   "sehgalStats": "812 new-car policies · 411 FY26-27 DMS retails · 370 Vahan RC registrations",
   "sehgalBadge": "#1 PREFERRED RETAIL & WHOLESALE PARTNER",
   "rateFrom": 8.75,
   "rateTo": 9.4,
   "basis": "Preferred Sehgal slab from 8.75%–9.00% onwards for high CIBIL / Xpress Car Loan",
   "maxTenureMonths": 96,
   "processingFee": "Up to 0.5% of loan amount (min ₹3,500, max ₹8,000); special waivers on festive & corporate schemes.",
   "source": "https://www.hdfc.bank.in/car-loan/interest-rates-and-charges"
  },
  {
   "lender": "State Bank of India (SBI)",
   "preferred": true,
   "sehgalRank": 2,
   "sehgalShare": "13.6% of Financed New Cars (#2 in Retail & PSU Banking)",
   "sehgalStats": "472 new-car policies · 142 FY26-27 DMS retails · 144 Vahan RC registrations",
   "sehgalBadge": "#2 PREFERRED PSU BANK PARTNER",
   "rateFrom": 8.4,
   "rateTo": 9.35,
   "basis": "Credit-score based; 3-month MCLR-linked · Zero prepayment penalty after 24 months",
   "maxTenureMonths": 84,
   "processingFee": "Nil to 0.25% under Maruti Suzuki Smart Finance & festive campaigns.",
   "source": "https://sbi.bank.in/web/interest-rates/interest-rates/loan-schemes-interest-rates/auto-loans"
  },
  {
   "lender": "AU Small Finance Bank",
   "preferred": true,
   "sehgalRank": 3,
   "sehgalShare": "9.2% of Financed New Cars (#2 in Vahan RC Hypothecations)",
   "sehgalStats": "317 new-car policies · 182 FY26-27 Vahan RC registrations · 98 DMS retails",
   "sehgalBadge": "TOP EXPRESS & SEMI-URBAN FINANCIER",
   "rateFrom": 9.0,
   "rateTo": 12.0,
   "basis": "Fast turnaround across Pune, Lonavala, Kamshet, Khed Shivapur & Bhor",
   "maxTenureMonths": 84,
   "processingFee": "Up to 1% of loan amount; doorstep documentation at all Sehgal branches.",
   "source": "https://www.aubank.in/personal-banking/loans/wheels-car-loan"
  },
  {
   "lender": "Cholamandalam Investment & Finance (Chola)",
   "preferred": true,
   "sehgalRank": 4,
   "sehgalShare": "9.8% of Financed New Cars (#3 in DMS Retail Register)",
   "sehgalStats": "338 new-car policies · 109 FY26-27 DMS retails · 117 Vahan RC registrations",
   "sehgalBadge": "PREFERRED SELF-EMPLOYED & COMMERCIAL PARTNER",
   "rateFrom": 9.25,
   "rateTo": 12.75,
   "basis": "Tailored schemes for business owners, S-CNG, Tour & Super Carry Commercial buyers",
   "maxTenureMonths": 84,
   "processingFee": "As per scheme and profile; flexible income-proof norms.",
   "source": "https://www.cholamandalam.com/vehicle-finance"
  },
  {
   "lender": "ICICI Bank",
   "preferred": true,
   "sehgalRank": 5,
   "sehgalShare": "6.4% of Financed New Cars · Leading NEXA & Corporate Tie-Up",
   "sehgalStats": "221 new-car policies · 57 FY26-27 Vahan RC registrations · 50 DMS retails",
   "sehgalBadge": "PREFERRED NEXA & CORPORATE BANK",
   "rateFrom": 8.4,
   "rateTo": 10.25,
   "basis": "Tenure over 36 months from 8.40%; instant pre-approved digital sanction for ICICI customers",
   "maxTenureMonths": 84,
   "processingFee": "Standard processing fee with pre-approved corporate waivers.",
   "source": "https://www.icicibank.com/Personal-Banking/loans/car-loan/car-loan-interest-rate.page"
  },
  {
   "lender": "Kotak Mahindra Prime",
   "preferred": true,
   "sehgalRank": 6,
   "sehgalShare": "6.2% of Financed New Cars · Dedicated Auto Loan Specialist",
   "sehgalStats": "215 new-car policies · 85 FY26-27 Vahan RC registrations · 36 DMS retails",
   "sehgalBadge": "PRIME AUTO LOAN PARTNER",
   "rateFrom": 8.85,
   "rateTo": 11.5,
   "basis": "Fixed rate; step-up and balloon EMI options for Arena & NEXA buyers",
   "maxTenureMonths": 84,
   "processingFee": "Up to 1% of loan amount + GST.",
   "source": "https://www.primeloans.kotak.com/car-loan.html"
  },
  {
   "lender": "Bank of Maharashtra",
   "preferred": true,
   "sehgalRank": 7,
   "sehgalShare": "5.7% of Financed New Cars · Pune-Headquartered PSU Partner",
   "sehgalStats": "196 new-car policies · 75 FY26-27 DMS retails · 69 Vahan RC registrations",
   "sehgalBadge": "PUNE FAVOURITE PSU BANK",
   "rateFrom": 7.45,
   "rateTo": 11.75,
   "basis": "Salaried & pensioner favourite in Pune; credit-score based, RLLR-linked",
   "maxTenureMonths": 84,
   "processingFee": "Concessional processing charges under Maha Super Car Loan.",
   "source": "https://bankofmaharashtra.bank.in/retail-interest-rates"
  },
  {
   "lender": "Saraswat Co-op Bank",
   "preferred": true,
   "sehgalRank": 8,
   "sehgalShare": "4.6% of Financed New Cars · #1 Co-operative Bank Partner",
   "sehgalStats": "158 new-car policies · 69 FY26-27 Vahan RC registrations",
   "sehgalBadge": "TOP CO-OP BANK IN PUNE",
   "rateFrom": 8.6,
   "rateTo": 11.0,
   "basis": "Preferred across Erandwane, Law College Rd & Bavdhan family buyers",
   "maxTenureMonths": 84,
   "processingFee": "Low processing fee for existing account holders.",
   "source": "https://www.saraswatbank.com/"
  },
  {
   "lender": "Mahindra & Mahindra Financial Services",
   "preferred": true,
   "sehgalRank": 9,
   "sehgalShare": "4.8% of Financed New Cars · Rural & Highway Corridor Leader",
   "sehgalStats": "165 new-car policies · 50 FY26-27 DMS retails · 35 Vahan RC registrations",
   "sehgalBadge": "RURAL & COMMERCIAL SPECIALIST",
   "rateFrom": 9.5,
   "rateTo": 13.5,
   "basis": "Strong presence in Maval, Mulshi, Khed Shivapur, Bhor & Manjri corridors",
   "maxTenureMonths": 84,
   "processingFee": "Standard scheme charges apply.",
   "source": "https://www.mahindrafinance.com/loans/car-loan"
  },
  {
   "lender": "Axis Bank",
   "preferred": true,
   "sehgalRank": 10,
   "sehgalShare": "3.3% of Financed New Cars · Corporate & Wholesale Partner",
   "sehgalStats": "114 new-car policies · 33 FY26-27 Vahan RC registrations",
   "sehgalBadge": "PREFERRED PRIVATE BANK",
   "rateFrom": 8.9,
   "rateTo": 11.7,
   "basis": "Fixed rate; MCLR + spread · Up to 100% on-road funding for eligible salaried customers",
   "maxTenureMonths": 84,
   "processingFee": "Up to 2% of loan amount + GST.",
   "source": "https://www.axis.bank.in/loans/car-loan/interest-rates-charges"
  },
  {
   "lender": "Bank of Baroda",
   "preferred": false,
   "sehgalRank": 11,
   "sehgalShare": "2.4% of Financed New Cars",
   "sehgalStats": "83 new-car policies · 29 FY26-27 Vahan RC registrations",
   "rateFrom": 7.6,
   "rateTo": 11.3,
   "basis": "Digital Car Loan; credit-score based",
   "maxTenureMonths": 84,
   "processingFee": "0.50% of loan amount + GST.",
   "source": "https://bankofbaroda.bank.in/loans/vehicle-loan/baroda-car-loan"
  },
  {
   "lender": "Canara Bank",
   "preferred": false,
   "sehgalRank": 12,
   "sehgalShare": "1.6% of Financed New Cars",
   "sehgalStats": "55 new-car policies · 14 FY26-27 Vahan RC registrations",
   "rateFrom": 7.45,
   "rateTo": 15.0,
   "basis": "Range of loans actually sanctioned, from 12-12-2025",
   "maxTenureMonths": 84,
   "processingFee": "0.25% of loan amount, min Rs 1,000 + GST, max Rs 5,000 + GST.",
   "source": "https://www.canarabank.bank.in/pages/interest-rate-range-on-loans"
  },
  {
   "lender": "Union Bank of India",
   "preferred": false,
   "sehgalRank": 13,
   "sehgalShare": "1.6% of Financed New Cars",
   "sehgalStats": "55 new-car policies · 22 FY26-27 Vahan RC registrations",
   "rateFrom": 7.6,
   "rateTo": 10.0,
   "basis": "Salaried; credit-score based, EBLR-linked",
   "maxTenureMonths": 84,
   "processingFee": "",
   "source": "https://www.unionbankofindia.bank.in/pdf/retail_roi.pdf"
  },
  {
   "lender": "IDFC FIRST Bank",
   "preferred": false,
   "sehgalRank": 14,
   "sehgalShare": "Smart Finance Partner",
   "sehgalStats": "Maruti Suzuki Smart Finance digital lender",
   "rateFrom": 8.99,
   "rateTo": null,
   "basis": "Floating or fixed",
   "maxTenureMonths": 120,
   "processingFee": "",
   "source": "https://www.idfcfirst.bank.in/personal-banking/loans/car-loan"
  }
 ],
 "wholesaleFinance": {
  "headline": "Institutional Inventory Funding & Corporate Fleet Strength",
  "subheadline": "Backed by multi-crore wholesale floorplan & e-DFS banking lines so your preferred Maruti Suzuki or Hero vehicle is in stock and ready for faster delivery.",
  "inventoryBanks": [
   {
    "bank": "HDFC Bank",
    "role": "Primary Wholesale Inventory (Floorplan) & #1 Retail Banking Partner",
    "detail": "Dedicated trade advance & inventory credit lines powering high stock allocation across Arena, NEXA, Commercial and Hero MotoCorp."
   },
   {
    "bank": "State Bank of India (SBI)",
    "role": "Electronic Dealer Finance Scheme (e-DFS) Partner",
    "detail": "Direct MSIL & Hero OEM factory-dispatch funding ensuring uninterrupted availability of high-demand S-CNG and SUV variants."
   },
   {
    "bank": "ICICI Bank & Axis Bank",
    "role": "Channel Finance, Working Capital & Corporate Salary Tie-Ups",
    "detail": "Seamless wholesale-to-retail conversion and instant in-showroom disbursement for corporate & retail buyers."
   },
   {
    "bank": "Kotak Mahindra & IndusInd Bank",
    "role": "Supplemental Inventory & Two-Wheeler/Commercial Channel Lines",
    "detail": "Supporting Chinchwad/Chakan Hero MotoCorp and Manjri Commercial fleet deliveries."
   }
  ],
  "corporateLeasing": {
   "partner": "Ayvens India Fleet Management (formerly ALD Automotive / LeasePlan)",
   "corporateClients": "Atlas Copco India, Brembo Brake India, Southco India, and leading Hinjewadi IT & Chakan MIDC industrial fleets (28+ corporate lease deliveries in FY 2026-27 YTD).",
   "deskContact": "Sachin Kumbhar (Finance Head): +91 88888 81341 · Vivek Raut (Manjri Finance): +91 72630 10034 · Lonavala Finance Desk: +91 92260 94628"
  }
 },
 "smartFinancePartners": {
  "url": "https://www.marutisuzuki.com/arena/arena-finance",
  "count": 43,
  "names": [
   "HDFC Bank (#1 at Sehgal)",
   "State Bank of India (SBI)",
   "AU Small Finance Bank",
   "Cholamandalam Investment and Finance (Chola)",
   "ICICI Bank",
   "Kotak Mahindra Prime",
   "Bank of Maharashtra",
   "Saraswat Co-op Bank",
   "Mahindra Finance",
   "Axis Bank",
   "IndusInd Bank",
   "Shriram Finance",
   "Bank of Baroda",
   "Sundaram Finance",
   "Canara Bank",
   "Union Bank of India",
   "Bajaj Finance",
   "Federal Bank",
   "HDB Financial Services",
   "Punjab National Bank",
   "Yes Bank"
  ]
 },
 "service": {
  "schedule": [
   {
    "name": "1st Free Inspection",
    "due": "1,000 km or 1 month",
    "type": "Free labour (consumables as applicable)"
   },
   {
    "name": "2nd Free Inspection",
    "due": "5,000 km or 6 months",
    "type": "Free labour (consumables as applicable)"
   },
   {
    "name": "3rd Free Service",
    "due": "10,000 km or 12 months",
    "type": "Free labour (engine oil & filter billed at MRP)"
   },
   {
    "name": "Paid Periodic Maintenance",
    "due": "Every 10,000 km or 12 months thereafter",
    "type": "Scheduled periodic service at any of our 7 workshops"
   }
  ],
  "scheduleNote": "Sehgal Autoriders operates full-fledged Maruti Suzuki workshops & bodyshops at Bavdhan (Flagship 3S & Bodyshop), Manjri (NEXA & Arena Service), Lonavala (Arena & NEXA Service), Kamshet, Khed Shivapur and Bhor.",
  "standardWarranty": "3 years or 1,00,000 km, whichever comes first, for cars bought on or after 09-07-2024 (earlier cars: 2 years or 40,000 km). Covers engine, transmission, mechanical, electrical and air-conditioning parts; consumables excluded.",
  "extendedWarranty": [
   {
    "name": "Platinum",
    "detail": "Up to the 4th year or 1,20,000 km"
   },
   {
    "name": "Royal Platinum",
    "detail": "Up to the 5th year or 1,40,000 km"
   },
   {
    "name": "Solitaire",
    "detail": "Up to the 6th year or 1,60,000 km (chosen by 29.1% of Sehgal new car buyers in FY 2026-27)"
   }
  ],
  "roadside": "Maruti Suzuki Road Service, 24 × 7 across India: towing, battery jump-start, lost keys, flat tyres and minor on-site repairs. Toll-free 1800-102-1800 · Sehgal Service Escalation Desk: +91 78880 60161.",
  "warrantySource": "https://www.marutisuzuki.com/arena/service/warranty",
  "genuinePartsTips": [
   "Look for the Maruti Suzuki Genuine Parts (MSGP) label on the pack.",
   "Scan the QR code on the label with Maruti Suzuki’s “Scan & Assure” app to confirm the part is genuine."
  ],
  "partsPriceUrl": "https://www.marutisuzuki.com/genuine-parts/search",
  "accessoriesUrl": "https://www.marutisuzuki.com/genuine-accessories",
  "trueValueUrl": "https://www.truevalueofbavdhan.com/",
  "rewardsUrl": "https://www.marutisuzuki.com/more-from-us/maruti-suzuki-rewards"
 },
 "insurance": {
  "msiUrl": "https://www.marutisuzukiinsurance.com",
  "sehgalPortfolio": {
   "totalMarutiPolicies": 15047,
   "newCarPolicies": 4491,
   "renewalPolicies": 10556,
   "miOwnRenewalRetentionPct": 97.1,
   "heroPolicies": 5652,
   "preferredPartnerName": "Bajaj Allianz General Insurance",
   "preferredPartnerNewSharePct": 43.22,
   "preferredPartnerArenaNewSharePct": 42.06,
   "preferredPartnerNexaNewSharePct": 44.03,
   "preferredPartnerTotalPolicies": 3526,
   "preferredPartnerNewPolicies": 1941,
   "preferredPartnerRenewalPolicies": 1585,
   "strategicArrangement": "Backed by Sehgal Autoriders’ ₹1 Crore strategic advance & green-channel cashless settlement arrangement with Bajaj Allianz General Insurance — ensuring instant policy issuance for new Arena & NEXA deliveries and priority surveyor approval across all Sehgal bodyshops.",
   "deskEmail": "insurance@sehgalautoriders.com",
   "deskContacts": [
    {"name": "Sarika (MI Renewal & Claims Desk)", "phone": "8888881399"},
    {"name": "Manish (Insurance Advisor)", "phone": "9552525980"},
    {"name": "Suraj (Insurance Support)", "phone": "7888008987"}
   ],
   "insurers": [
    {
     "rank": 1,
     "code": "BAJAJ",
     "name": "Bajaj Allianz General Insurance Co. Ltd.",
     "role": "#1 Preferred New Car & Priority Cashless Partner",
     "newCarPolicies": 1941,
     "newCarShare": "43.22% (#1 in Arena 42.1% & NEXA 44.0%)",
     "renewalPolicies": 1585,
     "totalPolicies": 3526,
     "totalShare": "23.43% (#1 Overall)",
     "highlight": "₹1 Cr Strategic Cashless Corridor · Instant New Car Issuance & Express Bodyshop Approval"
    },
    {
     "rank": 2,
     "code": "RSA",
     "name": "Royal Sundaram General Insurance",
     "role": "#2 Overall & #2 Renewal Partner (MI Tie-Up)",
     "newCarPolicies": 377,
     "newCarShare": "8.39%",
     "renewalPolicies": 1351,
     "totalPolicies": 1728,
     "totalShare": "11.48%",
     "highlight": "Strong Zero-Dep & RTI renewal continuity across 1,351+ Sehgal renewals"
    },
    {
     "rank": 3,
     "code": "ICICI",
     "name": "ICICI Lombard General Insurance",
     "role": "#2 New Car Insurer & Authorised MI Cashless Partner",
     "newCarPolicies": 472,
     "newCarShare": "10.51% (#2 in New Cars)",
     "renewalPolicies": 1039,
     "totalPolicies": 1511,
     "totalShare": "10.04%",
     "highlight": "Preferred corporate & NEXA insurer with paperless workshop claim settlement"
    },
    {
     "rank": 4,
     "code": "SBIG",
     "name": "SBI General Insurance",
     "role": "#3 Renewal Partner & Preferred PSU Bank-Linked Insurer",
     "newCarPolicies": 353,
     "newCarShare": "7.86%",
     "renewalPolicies": 1053,
     "totalPolicies": 1406,
     "totalShare": "9.34%",
     "highlight": "Seamless pairing with SBI Car Loans and pan-India Maruti Insurance cashless cover"
    },
    {
     "rank": 5,
     "code": "GODIGIT",
     "name": "Go Digit General Insurance",
     "role": "#3 New Car Insurer ( Maruti & Hero Two-Wheelers )",
     "newCarPolicies": 444,
     "newCarShare": "9.89% (#3 in New Cars)",
     "renewalPolicies": 680,
     "totalPolicies": 1124,
     "totalShare": "7.47%",
     "highlight": "Fast digital onboarding; also #1 in Hero MotoCorp two-wheeler policies (1,829 Hero policies)"
    },
    {
     "rank": 6,
     "code": "HDFC",
     "name": "HDFC ERGO General Insurance",
     "role": "Preferred HDFC Bank-Linked & Hero MISP Partner",
     "newCarPolicies": 254,
     "newCarShare": "5.66%",
     "renewalPolicies": 742,
     "totalPolicies": 996,
     "totalShare": "6.62%",
     "highlight": "1,656+ combined Maruti & Hero policies with cashless bodyshop tie-up"
    },
    {
     "rank": 7,
     "code": "NIA",
     "name": "The New India Assurance Co. Ltd.",
     "role": "Leading Government PSU Insurer on Maruti Insurance Panel",
     "newCarPolicies": 86,
     "newCarShare": "1.92%",
     "renewalPolicies": 826,
     "totalPolicies": 912,
     "totalShare": "6.06%",
     "highlight": "Trusted public-sector cover for long-term renewals, commercial & institutional fleets"
    },
    {
     "rank": 8,
     "code": "REL",
     "name": "Reliance General Insurance",
     "role": "Authorised Maruti Insurance Renewal Partner",
     "newCarPolicies": 2,
     "newCarShare": "—",
     "renewalPolicies": 787,
     "totalPolicies": 789,
     "totalShare": "5.24%",
     "highlight": "Cashless MI renewal support across all Sehgal service locations"
    },
    {
     "rank": 9,
     "code": "USGI",
     "name": "Universal Sompo General Insurance",
     "role": "Authorised Maruti Insurance Partner",
     "newCarPolicies": 36,
     "newCarShare": "0.80%",
     "renewalPolicies": 713,
     "totalPolicies": 749,
     "totalShare": "4.98%",
     "highlight": "Competitive renewal premiums with full MI workshop cashless privileges"
    },
    {
     "rank": 10,
     "code": "MAGMA_LIBERTY",
     "name": "Magma HDI & Liberty General Insurance",
     "role": "Authorised New Car & Commercial Insurers",
     "newCarPolicies": 407,
     "newCarShare": "9.06%",
     "renewalPolicies": 101,
     "totalPolicies": 508,
     "totalShare": "3.38%",
     "highlight": "Strong new-vehicle underwriting for Arena, Commercial & rural segments"
    }
   ]
  },
  "ncb": [
   {
    "years": "1 claim-free year",
    "percent": 20
   },
   {
    "years": "2 claim-free years",
    "percent": 25
   },
   {
    "years": "3 claim-free years",
    "percent": 35
   },
   {
    "years": "4 claim-free years",
    "percent": 45
   },
   {
    "years": "5 claim-free years or more",
    "percent": 50
   }
  ],
  "ncbSource": "https://irdai.gov.in/documents/37343/993134/60_GEN893.pdf/9513384e-0178-d466-f84f-7ffea9cf085b?version=1.1&t=1668236846220&download=true",
  "idvDepreciation": [
   {
    "age": "Up to 6 months",
    "percent": 5
   },
   {
    "age": "Over 6 months up to 1 year",
    "percent": 15
   },
   {
    "age": "Over 1 year up to 2 years",
    "percent": 20
   },
   {
    "age": "Over 2 years up to 3 years",
    "percent": 30
   },
   {
    "age": "Over 3 years up to 4 years",
    "percent": 40
   },
   {
    "age": "Over 4 years up to 5 years",
    "percent": 50
   },
   {
    "age": "Beyond 5 years / obsolete models",
    "percent": "By agreement with the insurer"
   }
  ],
  "idvSource": "https://irdai.gov.in/documents/37343/993134/60_GEN893.pdf/9513384e-0178-d466-f84f-7ffea9cf085b?version=1.1&t=1668236846220&download=true",
  "thirdPartyPrivateCar": [
   {
    "band": "Up to 1,000 cc",
    "premium": "₹2,094"
   },
   {
    "band": "1,001 cc to 1,500 cc",
    "premium": "₹3,416"
   },
   {
    "band": "Above 1,500 cc",
    "premium": "₹7,897"
   }
  ],
  "thirdPartyNote": "Base premium for one year, as notified by the Government of India on 25-05-2022 (effective 01-06-2022). Your insurer will confirm the current amount.",
  "thirdPartySource": "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1828414"
 },
 "digitalPresence": {
  "headline": "Sehgal Autoriders — Complete Digital & Social Ecosystem",
  "subheadline": "Connect with us across YouTube, Instagram, Facebook, LinkedIn, WhatsApp and our 8 official Maruti Suzuki Hyperlocal websites.",
  "socialChannels": [
   {
    "platform": "YouTube",
    "handle": "@sehgalautoriders",
    "url": "https://www.youtube.com/@sehgalautoriders",
    "badge": "OFFICIAL VIDEO CHANNEL",
    "description": "Watch customer delivery diaries, showroom walkarounds, service & car-care tips, and MD Nicky Sehgal on Autocar Dialogues."
   },
   {
    "platform": "Instagram",
    "handle": "@sehgalautoriders",
    "url": "https://www.instagram.com/sehgalautoriders/",
    "badge": "STORIES & DELIVERIES",
    "description": "Daily delivery reels, 27-year celebration highlights, new model launches, and monsoon/summer car-care tips from Pune & Lonavala."
   },
   {
    "platform": "Facebook",
    "handle": "Sehgal Autoriders Network (8 Official Branch Pages)",
    "url": "https://www.facebook.com/marutisuzukiarenasehgalautoriderserandwane/",
    "badge": "COMMUNITY & CAMPAIGNS",
    "description": "Dedicated official Facebook pages for Erandwane, Bavdhan Arena, Bavdhan True Value, Fatima Nagar NEXA, Lonavala Arena & NEXA, Khed Shivapur and Bhor."
   },
   {
    "platform": "LinkedIn",
    "handle": "Sehgal Autoriders Pvt. Ltd.",
    "url": "https://www.linkedin.com/company/sehgal-autoriders-pvt-ltd/",
    "badge": "CORPORATE & CAREERS",
    "description": "Corporate milestones, leadership insights, OEM recognition and career opportunities across our 2,400+ strong team (gm.hr@sehgalautoriders.com)."
   },
   {
    "platform": "WhatsApp Direct",
    "handle": "+91 83800 38244 (Central Digital Desk)",
    "url": "https://wa.me/918380038244?text=Hello%20Sehgal%20Autoriders%2C%20I%20would%20like%20assistance%20with%20a%20vehicle%20or%20service.",
    "badge": "INSTANT RESPONSE",
    "description": "Instant WhatsApp routing for test drives, on-road quotes, Bajaj Allianz insurance renewals, HDFC/SBI finance and service bookings."
   }
  ],
  "hyperlocalPortals": [
   {
    "name": "Arena — Law College Road (Erandwane)",
    "domain": "arenaoferandwane.com",
    "url": "https://www.arenaoferandwane.com/",
    "fbUrl": "https://www.facebook.com/marutisuzukiarenasehgalautoriderserandwane/",
    "channel": "Maruti Suzuki Arena",
    "phone": "08062513562",
    "webId": "129"
   },
   {
    "name": "Arena — Bavdhan 3S Flagship",
    "domain": "arenaofbavdhan.com",
    "url": "https://www.arenaofbavdhan.com/",
    "fbUrl": "https://www.facebook.com/marutisuzukiarenasehgalautoridersbavdhan/",
    "channel": "Maruti Suzuki Arena & Service",
    "phone": "08071645524",
    "webId": "1412"
   },
   {
    "name": "NEXA — Fatima Nagar (Wanowrie)",
    "domain": "nexaoffatimanagar.com",
    "url": "https://www.nexaoffatimanagar.com/",
    "fbUrl": "https://www.facebook.com/nexasehgalfatimanagar",
    "channel": "Maruti Suzuki NEXA",
    "phone": "08062511897",
    "webId": "134"
   },
   {
    "name": "NEXA — Lonavala East (Waksai)",
    "domain": "nexaoflonavalaeast.com",
    "url": "https://www.nexaoflonavalaeast.com/",
    "fbUrl": "https://www.facebook.com/NEXASehgalAutoridersLonavalaWaksai/",
    "channel": "Maruti Suzuki NEXA & Service",
    "phone": "08071010473",
    "webId": "6365"
   },
   {
    "name": "Arena — Waksai Lonavala",
    "domain": "arenaofwaksailonavla.com",
    "url": "https://www.arenaofwaksailonavla.com/",
    "fbUrl": "https://www.facebook.com/marutisuzukiarenasehgalautoriderswaksailonavla/",
    "channel": "Maruti Suzuki Arena & Service",
    "phone": "08037394880",
    "webId": "1675"
   },
   {
    "name": "Arena — Khed Shivapur (NH-48)",
    "domain": "arenaofkhedshivapur.com",
    "url": "https://www.arenaofkhedshivapur.com/",
    "fbUrl": "https://www.facebook.com/MarutiSuzukiArenaSehgalAutoridersPvtLtdKhedMH/",
    "channel": "Maruti Suzuki Arena & Service",
    "phone": "08071647799",
    "webId": "5205"
   },
   {
    "name": "Arena — Rambaug Bhor",
    "domain": "arenaoframbaugbhor.com",
    "url": "https://www.arenaoframbaugbhor.com/",
    "fbUrl": "https://www.facebook.com/marutisuzukiarenasehgalautoridersrambaugbhor",
    "channel": "Maruti Suzuki Arena & Service",
    "phone": "08071647067",
    "webId": "1819"
   },
   {
    "name": "True Value — Bavdhan Pre-Owned Hub",
    "domain": "truevalueofbavdhan.com",
    "url": "https://www.truevalueofbavdhan.com/",
    "fbUrl": "https://www.facebook.com/marutisuzukitruevaluesehgalautoridersbavdhan/",
    "channel": "Maruti Suzuki True Value",
    "phone": "08071649360",
    "webId": "1598"
   }
  ]
 },
 "csr": {}
};
