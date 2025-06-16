// data/home-images.ts

// Define image paths centrally for easy maintenance and optimisation
export const imagePaths = {
  // Hero image
  homepage: {
    hero: "/assets/images/home/hero-home.jpeg",
  },
  // Service images
  services: {
    kitchen: "/assets/images/kitchens/services-kitchen.webp",
    wardrobe: "/assets/images/wardrobes/services-wardrobes.webp",
    slidingDoor: "/assets/images/sliding-doors/services-sliding-door.webp",
    vanity: "/assets/images/vanities/services-vanity.webp",
    laundry: "/assets/images/laundries/services-laundry.webp",
    showerScreen: "/assets/images/shower-screens/services-shower.webp"
  },
  // Gallery images
  gallery: {
    kitchen: "/assets/images/kitchens/kitchen-home-our-work.webp",
    wardrobe: "/assets/images/wardrobes/wardrobes-home-page-gallery.webp",
    laundry: "/assets/images/laundries/laundry-home-our-work.webp",
    showerScreen: "/assets/images/shower-screens/shower-screen-home-our-work.webp",
    slidingDoor: "/assets/images/sliding-doors/sliding-home-our-work.webp",
    vanity: "/assets/images/vanities/vanity-home-our-work.webp"
  },
  // About us images
  aboutUs: {
    hero: "/assets/images/about-us/about-hero.webp"
  },

  // Process images
  process: {
    consultation: "/assets/images/our-process/thinking.png",
    planning: "/assets/images/our-process/curve.png",
    confirmation: "/assets/images/our-process/contract.png",
    installation: "/assets/images/our-process/hammer.png"
  }
};

// Services section data with image references from central paths
export const servicesData = [
  {
    src: imagePaths.services.kitchen,
    alt: "Kitchens",
    type: "Kitchens",
    description: "Custom kitchen designs tailored to your space and style preferences.",
    link: "/services/kitchens"
  },
  {
    src: imagePaths.services.wardrobe,
    alt: "Wardrobes",
    type: "Wardrobes",
    description: "Stylish storage solutions maximising space and organization.",
    link: "/services/wardrobes"
  },
  {
    src: imagePaths.services.slidingDoor,
    alt: "Sliding Doors",
    type: "Sliding Doors",
    description: "Space-saving door solutions with contemporary designs.",
    link: "/services/sliding-doors"
  },
  {
    src: imagePaths.services.vanity,
    alt: "Vanities",
    type: "Vanities",
    description: "Elegant bathroom vanities combining functionality and style.",
    link: "/services/vanities"
  },
  {
    src: imagePaths.services.laundry,
    alt: "Laundries",
    type: "Laundries",
    description: "Efficient laundry designs to simplify your washing routine.",
    link: "/services/laundries"
  },
  {
    src: imagePaths.services.showerScreen,
    alt: "Shower Screens",
    type: "Shower Screens",
    description: "Modern shower screens adding sophistication to your bathroom.",
    link: "/services/shower-screens"
  }
];

// Process steps data
export interface ProcessStep {
  title: string;
  description: string;
  imageSrc: string;
}

export const processStepsData: ProcessStep[] = [
  {
    title: 'Initial Consultation',
    description: 'Every great result begins with a chat. Whether you\'re looking to revamp your dated kitchen or maximise your wardrobe storage space, our journey starts when you reach out to discuss your vision.',
    imageSrc: imagePaths.process.consultation
  },
  {
    title: 'Personalised Planning',
    description: 'Following our first meeting, we\'ll craft concept designs to help you visualise your project. Our experienced team will suggest innovative solutions, quality materials, and practical layouts that suit both your lifestyle needs and budget considerations.',
    imageSrc: imagePaths.process.planning
  },
  {
    title: 'Confirmation & Scheduling',
    description: 'Once you\'re delighted with the finalised design, we\'ll lock in your project with a formal agreement. A small deposit secures your place in our production schedule, ensuring your renovation becomes our next priority.',
    imageSrc: imagePaths.process.confirmation
  },
  {
    title: 'Crafting & Installation',
    description: 'With your project confirmed, our skilled craftspeople begin creating your custom pieces in our Melbourne workshop. Our team will coordinate with you regarding timelines, providing clear communication about manufacturing progress and installation dates.',
    imageSrc: imagePaths.process.installation
  }
];

