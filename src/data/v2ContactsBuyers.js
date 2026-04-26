// V2 L3 — International buyer contacts (HK, SG, Japan, Spain, US, GCC, China, UK)

export const buyerContacts = [
  // HK
  { market: 'HK', entity: 'Cheung Kee Sea Products HK Ltd', address: 'Sai Ying Pun + Western Wholesale Market, HK', phone: '+852-2547-XXXX', email: 'sales@cheungkee.hk', web: 'cheungkee.hk', askFor: 'Live mud crab + lobster trial 100-200 kg', note: '~30% HK mud crab share' },
  { market: 'HK', entity: 'Cheung Kong Seafood Ltd', address: 'Aberdeen Wholesale Fish Market, HK', phone: '+852-2873-XXXX', askFor: 'Live + frozen lobster bulk; mainland China onward distribution' },
  { market: 'HK', entity: 'Chi Ho Sea Products Co.', phone: '+852-2858-XXXX', askFor: 'Premium lobster + reef-fish; ~18% HK mud crab share' },
  { market: 'HK', entity: 'Fat Kee Seafood Trading', web: 'fatkeeseafood.co', askFor: 'Specialty live species; yellow-oil crab seasonal' },
  { market: 'HK', entity: 'Worldwide Seafood Limited', web: 'worldwide-seafood.net', askFor: '5-star hotel grade lobster supply; introduction to Four Seasons + Mandarin' },
  { market: 'HK', entity: 'Synergy Seafood Limited', web: 'synergyseafood.com', askFor: 'Mid-tier importer; flexible contracts' },
  { market: 'HK', entity: 'AFCD HK (regulator)', address: '5/F Cheung Sha Wan Govt Offices, HK', phone: '+852-2150-7022', email: 'enquiry@afcd.gov.hk', askFor: 'Live aquatic import permit + per-shipment endorsement' },
  // SG
  { market: 'SG', entity: 'Song Fish Dealer Pte Ltd', address: 'Jurong Fishery Port, Singapore 619742', phone: '+65-6261-XXXX', email: 'enquiry@songfish.com.sg', askFor: 'Wholesale live-seafood; high-volume buyer' },
  { market: 'SG', entity: 'Tien Wang Seafood', phone: '+65-6863-XXXX', askFor: 'Specialty live crab + lobster' },
  { market: 'SG', entity: 'Quiet Mind Seafood', web: 'quietmindseafood.sg', askFor: 'Mid-tier importer + restaurant supply' },
  { market: 'SG', entity: 'Singapore Food Agency (SFA)', address: '52 Jurong Gateway Rd, Singapore 608550', phone: '+65-6805-2992', email: 'sfa_enquiries@sfa.gov.sg', web: 'sfa.gov.sg', askFor: 'Import permit; HS-code-specific approvals' },
  // Japan
  { market: 'Japan', entity: 'Mitsubishi Corporation Seafood Division', address: 'Marunouchi Park Building, 2-6-1 Marunouchi, Chiyoda-ku, Tokyo 100-8086', phone: '+81-3-3210-2121', web: 'mitsubishicorp.com', askFor: 'Yellowfin saku + cooked shrimp; "Seafresh" brand' },
  { market: 'Japan', entity: 'Maruha Nichiro Corporation', address: 'Toyosu Foresia, 3-2-20 Toyosu, Koto-ku, Tokyo 135-8608', phone: '+81-3-6833-0826', web: 'maruha-nichiro.com', askFor: 'MSC-certified yellowfin tuna; Japan\'s largest seafood co.' },
  { market: 'Japan', entity: 'Nissui (Nippon Suisan Kaisha)', address: 'Nishi-Shinbashi 1-2-2, Minato-ku, Tokyo 105-8676', phone: '+81-3-6206-7000', web: 'nissui.co.jp', askFor: 'Saku + loin + cooked shrimp; Nippon Access distribution' },
  { market: 'Japan', entity: 'Kyokuyo Co. Ltd', address: 'Akasaka 6-1-20, Minato-ku, Tokyo 107-0052', phone: '+81-3-5545-0700', web: 'kyokuyo.co.jp', askFor: 'Tuna + pelagic specialist; mid-size sogo shosha' },
  { market: 'Japan', entity: 'Mitsui & Co Ltd Foods Div', address: 'Otemachi One Tower, 1-2-1 Otemachi, Chiyoda-ku, Tokyo 100-8631', phone: '+81-3-3285-1111', web: 'mitsui.com', askFor: 'Canned tuna grade + frozen shrimp imports' },
  { market: 'Japan', entity: 'Toyosu Wholesale Market', address: '6-3 Toyosu, Koto-ku, Tokyo 135-0061', web: 'shijou.metro.tokyo.lg.jp', askFor: 'Final destination for premium tuna saku via sogo shosha' },
  { market: 'Japan', entity: 'MHLW Food Safety Bureau', address: '1-2-2 Kasumigaseki, Chiyoda-ku, Tokyo 100-8916', phone: '+81-3-5253-1111', web: 'mhlw.go.jp', askFor: 'Establishment registration + per-shipment notification (2-3 day pre-arrival)' },
  // Spain / EU
  { market: 'Spain', entity: 'Nueva Pescanova SL', address: 'Calle Jose Fernandez Lopez s/n, 36320 Chapela, Redondela, Pontevedra', phone: '+34-986-818-100', web: 'nuevapescanova.com', askFor: 'Bulk frozen octopus; world\'s first octopus captive breeder' },
  { market: 'Spain', entity: 'Freiremar S.A.', address: 'Calle Beiramar 113, 36208 Vigo, Pontevedra', phone: '+34-986-298-600', web: 'freiremar.com', askFor: 'Frozen octopus alternative to Morocco; Galician hub' },
  { market: 'Spain', entity: 'Pereira Group / Pescapuerta', address: 'Vigo, Pontevedra', phone: '+34-986-244-000', web: 'pereira.es', askFor: 'Mid-large importer + processing' },
  { market: 'Spain', entity: 'Grupo Profand', address: 'Calle Beiramar 25, Vigo', phone: '+34-986-481-400', web: 'profandgroup.com', askFor: 'Octopus + cephalopod growth segment' },
  { market: 'Spain', entity: 'Grupo Iberconsa', address: 'Avda. Beiramar 73, Vigo', phone: '+34-986-432-400', web: 'iberconsa.com', askFor: 'Hake + octopus + squid; recent ownership change' },
  { market: 'Spain', entity: 'Caladero (Mercadona supplier)', address: 'Plataforma Logística PLAZA, Zaragoza', phone: '+34-976-309-540', web: 'caladero.com', askFor: 'Mercadona private-label fresh + frozen' },
  { market: 'Spain', entity: 'Conxemar (trade fair organizer)', address: 'IFEVI, Avda. del Aeropuerto s/n, 36318 Vigo', phone: '+34-986-433-351', web: 'conxemar.com', askFor: 'Booth booking — fair held first week October annually' },
  // US
  { market: 'US', entity: 'Eastern Fish Company', address: '4 Executive Plaza, Suite 100, Teaneck, NJ 07666', phone: '+1-201-801-0800', web: 'easternfish.com', askFor: 'SAIL brand shrimp; broad species portfolio (40+ years)' },
  { market: 'US', entity: 'Pacific American Fish Co (PAFCO)', address: '5525 S Soto St, Vernon, CA 90058', phone: '+1-323-589-9101', web: 'pafcousa.com', askFor: 'Oceankist + Pacific Surf brands; retail-focused 3000+ SKUs' },
  { market: 'US', entity: 'Pacific Seafood Group', address: '16797 SE 130th Ave, Clackamas, OR 97015', phone: '+1-503-905-4500', web: 'pacificseafood.com', askFor: 'Largest US integrated seafood; live + frozen' },
  { market: 'US', entity: 'Tradex Foods Inc', address: '101-3550 Mt Lehman Rd, Abbotsford, BC, Canada', phone: '+1-604-852-3500', web: 'tradexfoods.com', askFor: 'MSC + RFM + Ocean Wise certified; 40 mn lbs/year' },
  { market: 'US', entity: 'Slade Gorton & Co Inc', address: '54 Newmarket Square, Boston, MA 02118', phone: '+1-617-227-0800', web: 'sladegorton.com', askFor: 'Oldest US seafood importer; broad book' },
  { market: 'US', entity: 'Seafood Expo North America (Boston)', address: 'Boston Convention & Exhibition Center', web: 'seafoodexpo.com/north-america', askFor: 'Booth booking — held 2nd week March annually' },
  // GCC
  { market: 'UAE', entity: 'Gulf Seafood LLC', address: 'Dubai Investment Park, Dubai', phone: '+971-4-885-0000', web: 'gulfseafood.com', askFor: 'Hypermarket private label + foodservice' },
  { market: 'UAE', entity: 'Seafood Souq', address: 'Dubai Multi Commodities Centre', phone: '+971-4-454-1666', web: 'seafoodsouq.com', askFor: 'B2B marketplace + trading house' },
  { market: 'UAE', entity: 'Al Safadi Group', address: 'Sheikh Zayed Rd, Dubai', phone: '+971-4-XXX', askFor: 'Hotel + foodservice distribution' },
  { market: 'KSA', entity: 'Bin Zagr Co.', address: 'Jeddah, Saudi Arabia', phone: '+966-12-XXX', web: 'binzagr.com', askFor: 'Institutional distribution; supermarket + foodservice' },
  // China
  { market: 'China', entity: 'Zhenhaihua Seafood Wholesale Market', address: 'Zhoushan, Zhejiang Province', phone: '+86-580-XXX', askFor: 'Pelagic + cephalopod wholesale; LC at sight' },
  { market: 'China', entity: 'Guangzhou Huangsha Aquatic Products Wholesale Market', address: 'Liwan District, Guangzhou', phone: '+86-20-XXX', askFor: 'Southern China hub; live + frozen' },
  { market: 'China', entity: 'Sichuan Haidilao Global Foods', address: 'Chengdu, Sichuan', web: 'haidilao.com', askFor: 'Hotpot chain procurement; ribbonfish + squid' },
  // UK
  { market: 'UK', entity: 'Tesco PLC procurement', address: 'Tesco House, Welwyn Garden City, Hertfordshire AL7 1GA', phone: '+44-1992-632-222', web: 'tescoplc.com', askFor: 'Private label cooked + breaded shrimp; CETA-routed' },
  { market: 'UK', entity: 'Sainsbury\'s', address: '33 Holborn, London EC1N 2HT', phone: '+44-20-7695-6000', web: 'about.sainsburys.co.uk', askFor: 'Premium seafood private label' },
  { market: 'UK', entity: 'Marks & Spencer Food', address: 'Waterside House, 35 N Wharf Rd, London W2 1NW', phone: '+44-20-7935-4422', web: 'marksandspencer.com', askFor: 'Premium private label; sustainability-focused buyer' },
  { market: 'UK', entity: 'Seafood Expo Global (Barcelona)', address: 'Fira Barcelona Gran Via', web: 'seafoodexpo.com/global', askFor: 'EU\'s biggest seafood fair; held late April annually' },
];

export const buyerOnboardingFlow = [
  { step: 1, days: 'Day 0', action: 'Cold email + LinkedIn intro to specific buyer (no generic blasts)' },
  { step: 2, days: 'Day 7-14', action: 'Sample dispatch (200-500 g vacuum-packed; with lab cert + HACCP doc)' },
  { step: 3, days: 'Day 14-30', action: 'Buyer QC + initial feedback' },
  { step: 4, days: 'Day 30-60', action: 'Pricing + LOI negotiation' },
  { step: 5, days: 'Day 60-120', action: 'First trial commercial shipment 100-200 kg' },
  { step: 6, days: 'Month 4-6', action: 'Scale to first container (~22 MT) on LC at sight' },
  { step: 7, days: 'Month 12+', action: 'Term contract + open account credit terms' },
];
