export function createFakeData(n = 1000): any[] {
  var list: any[] = [];
  let jobs = JOBS_DATASET;
  var index = n;
  while (n != 0) {
    list.push({
      FIELD1: index - n + 1,
      jobTitle: jobs[Math.floor(Math.random() * 28)].jobTitle,
      SalaryEstimate: jobs[Math.floor(Math.random() * 28)].SalaryEstimate,
      Rating: jobs[Math.floor(Math.random() * 28)].Rating,
      CompanyName: jobs[Math.floor(Math.random() * 28)].CompanyName,
      Location: jobs[Math.floor(Math.random() * 28)].Location,
      Headquarters: jobs[Math.floor(Math.random() * 28)].Headquarters,
      Size: jobs[Math.floor(Math.random() * 28)].Size,
      type: [
        { value: 0, label: 'Back' },
        { value: 1, label: 'Front' },
        { value: 2, label: 'DevOps' },
        { value: 3, label: 'Database' },
        { value: 4, label: 'Team Leader' }
      ][Math.floor(Math.random() * 5)].label,
      isMarried: [true, false][Math.floor(Math.random() * 2)],
      Founded: jobs[Math.floor(Math.random() * 28)].Founded,
      TypeOfOwnership: jobs[Math.floor(Math.random() * 28)].TypeOfOwnership,
      Industry: jobs[Math.floor(Math.random() * 28)].Industry,
      Sector: jobs[Math.floor(Math.random() * 28)].Sector,
      Revenue: jobs[Math.floor(Math.random() * 28)].Revenue,
      Competitors: jobs[Math.floor(Math.random() * 28)].Competitors,
      EasyApply: jobs[Math.floor(Math.random() * 28)].EasyApply
    });
    n--;
  }
  return list;
}

