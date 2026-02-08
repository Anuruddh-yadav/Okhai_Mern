import React from 'react';

// Import assets from the directory specified in your structure
import aboutVideo from './aboutImages/aboutVideo.mp4';
import Ideologies from './aboutImages/image1.webp';
// Assuming these filenames based on your directory snippet and sections
import craftsImg from './aboutImages/image2.webp'; 
import storyImg from './aboutImages/image3.webp';
import artImg from './aboutImages/The_art_the_artisans.webp';
import collabImg from './aboutImages/Collaborations_and_partnerships.webp';
import teamImg from './aboutImages/our_team.webp';
import community from './aboutImages/our_community.webp';
import storesImg from './aboutImages/store.webp';

const Section = ({ title, content, quote, image, reverse, hasFloral }) => (
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-start gap-12 py-12 relative`}>
    
    {/* Minimalist floral sketches - absolute positioned to match screenshots */}
    {hasFloral && (
      <div className={`absolute ${reverse ? '-left-20' : '-right-20'} top-0 opacity-20 pointer-events-none hidden lg:block`}>
        <svg width="200" height="200" viewBox="0 0 100 100">
           <path d="M30,90 Q10,50 50,10 T90,50" fill="none" stroke="#ccc" strokeWidth="0.5" />
        </svg>
      </div>
    )}
    
    <div className="w-full md:w-1/2">
      <img src={image} alt={title} className="w-full h-auto object-cover" />
    </div>

    <div className="w-full md:w-1/2">
      <h2 className="text-xl md:text-2xl font-normal mb-6 text-gray-900 tracking-tight">{title}</h2>
      <div className="space-y-4 text-sm leading-7 text-gray-700">
        {content.map((p, i) => <p key={i} className="text-justify">{p}</p>)}
      </div>
      {quote && (
        <p className="mt-6 italic text-gray-800 font-medium leading-relaxed">
          "{quote}"
        </p>
      )}
      <button className="mt-8 px-8 py-3 border border-gray-900 text-[10px] tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-colors duration-300">
        KNOW MORE &rarr;
      </button>
    </div>
  </div>
);

const About = () => {
  return (
    <div className="bg-white font-serif text-[#333] selection:bg-gray-100">
      
      {/* 1. Hero Video - Full Width */}
      <div className="w-full mb-4">
        <video 
          src={aboutVideo} 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-auto max-h-[600px] object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="text-center text-[10px] tracking-[0.3em] uppercase my-12 text-gray-500 font-sans">
          Home | About Us
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="leading-relaxed text-[15px] md:text-[17px] text-gray-800">
            The name Okhai originates from the Okhamandal region of Gujarat, where our journey first began. 
            Today, it has grown to symbolise the vibrant shades of happiness and the beauty of handcrafted 
            artistry from across India. At Okhai, our essence lies in bringing mindfully crafted collections 
            to life by depicting art that is uncomplicated in design, bringing back the old-world charm 
            to your homes and lifestyle of the present.
          </p>
          
          <div className="flex justify-center mt-12">
            <div className="h-16 border-l border-dotted border-gray-300"></div>
          </div>
        </div>

        {/* 2. Design Ideologies */}
        <Section 
          title="Design Ideologies and Sensibilities"
          image={Ideologies}
          content={[
            "At the heart of all our designs, our focus and ideology has always been on quality, comfort and artistic impression. Each design is carefully selected and crafted keeping in mind abstract forms, architectural inspirations, artistic skills and hidden local crafts that lead to the creation of our products.",
            "The integral story behind each of our products is their unique characteristic of handcrafted features which make them more beautiful. The artisans and designers work cohesively via a collaborative process that enables them all to showcase their skills and crafts."
          ]}
          hasFloral={true}
        />

        {/* 3. Crafts */}
        <Section 
          title="Crafts"
          reverse={true}
          image={craftsImg}
          content={[
            "We have helped build a tribe of over 30,000 artisans who are skilled in crafts that were passed down from generations to them. At Okhai, you will find a host of skilled crafts that are brought to life with the help of industry professionals.",
            "Artisans learn market literacy, product innovation, overall growth and enhance their design acumen leading to a shift in their entrepreneurial skills and developing themselves as craft entrepreneurs."
          ]}
          quote="When you shop on Okhai, you become the owner of a beautiful handmade piece and enable its maker to have social equity and send their children to school"
        />

        {/* 4. Our Story */}
        <Section 
          title="Our Story"
          image={storyImg}
          content={[
            "Okhai deeply believes in the process of creating responsible products and art using traditional techniques where the energy that every maker puts into a piece of clothing or handmade object is reflected.",
            "We take pride in creating 100% authentic and handcrafted products using ethical processes that are collaborative, environment friendly and sustainable. Our manufacturing processes do not generate any waste that goes to the landfill."
          ]}
        />

        {/* 5. The Art & the Artisans */}
        <Section 
          title="The Art & the Artisans"
          reverse={true}
          image={artImg}
          content={[
            "We believe in supporting our artisans from rural areas by providing the skill and confidence they need to earn by their own industry. Our artisans and designers work on themes that span across architectural monuments to abstract forms.",
            "Our decentralised process enables women to decide whether they want to work from the comfort of their homes while focusing on their family and fields or come to the centre."
          ]}
          hasFloral={true}
        />

        {/* 6. Collaborations */}
        <Section 
          title="Collaborations and Partnerships"
          image={collabImg}
          content={[
            "Our vision has always enabled us to ensure that all the artisans in our community get enough work. The artisans we collaborate with are from different parts of the country, who bring with them forgotten art forms.",
            "By collaborating directly with artisans or partnering with vetted local NGOs, we help vulnerable craft communities move away from exploitative practices."
          ]}
        />

        {/* 7. Our Team */}
        <Section 
          title="Our Team"
          reverse={true}
          image={teamImg}
          content={["We are a team of industry professionals across various functions like design, marketing, finance, operations, craft and business who have come together to create an ecosystem of handmade creations that celebrate the heritage of India."]}
        />

        {/* 8. NEW: Our Community Section */}
        <Section 
          title="Our Community"
          image={community} 
          content={[
            "Along with celebrating our native crafts and the artisans behind them, Okhai is invested in impacting and creating equity for the intergenerational families in the community as well. Our production choices and supply chains ensure a culture where our artisans benefit from their skills and enhanced capabilities to be financially stable and self-sustainable.",
            "We are witnessing changes in women's role in decision-making, both at home and in their village. They are now welcomed for sharing their knowledge, purpose and intent towards the betterment of their communities, sending their children to school, making them empowered and of course, financially independent."
          ]}
          stats={[
            { value: "Over 30000", label: "artisans" },
            { value: "Over 15+", label: "crafts" },
            { value: "Across 20+", label: "states" }
          ]}
        />

        {/* 9. Stores Section */}
        <div className="py-24 text-center border-t border-gray-100">
          <h2 className="text-2xl font-normal mb-10 tracking-tight">Stores</h2>
          <img src={storesImg} alt="Store Front" className="w-full max-w-5xl mx-auto" />
          <p className="mt-16 text-[11px] tracking-[0.4em] uppercase text-gray-500 font-sans">
            Join our Tribe and Make a Difference
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;