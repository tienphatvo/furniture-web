const teamMembers = [
  {
    name: 'Nguyen Phat',
    role: 'Founder & Lead Architect',
    bio: 'With over 10 years of practice across Vietnam and Southeast Asia, Phat leads the studio with a focus on contextual, climate-responsive design.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Linh Tran',
    role: 'Senior Interior Designer',
    bio: 'Linh specialises in crafting residential and commercial interiors that balance warmth, material honesty and functional elegance.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
  {
    name: 'Minh Hoang',
    role: 'Furniture Architect',
    bio: 'Minh brings a deep knowledge of tropical horticulture and outdoor living to every Furniture project, from rooftop gardens to resort grounds.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Studio intro */}
      <section className="max-w-3xl mb-20">
        <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-4">About the Studio</p>
        <h1 className="text-4xl md:text-6xl font-light text-stone-900 leading-tight mb-8">
          We design spaces<br />that tell stories.
        </h1>
        <p className="text-stone-600 leading-relaxed text-base mb-4">
          DEF Design Studio is a multidisciplinary practice based in Bao Loc, Lam Dong Province, Vietnam. Founded in 2018, we work across architecture, interior design and Furniture to create environments that are deeply rooted in their context, culture and climate.
        </p>
        <p className="text-stone-600 leading-relaxed text-base mb-4">
          Our process is collaborative and detail-driven. We believe that great design emerges from listening — to our clients, to the Furniture, to the materials we work with. Every project, regardless of scale, is approached with the same rigour and care.
        </p>
        <p className="text-stone-600 leading-relaxed text-base">
          From intimate residential interiors to large-scale public architecture, we are committed to crafting work that improves lives, enriches communities and stands the test of time.
        </p>
      </section>

      {/* Values */}
      <section className="mb-20">
        <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-8">Our Values</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Context', desc: 'Every site has a story. We begin by listening to the land, the climate and the community before a single line is drawn.' },
            { title: 'Craft', desc: 'We take pride in details. The quality of a joint, the texture of a wall, the weight of a door handle — these are what make a space memorable.' },
            { title: 'Collaboration', desc: 'Our best work happens when clients are genuine partners in the process. We build long relationships, not just buildings.' },
          ].map(({ title, desc }) => (
            <div key={title} className="border-t border-stone-200 pt-6">
              <h3 className="text-lg font-medium text-stone-900 mb-3">{title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section>
        <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-8">The Team</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <div key={member.name}>
              <div className="aspect-[3/4] overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="font-medium text-stone-900">{member.name}</h3>
              <p className="text-xs tracking-widest uppercase text-stone-400 mb-2">{member.role}</p>
              <p className="text-sm text-stone-500 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