export const JOBS_DATASET = [
  {
    FIELD1: 0,
    jobTitle: 'Data Analyst, Center on Immigration and Justice (CIJ)',
    SalaryEstimate: '$37K-$66K (Glassdoor est.)',
    Rating: 3.2,
    CompanyName: 'Vera Institute of Justice\n3.2',
    Location: 'New York, NY',
    Headquarters: 'New York, NY',
    Size: '201 to 500 employees',
    Founded: 1961,
    TypeOfOwnership: 'Nonprofit Organization',
    Industry: 'Social Assistance',
    Sector: 'Non-Profit',
    Revenue: '$100 to $500 million (USD)',
    Competitors: '-1',
    EasyApply: 'TRUE'
  },
  {
    FIELD1: 1,
    jobTitle: 'Quality Data Analyst',
    SalaryEstimate: '$37K-$66K (Glassdoor est.)',
    Rating: 3.8,
    CompanyName: 'Visiting Nurse Service of New York\n3.8',
    Location: 'New York, NY',
    Headquarters: 'New York, NY',
    Size: '10000+ employees',
    Founded: 1893,
    TypeOfOwnership: 'Nonprofit Organization',
    Industry: 'Health Care Services & Hospitals',
    Sector: 'Health Care',
    Revenue: '$2 to $5 billion (USD)',
    Competitors: '-1',
    EasyApply: '-1'
  },
  {
    FIELD1: 2,
    jobTitle:
      'Senior Data Analyst, Insights & Analytics Team [Customer Operations]',
    SalaryEstimate: '$37K-$66K (Glassdoor est.)',
    Rating: 3.4,
    CompanyName: 'Squarespace\n3.4',
    Location: 'New York, NY',
    Headquarters: 'New York, NY',
    Size: '1001 to 5000 employees',
    Founded: 2003,
    TypeOfOwnership: 'Company - Private',
    Industry: 'Internet',
    Sector: 'Information Technology',
    Revenue: 'Unknown / Non-Applicable',
    Competitors: 'GoDaddy',
    EasyApply: '-1'
  },
  {
    FIELD1: 3,
    jobTitle: 'Data Analyst',
    SalaryEstimate: '$37K-$66K (Glassdoor est.)',
    Rating: 4.1,
    CompanyName: 'Celerity\n4.1',
    Location: 'New York, NY',
    Headquarters: 'McLean, VA',
    Size: '201 to 500 employees',
    Founded: 2002,
    TypeOfOwnership: 'Subsidiary or Business Segment',
    Industry: 'IT Services',
    Sector: 'Information Technology',
    Revenue: '$50 to $100 million (USD)',
    Competitors: '-1',
    EasyApply: '-1'
  },
  {
    FIELD1: 4,
    jobTitle: 'Reporting Data Analyst',
    SalaryEstimate: '$37K-$66K (Glassdoor est.)',
    Rating: 3.9,
    CompanyName: 'FanDuel\n3.9',
    Location: 'New York, NY',
    Headquarters: 'New York, NY',
    Size: '501 to 1000 employees',
    Founded: 2009,
    TypeOfOwnership: 'Company - Private',
    Industry: 'Sports & Recreation',
    Sector: 'Arts, Entertainment & Recreation',
    Revenue: '$100 to $500 million (USD)',
    Competitors: 'DraftKings',
    EasyApply: 'TRUE'
  },
  {
    FIELD1: 5,
    jobTitle: 'Data Analyst',
    SalaryEstimate: '$37K-$66K (Glassdoor est.)',
    Rating: 3.9,
    CompanyName: 'Point72\n3.9',
    Location: 'New York, NY',
    Headquarters: 'Stamford, CT',
    Size: '1001 to 5000 employees',
    Founded: 2014,
    TypeOfOwnership: 'Company - Private',
    Industry: 'Investment Banking & Asset Management',
    Sector: 'Finance',
    Revenue: 'Unknown / Non-Applicable',
    Competitors: '-1',
    EasyApply: '-1'
  },
  {
    FIELD1: 6,
    jobTitle: 'Business/Data Analyst (FP&A)',
    SalaryEstimate: '$37K-$66K (Glassdoor est.)',
    Rating: 4.4,
    CompanyName: 'Two Sigma\n4.4',
    Location: 'New York, NY',
    Headquarters: 'New York, NY',
    Size: '1001 to 5000 employees',
    Founded: 2001,
    TypeOfOwnership: 'Company - Private',
    Industry: 'Investment Banking & Asset Management',
    Sector: 'Finance',
    Revenue: 'Unknown / Non-Applicable',
    Competitors: '-1',
    EasyApply: '-1'
  },
  {
    FIELD1: 7,
    jobTitle: 'Data Science Analyst',
    SalaryEstimate: '$37K-$66K (Glassdoor est.)',
    Rating: 3.7,
    CompanyName: 'GNY Insurance Companies\n3.7',
    Location: 'New York, NY',
    Headquarters: 'New York, NY',
    Size: '201 to 500 employees',
    Founded: 1914,
    TypeOfOwnership: 'Company - Private',
    Industry: 'Insurance Carriers',
    Sector: 'Insurance',
    Revenue: '$100 to $500 million (USD)',
    Competitors: 'Travelers, Chubb, Crum & Forster',
    EasyApply: 'TRUE'
  },
  {
    FIELD1: 8,
    jobTitle: 'Data Analyst',
    SalaryEstimate: '$37K-$66K (Glassdoor est.)',
    Rating: 4,
    CompanyName: 'DMGT\n4.0',
    Location: 'New York, NY',
    Headquarters: 'London, United Kingdom',
    Size: '5001 to 10000 employees',
    Founded: 1896,
    TypeOfOwnership: 'Company - Public',
    Industry: 'Venture Capital & Private Equity',
    Sector: 'Finance',
    Revenue: '$1 to $2 billion (USD)',
    Competitors: 'Thomson Reuters, Hearst, Pearson',
    EasyApply: '-1'
  },
  {
    FIELD1: 9,
    jobTitle: 'Data Analyst, Merchant Health',
    SalaryEstimate: '$37K-$66K (Glassdoor est.)',
    Rating: 4.4,
    CompanyName: 'Riskified\n4.4',
    Location: 'New York, NY',
    Headquarters: 'New York, NY',
    Size: '501 to 1000 employees',
    Founded: 2013,
    TypeOfOwnership: 'Company - Private',
    Industry: 'Research & Development',
    Sector: 'Business Services',
    Revenue: 'Unknown / Non-Applicable',
    Competitors: 'Signifyd, Forter',
    EasyApply: '-1'
  },
  {
    FIELD1: 10,
    jobTitle: 'Data Analyst',
    SalaryEstimate: '$37K-$66K (Glassdoor est.)',
    Rating: 4,
    CompanyName: 'NYU Langone Health\n4.0',
    Location: 'New York, NY',
    Headquarters: 'New York, NY',
    Size: '10000+ employees',
    Founded: 1841,
    TypeOfOwnership: 'Hospital',
    Industry: 'Health Care Services & Hospitals',
    Sector: 'Health Care',
    Revenue: '$5 to $10 billion (USD)',
    Competitors: 'NewYork-Presbyterian Hospital, Northwell Health',
    EasyApply: '-1'
  },
  {
    FIELD1: 11,
    jobTitle: 'Data Analyst',
    SalaryEstimate: '$37K-$66K (Glassdoor est.)',
    Rating: -1,
    CompanyName: 'BulbHead',
    Location: 'Fairfield, NJ',
    Headquarters: '-1',
    Size: '1 to 50 employees',
    Founded: -1,
    TypeOfOwnership: 'Company - Private',
    Industry: '-1',
    Sector: '-1',
    Revenue: 'Unknown / Non-Applicable',
    Competitors: '-1',
    EasyApply: '-1'
  },
  {
    FIELD1: 12,
    jobTitle: 'DATA ANALYST',
    SalaryEstimate: '$37K-$66K (Glassdoor est.)',
    Rating: 3.7,
    CompanyName: 'Montefiore Medical\n3.7',
    Location: 'New York, NY',
    Headquarters: 'Bronx, NY',
    Size: '10000+ employees',
    Founded: 1884,
    TypeOfOwnership: 'Nonprofit Organization',
    Industry: 'Health Care Services & Hospitals',
    Sector: 'Health Care',
    Revenue: '$2 to $5 billion (USD)',
    Competitors: '-1',
    EasyApply: '-1'
  },
  {
    FIELD1: 13,
    jobTitle: 'Senior Data Analyst',
    SalaryEstimate: '$37K-$66K (Glassdoor est.)',
    Rating: 3,
    CompanyName: 'Known\n3.0',
    Location: 'New York, NY',
    Headquarters: 'New York, NY',
    Size: '201 to 500 employees',
    Founded: 2004,
    TypeOfOwnership: 'Company - Private',
    Industry: 'Advertising & Marketing',
    Sector: 'Business Services',
    Revenue: '$100 to $500 million (USD)',
    Competitors: '-1',
    EasyApply: 'TRUE'
  },
  {
    FIELD1: 14,
    jobTitle: 'Investment Advisory Data Analyst',
    SalaryEstimate: '$37K-$66K (Glassdoor est.)',
    Rating: 3.4,
    CompanyName: 'Advisor Group\n3.4',
    Location: 'Jersey City, NJ',
    Headquarters: 'Phoenix, AZ',
    Size: '1001 to 5000 employees',
    Founded: 2016,
    TypeOfOwnership: 'Company - Private',
    Industry: 'Brokerage Services',
    Sector: 'Finance',
    Revenue: '$1 to $5 million (USD)',
    Competitors: '-1',
    EasyApply: '-1'
  },
  {
    FIELD1: 15,
    jobTitle: 'Sustainability Data Analyst',
    SalaryEstimate: '$37K-$66K (Glassdoor est.)',
    Rating: 3.6,
    CompanyName: 'CodeGreen Solutions\n3.6',
    Location: 'New York, NY',
    Headquarters: 'New York, NY',
    Size: '1 to 50 employees',
    Founded: -1,
    TypeOfOwnership: 'Company - Private',
    Industry: 'Building & Personnel Services',
    Sector: 'Business Services',
    Revenue: 'Unknown / Non-Applicable',
    Competitors: '-1',
    EasyApply: '-1'
  },
  {
    FIELD1: 16,
    jobTitle: 'Data Analyst',
    SalaryEstimate: '$37K-$66K (Glassdoor est.)',
    Rating: 3.8,
    CompanyName: 'Undertone\n3.8',
    Location: 'New York, NY',
    Headquarters: 'New York, NY',
    Size: '201 to 500 employees',
    Founded: 2001,
    TypeOfOwnership: 'Subsidiary or Business Segment',
    Industry: 'Advertising & Marketing',
    Sector: 'Business Services',
    Revenue: 'Unknown / Non-Applicable',
    Competitors: 'DoubleClick, Specific Media, Collective',
    EasyApply: 'TRUE'
  },
  {
    FIELD1: 17,
    jobTitle: 'Clinical Data Analyst',
    SalaryEstimate: '$37K-$66K (Glassdoor est.)',
    Rating: 3.8,
    CompanyName: 'NYSTEC\n3.8',
    Location: 'New York, NY',
    Headquarters: 'Rome, NY',
    Size: '51 to 200 employees',
    Founded: 1996,
    TypeOfOwnership: 'Nonprofit Organization',
    Industry: 'Consulting',
    Sector: 'Business Services',
    Revenue: '$25 to $50 million (USD)',
    Competitors: 'KPMG, Accenture, Deloitte',
    EasyApply: '-1'
  },
  {
    FIELD1: 18,
    jobTitle: 'DATA PROGRAMMER/ANALYST',
    SalaryEstimate: '$37K-$66K (Glassdoor est.)',
    Rating: 3.9,
    CompanyName: 'Education Development Center, Inc.\n3.9',
    Location: 'New York, NY',
    Headquarters: 'Waltham, MA',
    Size: '501 to 1000 employees',
    Founded: 1958,
    TypeOfOwnership: 'Nonprofit Organization',
    Industry: 'Research & Development',
    Sector: 'Business Services',
    Revenue: '$100 to $500 million (USD)',
    Competitors: '-1',
    EasyApply: '-1'
  },
  {
    FIELD1: 19,
    jobTitle: 'Data Analyst',
    SalaryEstimate: '$37K-$66K (Glassdoor est.)',
    Rating: 4.9,
    CompanyName: 'Teachers Pay Teachers\n4.9',
    Location: 'New York, NY',
    Headquarters: 'New York, NY',
    Size: '51 to 200 employees',
    Founded: 2006,
    TypeOfOwnership: 'Company - Private',
    Industry: 'Internet',
    Sector: 'Information Technology',
    Revenue: 'Unknown / Non-Applicable',
    Competitors: '-1',
    EasyApply: '-1'
  },
  {
    FIELD1: 20,
    jobTitle: 'Product Analyst, Data Science',
    SalaryEstimate: '$37K-$66K (Glassdoor est.)',
    Rating: 4.4,
    CompanyName: 'Google\n4.4',
    Location: 'New York, NY',
    Headquarters: 'Mountain View, CA',
    Size: '10000+ employees',
    Founded: 1998,
    TypeOfOwnership: 'Company - Public',
    Industry: 'Internet',
    Sector: 'Information Technology',
    Revenue: '$10+ billion (USD)',
    Competitors: 'Microsoft, Apple, Facebook',
    EasyApply: '-1'
  },
  {
    FIELD1: 21,
    jobTitle: 'Data Science Analyst',
    SalaryEstimate: '$37K-$66K (Glassdoor est.)',
    Rating: -1,
    CompanyName: 'MUSIC & Entertainment',
    Location: 'New York, NY',
    Headquarters: 'Marina del Rey, CA',
    Size: 'Unknown',
    Founded: -1,
    TypeOfOwnership: 'Company - Public',
    Industry: '-1',
    Sector: '-1',
    Revenue: 'Unknown / Non-Applicable',
    Competitors: '-1',
    EasyApply: '-1'
  },
  {
    FIELD1: 22,
    jobTitle: 'Data Analyst - Intex Developer',
    SalaryEstimate: '$37K-$66K (Glassdoor est.)',
    Rating: 3.3,
    CompanyName: 'Macquarie Group\n3.3',
    Location: 'New York, NY',
    Headquarters: 'Sydney, Australia',
    Size: '10000+ employees',
    Founded: 1969,
    TypeOfOwnership: 'Company - Public',
    Industry: 'Investment Banking & Asset Management',
    Sector: 'Finance',
    Revenue: '$5 to $10 billion (USD)',
    Competitors: 'Goldman Sachs, Commonwealth Bank of Australia, Deutsche Bank',
    EasyApply: '-1'
  },
  {
    FIELD1: 23,
    jobTitle: 'Data Analyst',
    SalaryEstimate: '$37K-$66K (Glassdoor est.)',
    Rating: 3.5,
    CompanyName: 'Andiamo\n3.5',
    Location: 'New York, NY',
    Headquarters: 'Warren, MI',
    Size: '201 to 500 employees',
    Founded: -1,
    TypeOfOwnership: 'Company - Private',
    Industry: 'Casual Restaurants',
    Sector: 'Restaurants, Bars & Food Services',
    Revenue: '$1 to $5 million (USD)',
    Competitors: '-1',
    EasyApply: '-1'
  },
  {
    FIELD1: 24,
    jobTitle: 'Entry Level / Jr. Data Analyst',
    SalaryEstimate: '$37K-$66K (Glassdoor est.)',
    Rating: 3.8,
    CompanyName: 'Dash Technologies Inc\n3.8',
    Location: 'New York, NY',
    Headquarters: 'Columbus, OH',
    Size: '1 to 50 employees',
    Founded: -1,
    TypeOfOwnership: 'Unknown',
    Industry: '-1',
    Sector: '-1',
    Revenue: 'Unknown / Non-Applicable',
    Competitors: '-1',
    EasyApply: '-1'
  },
  {
    FIELD1: 25,
    jobTitle: 'Data Analyst',
    SalaryEstimate: '$37K-$66K (Glassdoor est.)',
    Rating: 4,
    CompanyName: 'Hearst Communications\n4.0',
    Location: 'New York, NY',
    Headquarters: 'San Francisco, CA',
    Size: '1 to 50 employees',
    Founded: -1,
    TypeOfOwnership: 'Company - Private',
    Industry: 'Advertising & Marketing',
    Sector: 'Business Services',
    Revenue: 'Less than $1 million (USD)',
    Competitors: '-1',
    EasyApply: '-1'
  },
  {
    FIELD1: 26,
    jobTitle: 'Data + Business Intelligence Analyst',
    SalaryEstimate: '$37K-$66K (Glassdoor est.)',
    Rating: 5,
    CompanyName: 'Duolingo\n5.0',
    Location: 'New York, NY',
    Headquarters: 'Pittsburgh, PA',
    Size: '201 to 500 employees',
    Founded: 2011,
    TypeOfOwnership: 'Company - Private',
    Industry: 'Internet',
    Sector: 'Information Technology',
    Revenue: '$10 to $25 million (USD)',
    Competitors: '-1',
    EasyApply: '-1'
  },
  {
    FIELD1: 27,
    jobTitle: 'Data Analyst, Product',
    SalaryEstimate: '$37K-$66K (Glassdoor est.)',
    Rating: 4.8,
    CompanyName: 'Ro\n4.8',
    Location: 'New York, NY',
    Headquarters: 'New York, NY',
    Size: '51 to 200 employees',
    Founded: 2017,
    TypeOfOwnership: 'Company - Private',
    Industry: 'Health Care Services & Hospitals',
    Sector: 'Health Care',
    Revenue: 'Unknown / Non-Applicable',
    Competitors: '-1',
    EasyApply: '-1'
  },
  {
    FIELD1: 28,
    jobTitle: 'Data Analyst Entry Level',
    SalaryEstimate: '$37K-$66K (Glassdoor est.)',
    Rating: 3.7,
    CompanyName: 'Endai\n3.7',
    Location: 'New York, NY',
    Headquarters: 'New York, NY',
    Size: '1 to 50 employees',
    Founded: -1,
    TypeOfOwnership: 'Company - Private',
    Industry: 'Advertising & Marketing',
    Sector: 'Business Services',
    Revenue: '$1 to $5 million (USD)',
    Competitors: '-1',
    EasyApply: '-1'
  }
];
