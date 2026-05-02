export interface Project {
  name: string;
  url: string;
  image: string;
  date: string;
  description: string;
  repo?: string;
  role?: string;
  organization?: string;
  archived?: boolean;
}

const projects: Project[] = [
  {
    date: 'July 22, 2012',
    description:
      'The Marcellus Shale has been underneath Pennsylvania for centuries, but the extraction of natural gas began only recently. The "fracking" boom is changing the landscape of northeastern and southwestern Pennsylvania.',
    role: 'Design, Development',
    image: 'shaleplay_3x2_sm_g.jpg',
    name: 'Shale Play',
    organization: 'NPR',
    url: 'http://stateimpact.npr.org/pennsylvania/drilling/',
    archived: true,
  },
  {
    date: 'May 18, 2013',
    description: "NPR's guide to the running gags from the show.",
    role: 'Design, Development',
    image: 'arrestedDev_3x2_sm_g.jpg',
    name: 'Previously, On Arrested Dev',
    organization: 'NPR',
    repo: 'nprapps/arrested-Dev',
    url: 'http://apps.npr.org/arrested-Dev/',
    archived: true,
  },
  {
    date: 'July 2, 2014',
    description: 'How it was made and what it means today',
    role: 'Design, Development',
    image: 'civil_rights_3x2_sm_g.jpg',
    name: 'Behind The Civil Rights Act',
    organization: 'NPR',
    repo: 'nprapps/civilrights',
    url: 'http://apps.npr.org/behind-the-civil-rights-act/',
  },
  {
    date: 'December 10, 2014',
    description:
      "Put on your headphones and listen to more than 300 of NPR Music's favorite songs from 2014.",
    role: 'Design, Development',
    image: 'songs_3x2_sm_g.jpg',
    name: 'Songs We Love 2014',
    organization: 'NPR',
    repo: 'nprapps/bestsongs14',
    url: 'http://apps.npr.org/best-songs-2014/',
  },
  {
    date: 'March 3, 2015',
    description: 'What to listen to at SXSW 2015',
    role: 'Design, Development',
    image: 'austin_3x2_sm_g.jpg',
    name: 'The Austin 100',
    organization: 'NPR',
    repo: 'nprapps/austin',
    url: 'http://apps.npr.org/austin/',
  },
  {
    date: 'May 4, 2016',
    description:
      'In a five-part series, we hear from prisoners on death row who wrestle with questions about justice, guilt, punishment and atonement.',
    role: 'Design, Development',
    image: 'inside_death_row_3x2_sm_g.jpg',
    name: 'Inside Death Row',
    organization: 'The New York Times',
    url: 'http://www.nytimes.com/interactive/2016/05/04/opinion/the-last-phone-call.html',
  },
  {
    date: 'January 19, 2016',
    description:
      'Americans share their hopes, fears and frustrations in interviews from the campaign trail.',
    role: 'Development',
    image: 'of_the_people_3x2_sm_g.jpg',
    name: 'Of the People',
    organization: 'The New York Times',
    url: 'http://www.nytimes.com/interactive/projects/portraits/voters-of-the-people',
  },
  {
    date: 'May 1, 2016',
    description:
      "A withered person with a scrambled mind, memories sealed away: That is the familiar face of Alzheimer's. But there is also the waiting period, which Geri Taylor has been navigating with prudence, grace and hope.",
    role: 'Design, Development',
    image: 'alzheimers_3x2_sm_g.jpg',
    organization: 'The New York Times',
    name: 'Fraying at the Edges',
    url: 'http://www.nytimes.com/interactive/2016/05/01/nyregion/living-with-alzheimers.html',
  },
  {
    date: 'December 5, 2017',
    description:
      'The producer Harvey Weinstein relied on powerful relationships across industries to provide him with cover as accusations of sexual misconduct piled up for decades.',
    role: 'Design, Development',
    image: 'harvey-3x2_sm.png',
    name: "Weinstein's Complicity Machine",
    organization: 'The New York Times',
    url: 'https://www.nytimes.com/interactive/2017/12/05/us/harvey-weinstein-complicity.html',
  },
  {
    date: 'January 1, 2018',
    description:
      "Everyone wants to be popular online. Some even pay for it. Inside social media's black market.",
    role: 'Design, Development',
    image: 'follower_factory.jpg',
    name: 'The Follower Factory',
    organization: 'The New York Times',
    url: 'https://www.nytimes.com/interactive/2018/01/27/technology/social-media-bots.html',
  },
  {
    date: 'April 11, 2018',
    description:
      'The New York Times met and photographed dozens of the students abducted by Boko Haram. Now at a university, they say they are the lucky ones. But their celebrity has a price.',
    role: 'Development',
    image: 'boko.jpg',
    name: 'Kidnapped as Schoolgirls by Boko Haram: Here They Are Now',
    organization: 'The New York Times',
    url: 'https://www.nytimes.com/interactive/2018/04/11/world/africa/nigeria-boko-haram-girls.html',
  },
  {
    date: 'October 2, 2018',
    description:
      'The president has long sold himself as a self-made billionaire, but a Times investigation found that he received at least $413 million in today’s dollars from his father’s real estate empire, much of it through tax dodges in the 1990s.',
    role: 'Design, Development',
    image: 'taxes.jpg',
    name: 'Trump Engaged in Suspect Tax Schemes as He Reaped Riches From His Father',
    organization: 'The New York Times',
    url: 'https://www.nytimes.com/interactive/2018/10/02/us/politics/donald-trump-tax-schemes-fred-trump.html',
  },
  {
    date: 'January 9, 2020',
    description:
      'We picked destinations to inspire you, delight you and motivate you to explore the world.',
    role: 'Design, Development',
    image: '52_places_3x2.webp',
    name: '52 Places to Go in 2020',
    organization: 'The New York Times',
    url: 'https://www.nytimes.com/interactive/2020/travel/places-to-visit.html',
  },
  {
    date: 'September 20, 2024',
    description:
      'He didn’t want to fight in Putin’s war — he just wanted to survive. But to make it back to his family and live in peace, he would have to run.',
    role: 'Design, Development',
    image: 'deserter_3x2_sm.webp',
    name: 'The Deserter',
    organization: 'The New York Times',
    url: 'https://www.nytimes.com/interactive/2024/09/20/magazine/ukraine-russia-war-deserter.html',
  },
  {
    date: 'November 20, 2025',
    description: '',
    role: 'Design, Development',
    image: 'gift_guide_2025_3x2_sm.webp',
    name: 'Holiday Gift Guide 2025',
    organization: 'The New York Times',
    url: 'https://www.nytimes.com/interactive/2025/us/holiday-gift-guide.html',
  },
  {
    date: 'May 1, 2026',
    description: '',
    role: 'UX Design and Engineering',
    image: 'church_center_3x2.webp',
    name: 'Church Center',
    organization: 'Planning Center',
    url: 'https://planningcenter.com',
  },
  {
    date: 'May 1, 2026',
    description: '',
    role: 'UX Design and Engineering',
    image: 'publishing_3x2.webp',
    name: 'Publishing',
    organization: 'Planning Center',
    url: 'https://planningcenter.com',
  },
];

export default projects;
