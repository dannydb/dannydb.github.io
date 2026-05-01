export interface Project {
  name: string;
  url: string;
  image: string;
  date: string;
  description: string;
  repo?: string;
}

const projects: Project[] = [
  {
    date: 'July 22, 2012',
    description: 'The Marcellus Shale has been underneath Pennsylvania for centuries, but the extraction of natural gas began only recently. The "fracking" boom is changing the landscape of northeastern and southwestern Pennsylvania.',
    image: 'shaleplay_3x2_sm_g.jpg',
    name: 'Shale Play',
    url: 'http://stateimpact.npr.org/pennsylvania/drilling/',
  },
  {
    date: 'May 18, 2013',
    description: "NPR's guide to the running gags from the show.",
    image: 'arresteddevelopment_3x2_sm_g.jpg',
    name: 'Previously, On Arrested Development',
    repo: 'nprapps/arrested-development',
    url: 'http://apps.npr.org/arrested-development/',
  },
  {
    date: 'July 2, 2014',
    description: 'How it was made and what it means today',
    image: 'civil_rights_3x2_sm_g.jpg',
    name: 'Behind The Civil Rights Act',
    repo: 'nprapps/civilrights',
    url: 'http://apps.npr.org/behind-the-civil-rights-act/',
  },
  {
    date: 'December 10, 2014',
    description: "Put on your headphones and listen to more than 300 of NPR Music's favorite songs from 2014.",
    image: 'songs_3x2_sm_g.jpg',
    name: 'Songs We Love 2014',
    repo: 'nprapps/bestsongs14',
    url: 'http://apps.npr.org/best-songs-2014/',
  },
  {
    date: 'March 3, 2015',
    description: 'What to listen to at SXSW 2015',
    image: 'austin_3x2_sm_g.jpg',
    name: 'The Austin 100',
    repo: 'nprapps/austin',
    url: 'http://apps.npr.org/austin/',
  },
  {
    date: 'May 4, 2016',
    description: 'In a five-part series, we hear from prisoners on death row who wrestle with questions about justice, guilt, punishment and atonement.',
    image: 'inside_death_row_3x2_sm_g.jpg',
    name: 'Inside Death Row',
    url: 'http://www.nytimes.com/interactive/2016/05/04/opinion/the-last-phone-call.html',
  },
  {
    date: 'January 19, 2016',
    description: 'Americans share their hopes, fears and frustrations in interviews from the campaign trail.',
    image: 'of_the_people_3x2_sm_g.jpg',
    name: 'Of the People',
    url: 'http://www.nytimes.com/interactive/projects/portraits/voters-of-the-people',
  },
  {
    date: 'May 1, 2016',
    description: 'A withered person with a scrambled mind, memories sealed away: That is the familiar face of Alzheimer\'s. But there is also the waiting period, which Geri Taylor has been navigating with prudence, grace and hope.',
    image: 'alzheimers_3x2_sm_g.jpg',
    name: 'Fraying at the Edges',
    url: 'http://www.nytimes.com/interactive/2016/05/01/nyregion/living-with-alzheimers.html',
  },
  {
    date: 'December 5, 2017',
    description: 'The producer Harvey Weinstein relied on powerful relationships across industries to provide him with cover as accusations of sexual misconduct piled up for decades.',
    image: 'harvey-3x2_sm.png',
    name: "Weinstein's Complicity Machine",
    url: 'https://www.nytimes.com/interactive/2017/12/05/us/harvey-weinstein-complicity.html',
  },
  {
    date: 'January 1, 2018',
    description: "Everyone wants to be popular online. Some even pay for it. Inside social media's black market.",
    image: 'follower_factory.jpg',
    name: 'The Follower Factory',
    url: 'https://www.nytimes.com/interactive/2018/01/27/technology/social-media-bots.html',
  },
  {
    date: 'April 11, 2018',
    description: 'The New York Times met and photographed dozens of the students abducted by Boko Haram. Now at a university, they say they are the lucky ones. But their celebrity has a price.',
    image: 'boko.jpg',
    name: 'Kidnapped as Schoolgirls by Boko Haram: Here They Are Now',
    url: 'https://www.nytimes.com/interactive/2018/04/11/world/africa/nigeria-boko-haram-girls.html',
  },
];

export default projects;
