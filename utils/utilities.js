import people01 from "../public/people/people01.svg"
import people02 from "../public/people/people02.svg"
import people03 from "../public/people/people03.svg"
import people04 from "../public/people/people04.svg"
import people05 from "../public/people/people05.svg"
import art01 from "../public/start/art01.svg"
import art02 from "../public/start/art02.svg"
import art03 from "../public/start/art03.svg"
import art04 from "../public/start/art04.svg"
import poster01 from "../public/work/poster01.jpeg"
import poster02 from "../public/work/poster02.jpeg"
import poster03 from "../public/work/poster03.jpeg"
import poster04 from "../public/work/poster04.jpeg"
import poster05 from "../public/work/poster05.jpeg"

export const people = [people01, people02, people03, people04, people05]

export const work = [poster01, poster03, poster04, poster05]

export const navbarItems = [
    {
        tabName: "home",
        link: "/"
    },
    {
        tabName: "latest work",
        link: "#work"
    },
    {
        tabName: "Book us",
        link: "#book-us"
    },
    {
        tabName: "FAQs",
        link: "#faq"
    },
];

export const steps = [
    {
      image: art01,
      description: "Send us your requirements."
    },
    {
      image: art02,
      description: "Get on a meeting with us"
    },
    {
      image: art03,
      description: "Make revisions"
    },
    {
      image: art04,
      description: "Get the finished product"
    },
  ]

export const hoverVariants = {
    hover:{
        boxShadow: ["none", 
                "5px 5px 0px 0px #16FF00, 9px 10px 0px 0px #FDFF00 ,13px 15px 0px 0px #FF6464"],
        transition: {duration: 0.4},
        y: -5,
        borderRadius: "17px"
    },
    initial:{
        boxShadow:"0px 0px 0px 0px rgba(0, 0, 0, 0)",
    }
};

export const buttonVariants = {
    hover:{
        boxShadow: ["none", 
                "5px 5px 0px 0px #16FF00, 9px 10px 0px 0px #FDFF00 ,13px 15px 0px 0px #FF6464"],
        backgroundColor: ["#F2F2F2"],
        color: "#333333",
        borderRadius: "15px",
        transition: {duration: 0.4},
        y: -5
        
    },
    initial:{
        boxShadow:"0px 0px 0px 0px rgba(0, 0, 0, 0)",
        backgroundColor: ["#333333"],
        color: "#F2F2F2",
        scale: 1
    },
    view:{
        scale: 0.01
    }
};

export const QA = [
    {
    question: "What services does your graphic design agency offer?",
    answer: " We provide a wide range of services, including logo design, branding, web design, print materials, social media graphics, and more."
    },
    {
      question: "How much does graphic design work cost?",
      answer: "Costs vary based on the scope of the project. Contact us for a personalized quote that fits your specific needs and budget."
      },
      {
        question: "How long does it take to complete a design project?",
        answer: "Timelines depend on the project's complexity. We'll provide you with a detailed schedule during the initial consultation."
        },
        {
            question: "Do you offer revisions on design projects?",
            answer: "Yes, we include revision rounds in our design process to ensure the final product meets your expectations."
        },
        {
            question: " Can I request changes to a design after it's completed?",
            answer: " Certainly! We offer post-project support and can make additional changes for an agreed-upon fee."
        },
        {
            question: "Do you have experience with industry-specific design needs?",
            answer: "Yes, our team has worked with various industries, allowing us to tailor designs to your unique sector's requirements."
        },
        {
            question: "Can you handle rush projects or tight deadlines?",
            answer: "We'll do our best to accommodate your timeline. Please inform us of any urgent deadlines, and we'll discuss options."
        },

  ]

  export const footerTabs = [
    //Learn Tab
    {
        tabName: "Learn",
        linkName: [
            {
                title: "Home",
                link: "#home"
            },
            {
                title: "Latest Work",
                link: "#work"
            },
            {
                title: "Book Us",
                link: "#book-us"
            },
            {
                title: "FAQs",
                link: "#faq"
            },
        ]
    },
    //Social Media Tab
    {
        tabName: "Socials",
        linkName: [
            {
                title: "Instagram",
                link: "https://www.instagram.com"
            },
            {
                title: "TikTok",
                link: "https://www.tiktok.com"
            },
            {
                title: "Facebook",
                link: "https://www.facebook.com"
            },
        ]
    },
    // Attributions Tab
    {
        tabName: "Attributions",
        linkName:[
            {
                title: "Popsy",
                link: "https://popsy.co/"
            },
            {
                title: "Pixabay",
                link: "https://pixabay.com"
            },
            {
                title: "Open Peeps",
                link: "https://www.openpeeps.com/"
            }
        ]
    },
    //Information Tab
    {
        tabName: "Information",
        linkName:[
            {
                title: "Privacy Policy",
                link: "/"
            },
            {
                title: "Terms & Conditions",
                link: "/"
            }
        ]
    }

]