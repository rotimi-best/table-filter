const jsondata = [
  {
    'Table 1': 'HRH Eze Jude Obidegwu',
    'Table 2': 'Prof Abafe',
    'Table 3': 'Mr Mark Jack',
    'Table 4': 'Chief Napoleon Amachree',
    'Table 5': 'Ibitoye-Rotimi Best',
    'Table 6': 'Kieran Barry',
    'Table 7': '',
    'Table 8': 'Christian Anumudu',
    'Table 9': 'Engr Barnabas Onuoha ',
    'Table 10': 'Chioma Ezechukwu ',
    'Table 11': 'Alec Paul Coleman ',
    'Table 12': 'Oladiran Durowoju',
  },
  {
    'Table 1': 'Chief Emma Dufegha',
    'Table 2': 'Dr.Abafe',
    'Table 3': 'Mr Anthony Ottah',
    'Table 4': 'Mrs Miranda  Amachree',
    'Table 5': 'Ibitoye-Rotimi Chioma',
    'Table 6': 'Gail Saxon',
    'Table 7': 'Mgboawaji Claude Ujile ',
    'Table 8': 'Sarah Anumudu',
    'Table 9': 'Mrs Mary Ann ',
    'Table 10': 'Chidinma Kalu',
    'Table 11': 'Veronica Coleman ',
    'Table 12': 'Funmilola Are',
  },
  {
    'Table 1': 'Chief Dr. Suku',
    'Table 2': 'Dr. Patrick Briggs',
    'Table 3': 'Mrs  Vivien Ottah',
    'Table 4': 'Mrs Ursula Harry',
    'Table 5': 'Ugochukwu Solomon family ',
    'Table 6': 'Deborah Bunce',
    'Table 7': 'EREMWARI Mackenzie Ujile',
    'Table 8': 'Obianuju Anaebo',
    'Table 9': 'Obianuju Onuigbo ',
    'Table 10': 'Ngozi Okereke',
    'Table 11': 'Andrew Fitzgerald ',
    'Table 12': 'Opeyemi Kareem ',
  },
  {
    'Table 1': 'Chief Valentine Obidegwu',
    'Table 2': 'Dr/ Mrs Briggs',
    'Table 3': 'Nonso Akuezuilo',
    'Table 4': 'Dr Elizabeth Jack',
    'Table 5': 'Lolo',
    'Table 6': 'John Ward',
    'Table 7': 'Moses',
    'Table 8': 'Collins',
    'Table 9': 'Olsi Goga',
    'Table 10': 'Zibusiso Moyo',
    'Table 11': 'Katy Smith',
    'Table 12': 'Busayo Azeez',
  },
  {
    'Table 1': 'Arc.Odutola',
    'Table 2': 'Mr.Somina Membere',
    'Table 3': 'Mr Miriki',
    'Table 4': 'Chief Karibo Lawson',
    'Table 5': 'Izuchukwu Eze Ignatius',
    'Table 6': 'Josh Hobday',
    'Table 7': 'Ebun',
    'Table 8': 'Collins wife',
    'Table 9': 'Nasim Tavakoli ',
    'Table 10': 'Obiye maybe',
    'Table 11': 'Kevin Connolly ',
    'Table 12': 'Djwatson',
  },
  {
    'Table 1': 'Mrs Odutola',
    'Table 2': 'Mrs Somina Membere',
    'Table 3': 'Mrs Mriki',
    'Table 4': 'Mistura Adetunji',
    'Table 5': 'Fe',
    'Table 6': 'Emily Parker ',
    'Table 7': 'Abdul',
    'Table 8': 'Inlaw',
    'Table 9': 'Barnabas children',
    'Table 10': 'Idaibi Ibisiki',
    'Table 11': 'Angela Bates',
    'Table 12': 'Josh and Tayo',
  },
  {
    'Table 1': 'Dr Nnamdi Obiosa',
    'Table 2': 'Mr.Jackson',
    'Table 3': '',
    'Table 4': ' Mr.Emi Amachree',
    'Table 5': 'Success',
    'Table 6': 'DAVID TANKOANO ',
    'Table 7': 'Dr Leke Erunkulu ',
    'Table 8': 'Chiatoka',
    'Table 9': '',
    'Table 10': 'Ibiso ',
    'Table 11': 'Nnenna Urum-Eke ',
    'Table 12': 'Josh and Tayo',
  },
  {
    'Table 1': 'Mrs Nnamdi Obiosa',
    'Table 2': 'Mr Thompson  Wakama',
    'Table 3': '',
    'Table 4': 'Tamunoemi Amachree ',
    'Table 5': 'Miracle',
    'Table 6': 'Mrs Tankoano',
    'Table 7': 'Dr Tobi Erunkulu',
    'Table 8': '',
    'Table 9': '',
    'Table 10': 'Princess',
    'Table 11': 'Nena Nwojo, Enyinnaya Nwojo and Omazi Nwojo',
    'Table 12': 'Emmanuel Aniogbo',
  },
  {
    'Table 1': '',
    'Table 2': '',
    'Table 3': '',
    'Table 4': '',
    'Table 5': 'Child seat',
    'Table 6': '',
    'Table 7': 'Child Seat',
    'Table 8': 'Child seat',
    'Table 9': '',
    'Table 10': 'Child seat',
    'Table 11': 'Nena Nwojo, Enyinnaya Nwojo and Omazi Nwojo',
    'Table 12': '',
  },
];

const result = {};

for (const data of jsondata) {
  const keys = Object.keys(data);
  if (Object.keys(result).length === 0) {
    for (const key of keys) {
      result[key] = [data[key]];
    }
  } else {
    for (const key of keys) {
      result[key].push(data[key]);
    }
  }
}

const newResult = [];
Object.keys(result).forEach((key, i) => {
  newResult.push({
    id: `${i + 1}`,
    label: key,
    guests: result[key],
  });
});

console.log(newResult);
