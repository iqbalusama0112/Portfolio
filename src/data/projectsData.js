import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'

export const projectsData = [
    {
        id: 1,
        projectName: 'Natting',
        projectDesc: 'A native Android app for one-to-one messaging. Messages arrive instantly through Firebase, the chat screen shows when the other person is online, and offline users get push notifications.',
        tags: ['Java', 'Android', 'Cloud Firestore', 'Firebase Cloud Messaging'],
        code: 'https://github.com/Uzairs709/Natter-Chat-Application',
        demo: '',
        image: one
    },
    {
        id: 2,
        projectName: 'VotingMachine',
        projectDesc: 'Full-stack platform for running cooperative elections (online and physical booths, with live results) and managing events, members and logistics, with a web admin panel and a mobile app.',
        tags: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Zod', 'Firebase Cloud Messaging'],
        code: '',
        demo: '',
        image: two
    },
    {
        id: 3,
        projectName: 'CryptoAgent',
        projectDesc: 'A decentralized launchpad on Base where users create AI agents and launch an ERC-20 token for each, priced on a bonding curve with liquidity auto-migrating to Uniswap V3. Includes a gamified waitlist with referrals, quests and a leaderboard.',
        tags: ['Next.js 14', 'React Query', 'Node.js', 'Express', 'PostgreSQL', 'Drizzle ORM'],
        code: '',
        demo: '',
        image: three
    },
    {
        id: 4,
        projectName: 'Venuo',
        projectDesc: 'A sleek, mobile-friendly interface that lets users browse events, pick dates and seats, and book tickets seamlessly on any device.',
        tags: ['MERN', 'PostgreSQL', 'NextAuth.js', 'Zustand', 'React Query', 'REST APIs'],
        code: '',
        demo: '',
        image: four
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
