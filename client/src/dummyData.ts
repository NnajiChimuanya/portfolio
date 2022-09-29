import IJob from "./interface/jobInterface";

export const jobs: IJob[] = [
  {
    id: "05",
    order: 3,
    title: "Full Stack Web Engineer",
    dates: "August 2022 - Present",
    duties: [
      "Designed and implemented the API, scaled up the server functionality and ensured zero downtime using nodejs cluster and os module",
      "Created the endpoints for user signup and login using JWT for authentication and authorization, using mongodb database for storing data. Ensured that user data is secured by hashing the password using mongoose pre-save hook. Ensured that certain routes are protected by implemented an isAuthenticated middleware which checks for and verifies the authenticity of the JWT token",
      "Ensured smooth application flow by creating error handlers for possible errors and exceptions that may occur during creating a new user and database connection.",
    ],
    tools: [
      "TypeScript",
      "NodeJs",
      "ReactJS",
      "MongoDb",
      "ExpressJS",
      "Postman",
      "Git",
    ],
    company: "Trade-x",
  },
  {
    id: "04",
    order: 3,
    title: "Frontend Engineer",
    dates: "July 2022 - August 2022",
    duties: [
      "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
      "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
      "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.",
    ],
    tools: ["TypeScript", "ReactJS", "MaterialUI", "Git"],
    company: "Forged",
  },
  {
    id: "03",
    order: 3,
    title: "Freelance FullStack Web Engineer",
    dates: "August 2022",
    duties: [
      "Single-handedly implemented the UI of the Dashboard and the other pages while ensuring smooth user flow, ensured safety protocols was implemented and minimal server downtime accrued",
      "Effective time management to met customer's need and satisfaction",
    ],
    tools: [
      "TypeScript",
      "NodeJs",
      "ReactJS",
      "MaterialUI",
      "MongoDb",
      "Postman",
      "Git",
    ],
    company: "Upwork",
  },
  {
    id: "02",
    order: 2,
    title: "Back-end Engineer",
    dates: "May 2015 - December 2015",
    duties: [
      "Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid.",
      "Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester",
      "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1",
      "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1",
    ],
    tools: [
      "TypeScript",
      "JavaScript",
      "NodeJs",
      "Postman",
      "MongoDb",
      "ExpressJS",
      "Git",
    ],
    company: "Klever",
  },
  {
    id: "01",
    order: 1,
    title: "Software Engineering Intern",
    dates: "May 2014 - September 2015",
    duties: [
      "I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS. Banjo post-ironic hella af, palo santo craft beer gluten-free.",
      "YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.",
      "Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache. Pork belly lomo man braid, portland pitchfork locavore man bun prism.",
    ],
    tools: ["TypeScript", "NodeJs", "ReactJS", "MongoDb", "Git"],
    company: "HNGi",
  },
];
