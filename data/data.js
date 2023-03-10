export const navbarData = ["About", "Experience", "Acheievements", "Projects"];

export const about = {
    title: "Hi, my name is Soumik.",
    description: `I'm an ASE Intern at <a href="https://www.contentstack.com/" target="_blank" class="contentstack__redirect">Contentstack</a> with more than 10 months of internship experience and a Competitive Programmer with a 2x ICPC regionalist holder.`,
    resumeLink: "https://drive.google.com/file/d/1yE6s1g_iTln6tg2uaM2dRIq9vwEk3pM6/view",
    email: "mailto:soumik43@yahoo.com",
    image: "assets/images/soumik-gradient.jpg",
};

export const experience = [
    {
        name: "ombre",
        company: `Ombre - <span class="experience--position">SDE Intern</span>`,
        techstack: "Flutter, Firebase, Node.js, AWS, Git",
        points: [
            "Developed an image compression cloud function in NodeJS which helped in reducing the image sizes for our mobile application by 90% hence reducing loading time by 57% for our Dashboard (Homepage) images.",
            "Migration of User-Media collection (Audios, Videos, User Highlights, User Links) hence minimizing the cost for user queries by 4 times from the database.",
            "Migration of codebase from Flutter V1 to V2 hence improving the stability of mobile applications by introducing null-safety across platforms and devices.",
            "Remodeled the Dashboard UI, and revamped the User-Profile page UI, which decreased the page navigation by removing a page, hence improving the UX performance.",
        ],
        link: `Visit <a href="https://liveombre.com/" class="href__visit__link" target="_blank">Ombre</a>`,
        imageLink: "assets/images/ombre.png",
    },
    {
        name: "bottomstreet",
        company: `BottomStreet - <span class="experience--position">Flutter Developer Intern</span>`,
        techstack: "Flutter, Firebase, RestAPI, Git",
        points: [
            "Integrated REST API, and Firebase for authentication, storage, and testing purposes, and applied Remote state-management (Riverpod) using Flutter.",
            "Designed and implemented a feature for showing trending and recent searches that helped in the retention of 23% of the users.",
            "Implemented Deep Linking into the mobile application which led to an 18% increase in user engagement and a 7% increase in new users.",
            "Worked on payment portal using Razorpay (Flutter).",
            "Integrated more than 20 REST API???s in Flutter by creating data model classes to parse data for the client side.",
        ],
        link: `Visit <a href="https://www.bottomstreet.com/" class="href__visit__link" target="_blank">BottomStreet</a>`,
        imageLink: "assets/images/bottomstreet.avif",
    },
];

export const achievements = [
    {
        detail: "- ACM-ICPC regionals finalist 2020 (08/2021), 2021 (10/2022) amongst 4000+ teams all over India at Amritapuri Site.",
        link: "https://drive.google.com/file/d/1Xv2yrmtFfPKHxhg4u2RAJjnoW-YCLIte/view",
    },
    {
        detail: "- Specialist (1498) at Codeforces a with more than 500+ problems solved.",
        link: "https://codeforces.com/profile/Soumik43",
    },
    {
        detail: "- 4 Star (1923) at CodeChef, among the top 1% Competitive Programmers out of 5,00,000+ participants.",
        link: "https://www.codechef.com/users/soumik43",
    },
    {
        detail: "- First Runner-Up in Techsurf 2022 - ContentStack hackathon amongst 11,900+ participants. (Link)",
        link: "https://unstop.com/competition/techsurf-2022-contentstack-359635/case-submissions/44082",
    },
    {
        detail: "- Global rank #421 in Codeforces Round 720 (Div. 2) amongst 37,000+ participants.",
        link: "",
    },
    {
        detail: "- Global rank #407 out of 1000+ participants in Codechef November Challenge 2020 (Div 1).",
        link: "",
    },
    {
        detail: "- National rank #5 in a CodeChef contest held by our college with participants all over India.",
        link: "",
    },
    {
        detail: "- More than 170 problems solved in Leetcode.",
        link: "",
    },
];

export const projects = [
    {
        title: "Uber Clone App",
        techstack: "Flutter, Firebase, Git",
        points: [
            "Applied advanced state management concepts with the Provider flutter package.",
            "Used Google Cloud Platform for adding various features like geolocation, search places, directions and ride estimates, etc.",
            "Utilized Google Geocoding API in order to find a place address with location coordinates.",
            "Real-Time Push Notification messages using Firebase (FCM).",
        ],
        link: `Visit <a href="https://github.com/Soumik43/Uber-clone" class="href__visit__link" target="_blank">Uber git repo</a>`,
    },
    {
        title: "Corona Virus Tracking Application",
        techstack: "Flutter, REST API, Git",
        points: [
            "Built a Corona Virus tracking application using Flutter and REST API with MVVM application architecture.",
        ],
        link: `Visit <a href="https://github.com/Soumik43/Coronavirus-tracking-application" class="href__visit__link" target="_blank">Corona virus application git repo</a>`,
    },
    {
        title: "Chat application",
        techstack: "Flutter, Firebase, Git",
        points: [
            "Developed a chat application using Flutter and utilized Firebase authentication, database and storage.",
        ],
        link: `Visit <a href="https://github.com/Soumik43/Coronavirus-tracking-application" class="href__visit__link" target="_blank" >Chat application git repo</a >`,
    },
];

export const footer = [
    { data: `<i class="fa fa-linkedin" style="font-size: 2rem"></i>`, link: "https://www.linkedin.com/in/soumik43/" },
    { data: `<i class="fa fa-github" style="font-size: 2rem"></i>`, link: "https://github.com/Soumik43" },
    { data: `<i class="fa fa-twitter" style="font-size: 2rem"></i>`, link: "https://twitter.com/Soumo43" },
    { data: `<i class="fa fa-instagram" style="font-size: 2rem"></i>`, link: "https://www.instagram.com/s_oumik/" },
];
