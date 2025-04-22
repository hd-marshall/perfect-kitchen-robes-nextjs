// File: src/data/faq-data.ts

export interface FAQItem {
  question: string;
  answer: string;
}

export const wardrobeFAQs: FAQItem[] = [
  {
    question: "How much does a custom wardrobe cost in Melbourne?",
    answer: "The cost varies quite a bit depending on the size, style (walk-in vs built-in), materials chosen, internal fittings, and complexity of the installation. Because every wardrobe is custom-designed, we provide a detailed, obligation-free quote after discussing your specific needs and measuring your space. Get in touch for a free consultation!"
  },
  {
    question: "What's the process for getting a custom wardrobe designed and installed?",
    answer: "It starts with an initial chat and consultation where we understand your needs. Then we measure your space, create designs for your approval, help you select materials and finishes, and provide a quote. Once you give the go-ahead, our local team crafts the components and installs the wardrobe in your Melbourne home."
  },
  {
    question: "How long does it typically take from design approval to installation?",
    answer: "The timeframe can vary based on material availability and our current schedule, but generally, you can expect installation within a few weeks of finalising the design and quote. We'll give you a more precise timeline when you order."
  },
  {
    question: "Can you design wardrobes for small bedrooms or tricky spaces?",
    answer: "Absolutely! That's a key benefit of custom design. We specialise in creating smart storage solutions for all kinds of spaces, including small rooms, rooms with sloped ceilings, or awkward nooks. We design to maximise storage and functionality, no matter the challenge."
  },
  {
    question: "What types of materials and finishes do you offer?",
    answer: "We offer a wide selection of high-quality materials, including durable laminates, polyurethanes (painted finishes), timber veneers, and mirrored or coloured glass doors. We also have a great range of options for internal shelving, drawers, and accessories, plus quality hardware like soft-close hinges and drawer runners."
  },
  {
    question: "Do you offer a warranty on your wardrobes?",
    answer: "Yes, we stand by the quality of our workmanship and materials. We offer a comprehensive warranty on our custom wardrobes, covering both the materials and installation. We can provide specific warranty details during your consultation."
  }
];

// You can add more FAQ collections for other services
export const kitchenFAQs: FAQItem[] = [
  // Kitchen-related FAQs would go here
];

export const laundryFAQs: FAQItem[] = [
  // Laundry-related FAQs would go here
];
