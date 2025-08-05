// File: src/data/services-features.ts
import React from 'react';

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ServiceFeatures {
  sectionId: string;
  title: string;
  description: string;
  features: FeatureItem[];
  backgroundColor?: string;
  textColor?: string;
}

// Wardrobe Features
export const wardrobeFeatures: FeatureItem[] = [
  {
    title: "Integrated Lighting",
    description: "Perfect illumination for finding exactly what you're looking for.",
    icon: React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-8 w-8",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    }))
  },
  {
    title: "Mirrored Doors",
    description: "Adds functionality while creating a sense of space.",
    icon: React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-8 w-8",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
    }))
  },
  {
    title: "Specialised Drawers",
    description: "Custom storage solutions for your specific needs.",
    icon: React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-8 w-8",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
    }))
  },
  {
    title: "Tailored Compartments",
    description: "Keep your smaller items organised and accessible.",
    icon: React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-8 w-8",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    }))
  },
  {
    title: "Pull-out Shoe Racks",
    description: "Easy access storage for your footwear collection.",
    icon: React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-8 w-8",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
    }))
  },
  {
    title: "Premium Finishes",
    description: "From laminates to timber veneers and painted finishes.",
    icon: React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-8 w-8",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
    }))
  }
];

// Shower Screen Features
export const showerScreenFeatures: FeatureItem[] = [
  {
    title: "Semi-Frameless Screens",
    description: "A great balance of modern aesthetics and structural rigidity, featuring slimline framing around the edges.",
    icon: React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-8 w-8",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    }))
  },
  {
    title: "Fully Framed Screens",
    description: "A practical and durable choice, offering excellent water sealing and often available in a wider range of finishes.",
    icon: React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-8 w-8",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
    }))
  },
  {
    title: "Fixed Panel Screens",
    description: "Perfect for creating contemporary walk-in shower areas, often combined with a frameless or semi-frameless door or opening.",
    icon: React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-8 w-8",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    }))
  },
  {
    title: "Sliding Door Screens",
    description: "Ideal for bathrooms where space is limited, preventing the need for an outward or inward swinging door.",
    icon: React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-8 w-8",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    }), React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    }))
  },
  {
    title: "Over-Bath Screens",
    description: "A functional solution for bathrooms combining a bath and shower, keeping water contained effectively.",
    icon: React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-8 w-8",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v3M7 4H5a1 1 0 00-1 1v3m0 0V5a1 1 0 00-1-1H1a1 1 0 00-1 1v3m22-3V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v3M1 8v8a1 1 0 001 1h2a1 1 0 001-1V8m0 0h16m0 0v8a1 1 0 001 1h2a1 1 0 001-1V8"
    }))
  }
];

// Sliding Doors Features
export const slidingDoorsFeatures: FeatureItem[] = [
  {
    title: "Glass Options",
    description: "Clear, frosted, tinted, or safety glass for light control and privacy.",
    icon: React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-8 w-8",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    }))
  },
  {
    title: "Mirrored Panels",
    description: "Enhance light and space, perfect for bedrooms and hallways.",
    icon: React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-8 w-8",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
    }))
  },
  {
    title: "Solid Panels",
    description: "Available in a wide range of colours, timber-look finishes, or routed designs to match your joinery or décor.",
    icon: React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-8 w-8",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
    }))
  },
  {
    title: "Frame Choices",
    description: "Select from sleek aluminium frames in various finishes or opt for frameless designs for a minimalist look.",
    icon: React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-8 w-8",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    }))
  }
];

// Laundry Features
export const laundryFeatures: FeatureItem[] = [
  {
    title: "Overhead Cupboards",
    description: "Perfect for storing detergents, cleaning supplies, and less-used items safely out of the way.",
    icon: React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-8 w-8",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
    }))
  },
  {
    title: "Tall Cabinets",
    description: "Ideal for brooms, mops, vacuum cleaners, and ironing boards.",
    icon: React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-8 w-8",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
    }))
  },
  {
    title: "Built-in Hampers",
    description: "Concealed pull-out or tilt-out hampers for sorting whites, colours, and delicates.",
    icon: React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-8 w-8",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    }))
  },
  {
    title: "Durable Benchtops",
    description: "Ample counter space above your washer and dryer for sorting, folding, or treating stains.",
    icon: React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-8 w-8",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
    }))
  },
  {
    title: "Open Shelving",
    description: "Stylish options for frequently used items or decorative baskets.",
    icon: React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-8 w-8",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    }))
  }
];

// Service configurations
export const wardrobeServiceFeatures: ServiceFeatures = {
  sectionId: "wardrobe-materials-features",
  title: "Beyond the Basics: <br/> Materials and Features",
  description: "While quality hardware and stylish finishes are standard, we offer a wide array of options to truly personalise your wardrobe. Choose from durable laminates in various colours and textures, elegant timber veneers, or sleek painted finishes. <br/><br/> We can also incorporate features like integrated lighting, mirrored doors, specialised drawers, pull-out shoe racks, and tailored accessory compartments to create a wardrobe that's not just storage, but a reflection of your lifestyle.",
  features: wardrobeFeatures,
  backgroundColor: "bg-zinc-800",
  textColor: "text-white"
};

export const showerScreenServiceFeatures: ServiceFeatures = {
  sectionId: "shower-screen-features",
  title: "Styles to Suit Every <br/> Melbourne Bathroom",
  description: "While frameless shower screens offer stunning minimalist appeal, we provide a range of styles to suit diverse tastes, budgets, and bathroom layouts across Melbourne. Consider these popular options:",
  features: showerScreenFeatures,
  backgroundColor: "bg-zinc-800",
  textColor: "text-white"
};

export const slidingDoorsServiceFeatures: ServiceFeatures = {
  sectionId: "sliding-doors-features",
  title: "Choosing Your System and Style",
  description: "We offer various track systems and configurations to suit different applications and structural requirements, including smooth <strong>top-hung systems</strong> for an unobstructed floor or robust <strong>bottom-rolling systems</strong>. Select from single, double, or even triple track configurations to control how your space opens up. Beyond the mechanism, the style is all yours. Choose from:",
  features: slidingDoorsFeatures,
  backgroundColor: "bg-zinc-800",
  textColor: "text-white"
};

export const laundryServiceFeatures: ServiceFeatures = {
  sectionId: "laundry-storage-features",
  title: "Custom Storage for Every <br/> Laundry Need",
  description: "Beyond just integrating appliances, our smart designs focus on tailored storage solutions to keep everything organised and within easy reach. <br/><br/> We work with you to design a layout that optimises your workflow, considering everything from appliance placement (stacked or side-by-side) to sink usability and ventilation.",
  features: laundryFeatures,
  backgroundColor: "bg-zinc-800",
  textColor: "text-white"
};