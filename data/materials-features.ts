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
    }, [
      React.createElement("rect", {
        key: "glass-panel",
        x: "6",
        y: "4",
        width: "12",
        height: "16",
        rx: "1",
        strokeWidth: 1,
        fill: "none",
        opacity: "0.3"
      }),
      React.createElement("rect", {
        key: "top-frame",
        x: "5",
        y: "3",
        width: "14",
        height: "2",
        strokeWidth: 2
      }),
      React.createElement("rect", {
        key: "bottom-frame",
        x: "5",
        y: "19",
        width: "14",
        height: "2",
        strokeWidth: 2
      }),
      React.createElement("rect", {
        key: "left-frame",
        x: "5",
        y: "3",
        width: "2",
        height: "18",
        strokeWidth: 2
      }),
      React.createElement("circle", {
        key: "handle",
        cx: "16",
        cy: "12",
        r: "1",
        strokeWidth: 2
      })
    ])
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
    }, [
      React.createElement("rect", {
        key: "glass-panel",
        x: "6",
        y: "4",
        width: "12",
        height: "16",
        rx: "1",
        strokeWidth: 1,
        fill: "none",
        opacity: "0.3"
      }),
      React.createElement("rect", {
        key: "full-frame",
        x: "5",
        y: "3",
        width: "14",
        height: "18",
        rx: "1",
        strokeWidth: 3,
        fill: "none"
      }),
      React.createElement("circle", {
        key: "handle",
        cx: "16",
        cy: "12",
        r: "1",
        strokeWidth: 2
      })
    ])
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
    }, [
      React.createElement("rect", {
        key: "fixed-panel",
        x: "4",
        y: "4",
        width: "8",
        height: "16",
        strokeWidth: 2,
        fill: "none",
        opacity: "0.3"
      }),
      React.createElement("path", {
        key: "opening",
        d: "M12 4v16",
        strokeWidth: 2,
        strokeLinecap: "round"
      }),
      React.createElement("path", {
        key: "walk-through",
        d: "M14 12h6",
        strokeWidth: 2,
        strokeLinecap: "round"
      }),
      React.createElement("path", {
        key: "arrow",
        d: "M18 10l2 2-2 2",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    ])
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
    }, [
      React.createElement("rect", {
        key: "sliding-panel",
        x: "8",
        y: "4",
        width: "8",
        height: "16",
        strokeWidth: 2,
        fill: "none"
      }),
      React.createElement("path", {
        key: "slide-arrow",
        d: "M4 12h6m-2-2l2 2-2 2",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    ])
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
      d: "M4 5h16v10c0 3-4 6-8 6s-8-3-8-6V5z",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
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
      d: "M4 4h16v16H4V4zm2 2v12h12V6H6z"
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
    }, React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2",
      strokeWidth: 2
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
      d: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
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
    }, [
      React.createElement("rect", {
        key: "cupboard",
        x: "4",
        y: "2",
        width: "16",
        height: "8",
        rx: "1",
        strokeWidth: 2
      }),
      React.createElement("line", {
        key: "cupboard-door",
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "10",
        strokeWidth: 2
      }),
      React.createElement("rect", {
        key: "appliance",
        x: "6",
        y: "12",
        width: "12",
        height: "10",
        rx: "1",
        strokeWidth: 2
      }),
      React.createElement("circle", {
        key: "appliance-control1",
        cx: "9",
        cy: "15",
        r: "1",
        strokeWidth: 2
      }),
      React.createElement("circle", {
        key: "appliance-control2",
        cx: "15",
        cy: "15",
        r: "1",
        strokeWidth: 2
      })
    ])
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
    }, [
      React.createElement("rect", {
        key: "left-door",
        x: "4",
        y: "2",
        width: "7",
        height: "20",
        rx: "1",
        strokeWidth: 2
      }),
      React.createElement("rect", {
        key: "right-door",
        x: "13",
        y: "2",
        width: "7",
        height: "20",
        rx: "1",
        strokeWidth: 2
      }),
      React.createElement("circle", {
        key: "handle1",
        cx: "9",
        cy: "12",
        r: "0.5",
        fill: "currentColor"
      }),
      React.createElement("circle", {
        key: "handle2",
        cx: "15",
        cy: "12",
        r: "0.5",
        fill: "currentColor"
      })
    ])
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
    }, [
      React.createElement("rect", {
        key: "cabinet-frame",
        x: "3",
        y: "4",
        width: "18",
        height: "16",
        rx: "1",
        strokeWidth: 2
      }),
      React.createElement("rect", {
        key: "drawer",
        x: "5",
        y: "8",
        width: "14",
        height: "8",
        rx: "1",
        strokeWidth: 2,
        fill: "none"
      }),
      React.createElement("line", {
        key: "pull-handle",
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12",
        strokeWidth: 3,
        strokeLinecap: "round"
      }),
      React.createElement("path", {
        key: "pull-arrow",
        d: "M16 10l2 2-2 2",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    ])
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
    }, [
      React.createElement("rect", {
        key: "benchtop",
        x: "2",
        y: "8",
        width: "20",
        height: "4",
        rx: "1",
        strokeWidth: 2
      }),
      React.createElement("line", {
        key: "support1",
        x1: "6",
        y1: "12",
        x2: "6",
        y2: "20",
        strokeWidth: 2
      }),
      React.createElement("line", {
        key: "support2",
        x1: "18",
        y1: "12",
        x2: "18",
        y2: "20",
        strokeWidth: 2
      }),
      React.createElement("rect", {
        key: "base1",
        x: "4",
        y: "18",
        width: "4",
        height: "2",
        strokeWidth: 2
      }),
      React.createElement("rect", {
        key: "base2",
        x: "16",
        y: "18",
        width: "4",
        height: "2",
        strokeWidth: 2
      })
    ])
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
    }, [
      React.createElement("line", {
        key: "shelf1",
        x1: "4",
        y1: "6",
        x2: "20",
        y2: "6",
        strokeWidth: 3,
        strokeLinecap: "round"
      }),
      React.createElement("line", {
        key: "shelf2",
        x1: "4",
        y1: "12",
        x2: "20",
        y2: "12",
        strokeWidth: 3,
        strokeLinecap: "round"
      }),
      React.createElement("line", {
        key: "shelf3",
        x1: "4",
        y1: "18",
        x2: "20",
        y2: "18",
        strokeWidth: 3,
        strokeLinecap: "round"
      }),
      React.createElement("line", {
        key: "support-left",
        x1: "6",
        y1: "4",
        x2: "6",
        y2: "20",
        strokeWidth: 2
      }),
      React.createElement("line", {
        key: "support-right",
        x1: "18",
        y1: "4",
        x2: "18",
        y2: "20",
        strokeWidth: 2
      })
    ])
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