// Gallery section data with image references from central paths
export const galleryData = [
  {
    src: imagePaths.gallery.kitchen,
    alt: "Modern kitchen design",
    description: "The client transformed their dated kitchen with sleek stone counter tops and custom cabinetry. The open-concept design increased their home's value while creating the perfect family gathering space.",
    buttonText: "Discover Kitchens",
    buttonLink: "/services/kitchens"
  },
  {
    src: imagePaths.gallery.wardrobe,
    alt: "Custom wardrobe design",
    description: "Our floor-to-ceiling wardrobe solution solved the client's storage challenges with specialised compartments and mirrored sliding doors. Their bedroom is now clutter-free with everything perfectly organised.",
    buttonText: "Discover Wardrobes",
    buttonLink: "/services/wardrobes"
  },
  {
    src: imagePaths.gallery.laundry,
    alt: "Modern laundry renovation",
    description: "The customer's cramped laundry was re-imagined with integrated storage, a folding counter, and efficient layout. Moisture-resistant materials ensure durability while stylish finishes complement their home.",
    buttonText: "Discover Laundries",
    buttonLink: "/services/laundries"
  },
  {
    src: imagePaths.gallery.showerScreen,
    alt: "Frameless shower screen",
    description: "The client's family modernised their bathroom with our frame-less shower screen. The clear glass creates an open feel while quality installation ensures water-tight performance with minimal maintenance.",
    buttonText: "Discover Shower Screens",
    buttonLink: "/services/shower-screens"
  },
  {
    src: imagePaths.gallery.slidingDoor,
    alt: "Custom sliding door installation",
    description: "The customer separated their open-plan living area without losing natural light. Our glass sliding doors create distinct zones while maintaining visual flow with smooth operation and noise reduction.",
    buttonText: "Discover Sliding Doors",
    buttonLink: "/services/sliding-doors"
  },
  {
    src: imagePaths.gallery.vanity,
    alt: "Modern bathroom vanity",
    description: "The client's bathroom transformation features our floating vanity with integrated lighting and ample storage. The wall-mounted design creates floor space while waterproof materials ensure longevity.",
    buttonText: "Discover Vanities",
    buttonLink: "/services/vanities"
  }
];

// About Us section data
export const aboutUsData = [
  {
    src: imagePaths.aboutUs.hero,
    alt: "About Us - Perfect Kitchen & Robes",
    title: "About Us",
    description: "Perfect Kitchen & Robes is a family-owned business with over 25 years of experience in creating custom kitchen and wardrobe solutions for Melbourne homes.",
    buttonText: "Learn More",
    buttonLink: "/about"
  }
];

export interface Testimonial {
  title: string;
  content: string;
  author: string;
}

export const testimonialsData: Testimonial[] = [
  {
    title: "Optimised Every Corner",
    content: "The team at Perfect Kitchen & Robes did an amazing job at my custom walk in robe. They optimised every corner giving me maximum storage space! They gave me great ideas from colours, hanging spaces and even my own jewellery draw. Couldn’t be more happy with how everything turned out!!",
    author: "Christine Grima"
  },
  {
    title: "Excellent Communication",
    content: "Tim & his team were able to transform our walk in robe and create an incredible space full of extra storage. Excellent communication skills & very professional. I highly recommend Perfect Kitchen & Robes for all your wardrobe needs.",
    author: "Nicole Cook"
  },
  {
    title: "Amazing Throughout the Whole Process",
    content: "The team at Perfect Kitchen and Robes were amazing throughout the whole process of our custom wardrobe. From the design to the installation, I could not recommend their work more highly! They brought our vision to life and can not fault their craftsmanship or their customer service.",
    author: "Stephanie Pobjie"
  },
  {
    title: "Very Professional",
    content: "I had Matt and Tim redo my walk in wardrobe, very professional and quality of it is great! recommend 100%",
    author: "Liam Bailey"
  },
  {
    title: "Our Vision came to Life",
    content: "our new wardrobe looks amazing! the owners are very friendly and professional, they made the whole process so easy and made our vision come to life :)",
    author: "Lauren Jones"
  },
  {
    title: "Great Customer Service",
    content: "Great overall experience and customer service.",
    author: "Harry Marshall"
  }
];