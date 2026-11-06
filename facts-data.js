'use strict';
/* Facts from official sources (lenders, Maruti Suzuki, IRDAI, Government of India, Global NCAP, Bharat NCAP)
   plus verified Sehgal Autoriders operational, Vahan, Retail Finance, Wholesale Inventory, Insurance & W2 Gate-Entry Road-Care Guidebooks, updated 06-11-2026. */
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
    {
     "name": "Sarika Tupere (MI Renewal & Claims Desk)",
     "phone": "8888881399"
    },
    {
     "name": "Manish Takwale (Car Insurance Renewal Desk)",
     "phone": "7888039845"
    },
    {
     "name": "Manish Takwale (Alternate Desk)",
     "phone": "9552525980"
    },
    {
     "name": "Suraj (Insurance Support)",
     "phone": "7888008987"
    }
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
    "handle": "@sehgalautoriders5087",
    "url": "https://www.youtube.com/@sehgalautoriders5087",
    "badge": "OFFICIAL VIDEO CHANNEL",
    "description": "Watch customer delivery diaries, showroom walkarounds, service & car-care tips, and MD Nicky Sehgal on Autocar Dialogues."
   },
   {
    "platform": "Instagram",
    "handle": "@sehgalautoridersindia",
    "url": "https://www.instagram.com/sehgalautoridersindia/",
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
 "csr": {},
 "roadCareGuide": {
  "headline": "Sehgal Customer Vehicle Guidebooks — English, मराठी, Insurance, Two-Wheeler & EV Care",
  "subheadline": "Sent automatically with every W2 Gate Entry & Workshop Reception email at Sehgal Autoriders — now available online with Hero MotoCorp Two-Wheeler, Scooter & Electric Vehicle (e VITARA & VIDA) safety guidelines as part of our Corporate Social Responsibility.",
  "w2MailInfo": {
   "subjectExample": "Greetings From Maruti Suzuki - Sehgal Autoriders Pvt Ltd - <RegNo> - <Model>",
   "sender": "sehgalautoriders2011@gmail.com",
   "trigger": "Automated on every incoming vehicle Gate Entry & Reception Entry across Sehgal Autoriders workshops",
   "feedbackFormUrl": "https://forms.gle/TXwLzt3U5G2y5E659"
  },
  "gateEntryPdfs": [
   {
    "id": "english-guide",
    "badge": "W2 GATE ENTRY PDF #1 · ENGLISH",
    "title": "Customer Vehicle Guidebook — English",
    "subtitle": "7-Page Official Maruti Suzuki Road-Care, Daily Do’s & Don’ts, Overheating FAQ, Preventive Maintenance, Fuel Efficiency & Road-Trip Guide.",
    "pages": "7 Pages · 129 KB",
    "file": "assets/guidebooks/Customer-Vehicle-Guidebook-English.pdf"
   },
   {
    "id": "marathi-guide",
    "badge": "W2 GATE ENTRY PDF #2 · मराठी",
    "title": "ग्राहक वाहन मार्गदर्शिका — मराठी (Marathi Guidebook)",
    "subtitle": "७-पानी अधिकृत मारुती सुझुकी वाहन काळजी पुस्तिका: रोजच्या करावयाच्या गोष्टी, दैनिक करू नका, प्रतिबंधात्मक देखभाल, इंधन कार्यक्षमता आणि रोड ट्रिपसाठी टिप्स.",
    "pages": "7 Pages · 246 KB",
    "file": "assets/guidebooks/Customer-Vehicle-Guidebook-Marathi.pdf"
   },
   {
    "id": "insurance-ppt",
    "badge": "W2 GATE ENTRY PDF #3 · INSURANCE",
    "title": "Motor Insurance Guide, Myths & 5-Step Claims PPT",
    "subtitle": "22-Slide Sehgal Autoriders & Maruti Suzuki Insurance Broking Presentation: 6 Insurance Myths vs Facts, Add-ons (Zero-Dep, Engine Protect, RTI, HEV Secure), Endorsements & NCB Slabs.",
    "pages": "22 Slides · 2.1 MB",
    "file": "assets/guidebooks/Sehgal-Maruti-Insurance-Guide-PPT.pdf"
   },
   {
    "id": "reception-bilingual",
    "badge": "RECEPTION DESK EDITION · BILINGUAL",
    "title": "Combined Reception Guidebook (English + मराठी)",
    "subtitle": "Complete 14-Page Combined Bilingual Edition (Pages 1–7 English + Pages 8–14 मराठी) shared at Sehgal Workshop Reception Desks.",
    "pages": "14 Pages · 346 KB",
    "file": "assets/guidebooks/Customer-Guidebook-Bilingual-Reception.pdf"
   },
   {
    "id": "ev-driving-charging",
    "badge": "MARUTI SERVICE · EV & DRIVING TIPS",
    "title": "Suggested Driving & EV Charging Tips (13B)",
    "subtitle": "Official Maruti Suzuki Service checklist covering Safe Driving, Hill & Wet-Road Techniques, Regenerative Braking and EV Battery Charging Best Practices.",
    "pages": "1 Page · 383 KB",
    "file": "assets/guidebooks/Suggested-Driving-and-EV-Charging-Tips.pdf"
   }
  ],
  "workshopEscalationMatrix": [
   {
    "level": "Level 1 · Assistant Works Manager (AWM)",
    "name": "Swapnil Gunjal",
    "phone": "8999557553",
    "email": "wmservice@sehgalautoriders.com"
   },
   {
    "level": "Level 2 · Customer Care Manager (CCM)",
    "name": "Amruta Magdum",
    "phone": "7888060161",
    "email": "Customercare.service@sehgalautoriders.com"
   },
   {
    "level": "Level 3 · Works Manager (WM)",
    "name": "Satish Mane",
    "phone": "8888881315",
    "email": "wmservice@sehgalautoriders.com"
   },
   {
    "level": "Level 4 · General Manager Service (GM)",
    "name": "Yogesh Patil",
    "phone": "7977793231",
    "email": "gmservice@sehgalautoriders.com"
   },
   {
    "level": "Level 5 · CEO — Service",
    "name": "Ravi Pimperkar",
    "phone": "7888060161",
    "email": "ceoservice@sehgalautoriders.com"
   },
   {
    "level": "Insurance Renewal & Claim Desk",
    "name": "Manish Takwale & Sarika Tupere",
    "phone": "7888039845",
    "altPhone": "8888881399",
    "email": "insurance@sehgalautoriders.com"
   }
  ],
  "marutiEnglish": {
   "dailyDos": [
    "Walk around your car every morning before starting and inspect tyre pressure & tread condition.",
    "Check beneath the vehicle for any engine oil, brake fluid or transmission oil leaks.",
    "Check for any coolant leaks around the radiator hose and reservoir tank.",
    "Inspect front and rear wiper blade rubber condition — critical before Pune & Lonavala monsoons.",
    "Check body panels for deep scratches that could expose bare metal and cause rusting.",
    "Ensure all rear-view mirrors (ORVMs and IRVM) are clean, unbroken and properly aligned.",
    "Perform a gentle top wash and remove dry leaves, twigs and dust from the bonnet cowl and wiper tray."
   ],
   "dailyDonts": [
    "NEVER touch or open the radiator cap when the engine is hot — pressurized steam can cause severe burns.",
    "Do not fit non-genuine electrical accessories or splice factory wiring harnesses — it harms performance and voids warranty.",
    "Do not use non-genuine spare parts; insist on Maruti Suzuki Genuine Parts (MSGP).",
    "Avoid parking in direct scorching sunlight for prolonged periods; park under shade whenever possible.",
    "If the vehicle is parked unused for a long period, start and run it periodically to keep the battery charged and fluids circulated.",
    "Do not keep the engine idling unnecessarily — 1 hour of idling wastes nearly 1 litre of petrol."
   ],
   "emergencyFaqs": [
    {
     "q": "What should I do if the car overheats (Red Coolant Temp Warning Light / ‘H’ mark)?",
     "a": "1) Turn off the AC immediately, switch on hazard lights, pull over safely and let the engine idle for a few minutes. 2) If the temperature does not drop or steam is escaping, switch off the engine immediately and DO NOT open the bonnet until steam subsides. 3) NEVER open the radiator cap while hot. 4) Once cooled, check the water pump belt and coolant reservoir level; top up only in the reservoir (never pour cold water into a hot engine)."
    },
    {
     "q": "How do I distinguish battery acid/electrolyte leakage from normal water rust?",
     "a": "Battery electrolyte leakage creates a distinct radial splatter pattern spreading outward from the battery tray onto adjacent engine-bay components, whereas normal water spillage causes localized surface rust."
    },
    {
     "q": "Why do water drops come out of the exhaust pipe?",
     "a": "Clean water droplets from the tailpipe on a cold start are normal condensation produced by complete combustion and the catalytic converter. Only thick white/blue smoke or soot requires workshop inspection."
    },
    {
     "q": "When is an engine overhaul needed & why balance wheels after every puncture?",
     "a": "Watch for excessive oil consumption over 5,000–10,000 km, bearing/piston-slap noise or sudden mileage drop. Always perform wheel balancing after every tyre puncture repair and periodic service to suit Indian road conditions."
    }
   ],
   "preventiveAndFuel": [
    "Air Filter Care: Clean every 5,000 km and replace every 40,000 km (Petrol) / 20,000 km (Diesel) — more often in dusty conditions.",
    "Pre-Summer AC Servicing (February–March): Get cooling coil, condenser fins, cabin filter, blower and O-ring joints inspected before summer peaks.",
    "Drive Steadily at 45–55 km/h: Driving at 40–50 km/h yields up to 40% better fuel economy than racing at 80+ km/h.",
    "Right Gear & Clutch Habit: Wrong gear shifting wastes up to 20% fuel; keep your foot off the clutch pedal and use the handbrake on inclines.",
    "Tyre Pressure & Load: 25% low tyre pressure increases rolling resistance by 20%, wastes 5–10% fuel and cuts tyre life by 25%. Removing 50 kg of unnecessary boot load saves 2% city fuel.",
    "Ghat & Fog Driving: On Lonavala, Khandala, Varandha or Bhor ghats, NEVER switch off the engine downhill — engage a lower gear for engine braking. In fog, always use low beam + fog lamps (never high beam)."
   ]
  },
  "marutiMarathi": {
   "dailyDosTitle": "रोजच्या करावयाच्या गोष्टी (Daily Do’s — वाहन सुरू करण्यापूर्वी)",
   "dailyDos": [
    "वाहन सुरू करण्यापूर्वी गाडीभोवती एक फेरी मारा आणि टायरचा दाब (Tyre Pressure) व स्थिती तपासा.",
    "गाडीखाली कोणत्याही प्रकारची ऑईल गळती (Oil Leak) किंवा कूलंट गळती (Coolant Leak) नाही ना याची खात्री करा.",
    "वायपर ब्लेडची (Wiper Blade) स्थिती आणि मागील आरशांची (Rear-View Mirrors) स्थिती तपासा.",
    "गाडीवर गंज (Rust) लागू शकेल असे खोल ओरखडे आहेत का ते पहा.",
    "गाडीवर साचलेली पाने, कचरा व धूळ साफ करा आणि नियमित टॉप वॉश करा."
   ],
   "dailyDontsTitle": "दैनिक करू नका (Daily Don’ts)",
   "dailyDonts": [
    "इंजिन गरम असताना रेडिएटरचे झाकण (Radiator Cap) कधीही उघडू नका किंवा त्याला हात लावू नका.",
    "गाडीच्या कार्यक्षमतेवर परिणाम करतील अशा बिगर-अधिकृत (Non-Genuine) ॲक्सेसरीज बसवू नका.",
    "बनावट किंवा नॉन-जेन्युइन स्पेअर पार्ट्स वापरू नका — नेहमी मारुती सुझुकी जेन्युइन पार्ट्स (MSGP) वापरा.",
    "गाडी जास्त वेळ कडक उन्हात पार्क करू नका; शक्यतो सावलीत पार्क करा.",
    "गाडी जास्त दिवस उभी राहणार असेल तर बॅटरी व इंजिन सुस्थितीत ठेवण्यासाठी ती अधूनमधून सुरू करा.",
    "इंजिन विनाकारण आयडलिंगवर (Idling) चालू ठेवू नका (२ मिनिटांपेक्षा जास्त थांबल्यास इंजिन बंद करा)."
   ],
   "preventiveTitle": "प्रतिबंधात्मक देखभाल, इंधन कार्यक्षमता आणि रोड ट्रिप टिप्स",
   "preventivePoints": [
    "एअर फिल्टर आणि फ्यूएल फिल्टर: पेट्रोल गाड्यांचे एअर फिल्टर दर ५,००० किमीला साफ करा व ४०,००० किमीला बदला.",
    "उन्हाळ्यापूर्वी एसी (AC) सर्व्हिसिंग: दरवर्षी फेब्रुवारी-मार्च महिन्यात एसी कुलिंग कॉईल, कंडेन्सर आणि गॅस जॉइंट्सची तपासणी करून घ्या.",
    "इंधन कार्यक्षमता (Fuel Efficiency): ४५–५५ किमी/तास या स्थिर वेगाने गाडी चालवा (८० किमी/तास पेक्षा ४० किमी/तास वेगाने ४०% पर्यंत जास्त मायलेज मिळते). क्लचवर पाय ठेवून गाडी चालवू नका.",
    "घाटातील आणि धुक्यातील प्रवास (Ghat & Fog Tips): घाटातून खाली उतरताना इंजिन कधीही बंद करू नका — इंजिन ब्रेकिंगसाठी खालचा गिअर (Low Gear) वापरा. धुक्यात नेहमी लो-बीम (Low Beam) आणि फॉग लाईट्स वापरा, हाय-बीम वापरू नका."
   ]
  },
  "insuranceGuide": {
   "dos": [
    "Always opt for Comprehensive (Package) Policy with Zero Depreciation, Engine Protect (Hydrostatic Lock), Return to Invoice (RTI) and Consumables cover — especially for Pune & Maval monsoons.",
    "Get every factory or external CNG/LPG kit endorsed on both RC and Insurance Policy (IMT-25) and ensure Ownership Transfer endorsement (IMT-3) within 14 days of buying/selling a used vehicle.",
    "Renew your policy before expiry (or within 90 days max) to protect your accumulated No Claim Bonus (20% to 50% discount on OD premium).",
    "When exchanging your old car at Sehgal True Value Bavdhan, obtain your NCB Retention Certificate to transfer up to 50% NCB discount to your new Maruti Suzuki.",
    "In case of an accident, bring your vehicle directly to any of our 7 Sehgal Authorised Bodyshops for Near-Cashless repair under our ₹1 Cr Bajaj Allianz & Maruti Insurance corridor."
   ],
   "donts": [
    "NEVER crank or restart a car that has stalled in waterlogged/flooded roads — cranking causes hydrostatic lock (consequential engine damage), which standard policies exclude unless Engine Protect is active.",
    "Never drive without a valid Driving Licence, under the influence of alcohol/drugs, or use a private white-plate car for commercial hire.",
    "Do not authorise unapproved roadside repairs before Claim Intimation & Surveyor Assessment.",
    "Do not assume Third-Party (Act Only) insurance covers damage to your own vehicle or theft — it covers only third-party liability."
   ],
   "mythsVsFacts": [
    {
     "myth": "Myth 1: Comprehensive insurance is unnecessary if I drive carefully.",
     "fact": "Fact: Third-Party cover is mandatory under the Motor Vehicles Act 1988, but only a Comprehensive Package policy protects your own vehicle against accidents, fire, theft, riots, floods, storms and landslides."
    },
    {
     "myth": "Myth 2: Only the person driving is liable in an accident.",
     "fact": "Fact: The registered owner of the vehicle is primarily responsible under law for third-party and occupant liabilities arising from an accident."
    },
    {
     "myth": "Myth 3: Standard comprehensive insurance covers 100% of every repair cost.",
     "fact": "Fact: Standard policies deduct age-wise plastic/metal depreciation and exclude consumables & hydrostatic engine lock unless you add Zero Depreciation, Engine Protect and Consumables covers."
    },
    {
     "myth": "Myth 4: Older cars are not targeted by thieves.",
     "fact": "Fact: Older vehicles lacking modern engine immobilizers and connected GPS security are often higher theft targets than new models."
    },
    {
     "myth": "Myth 5: Fitting a CNG / LPG kit reduces the insurance premium.",
     "fact": "Fact: CNG/LPG vehicles are classified as higher-usage vehicles and require mandatory IMT-25 endorsement with an additional premium to keep claims valid."
    },
    {
     "myth": "Myth 6: You must pay repair bills from your pocket first and wait for reimbursement.",
     "fact": "Fact: At Sehgal Autoriders, all 20+ Maruti Insurance partner companies (led by #1 Bajaj Allianz) provide Near-Cashless settlement directly with our workshop — with No Salvage Deductions and No Extra Charges for Tyre/Battery."
    }
   ],
   "claimSteps": [
    "Step 1 · Claim Intimation & Estimation: Call our Sehgal Bodyshop / MI Desk (+91 88888 81399 / +91 78880 39845) or MSIBPL Support (011/022/033/044-3377 4477) and bring your car to any Sehgal workshop.",
    "Step 2 · Surveyor Appointment & Loss Assessment: Automated digital surveyor allocation and transparent OEM-standard loss assessment.",
    "Step 3 · Commencement of Repairs Post Approvals: Genuine MSGP sheet-metal and mechanical restoration using OEM jigs and paint booths.",
    "Step 4 · Vehicle Re-Inspection & Quality Check: Final safety and road-test verification.",
    "Step 5 · Near-Cashless Delivery & Settlement: Insurer settles the approved bill directly with Sehgal Autoriders; you pay only compulsory policy excess and any non-covered items."
   ]
  },
  "heroTwoWheelerCare": {
   "headline": "Hero MotoCorp Two-Wheeler & Scooter Road-Care Guide (English & मराठी)",
   "subtitle": "Serving 1,01,505+ Hero riders across Chinchwad MIDC (10307), Hero Premia (17057), PCMC SSP (23490) and Chakan (61299).",
   "motorcycleDosDonts": [
    "Daily T-CLOCS Pre-Ride Check: Before riding your Splendor+ XTEC, HF Deluxe, Glamour, Xtreme or Mavrick 440, check Tyre pressure, Clutch/Brake free-play (10–20 mm), Lights/Indicators, Engine Oil level, Drive Chain slack, and Side-Stand Engine Cut-Off switch.",
    "Drive Chain Care (Every 500–700 km): Clean and lubricate the drive chain every 500–700 km (and every 300 km during Pune/PCMC monsoons) to prevent sprocket wear and jerky gear shifts.",
    "Use i3S Smartly: Keep Hero’s i3S (Idle Stop-Start System) enabled in city traffic signals to save 5–8% fuel; press the clutch to restart effortlessly.",
    "DON’T Ride the Clutch: Never rest your fingers on a half-pressed clutch lever while riding — it burns clutch plates and drops mileage.",
    "ISI Helmet & Defensive Braking: Both rider and pillion must wear strapped ISI-certified helmets. Apply both front and rear brakes progressively (IBS/ABS); avoid sudden front-brake locking on gravel or wet roads."
   ],
   "scooterDosDonts": [
    "Morning Cold-Start Routine (Destini 125, Pleasure+ XTEC, Xoom): Let the scooter engine idle for 20–30 seconds after the first morning start so oil reaches the cylinder head before accelerating.",
    "NEVER Throttle & Brake Together: In slow Chinchwad/Pune traffic, never hold the rear brake lever while keeping the throttle twisted — this overheats the CVT centrifugal clutch bell, causes juddering and wastes fuel.",
    "CVT Belt & Air Filter Inspection: Have the viscous air filter and CVT variator belt/rollers inspected every 6,000 km at our authorised Hero workshops (+91 90116 01819).",
    "Tyre Pressure for Pillion Loads: Scooters have smaller wheels (10–12 inch); maintain 22–25 PSI (Front) and 33–36 PSI (Rear with pillion) to prevent rim bends and sidewall punctures.",
    "मराठी टीप (Marathi Rider Tip): स्कूटर चालवताना ब्रेक दाबून धरून अ‍ॅक्सिलेटर (Throttle) फिरवू नका — यामुळे क्लच लायनर गरम होऊन मायलेज कमी होते. चालक आणि पाठीमागे बसणाऱ्या व्यक्तीने नेहमी ISI प्रमाणित हेल्मेट वापरावे."
   ]
  },
  "evCareGuide": {
   "headline": "Electric Vehicle (EV) Care, Driving & Charging Guide — Maruti e VITARA & Hero VIDA V1",
   "subtitle": "Combining official Maruti Suzuki Service Suggested Driving & Charging Tips (13B) and Hero VIDA EV battery care.",
   "chargingDos": [
    "Daily 20%–80% SOC Habit + Periodic 100% Top-Up: Keep daily state-of-charge between 20% and 80% for longevity, and charge to 100% once every 1–2 weeks so the Battery Management System (BMS) balances all LFP cells.",
    "Prefer AC Home / Wall-Box Charging: Use a dedicated 15A earthed socket or authorised NEXA / VIDA wall-box charger with proper MCB & earthing for routine charging.",
    "Precondition Before Long Trips: Pre-cool the cabin and precondition the battery while plugged into shore power before highway journeys (Pune–Mumbai Expressway or Lonavala/Mahabaleshwar).",
    "Thermal Pause After Highway Runs: Allow 15–20 minutes after a brisk summer highway drive before starting high-power DC fast charging."
   ],
   "chargingAndSafetyDonts": [
    "Avoid Frequent DC Fast Charging: As highlighted in Maruti Suzuki Service Guide 13B, avoid using DC fast charging too frequently when AC charging is available — frequent high-C fast charging accelerates battery wear.",
    "No Extension Cords or Multi-Plugs: Never plug a portable EV charger into household multi-plug adapters or unrated coiled extension cables (fire & overheating hazard).",
    "High-Voltage & Water-Wading Safety: Never touch orange high-voltage cables or direct a high-pressure water jet at the charging port, motor bay or underbody battery pack. Avoid deep standing water; if the underbody scrapes a speed-breaker or rock, get the battery shield inspected immediately at Sehgal NEXA / Hero VIDA service.",
    "Long-Term Parking Rule: Never leave an EV parked below 10% charge or at 100% in hot sun for weeks; store in shade at 50%–60% SOC.",
    "मराठी ईव्ही टीप (Marathi EV Tip): इलेक्ट्रिक वाहन (e VITARA / VIDA) चार्ज करताना नेहमी अर्थिंग असलेल्या अधिकृत सॉकेटचा वापर करा; साध्या एक्सटेंशन कॉर्डचा वापर कधीही करू नका आणि वारंवार फक्त फास्ट चार्जिंग करणे टाळा."
   ]
  }
 }
};
