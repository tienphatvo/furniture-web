import { useState, type FormEvent } from 'react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real project, send to a backend/email service here.
    setSent(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-4">Get in Touch</p>
      <h1 className="text-4xl md:text-6xl font-light text-stone-900 leading-tight mb-12 max-w-xl">
        Let's start a conversation.
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Form */}
        

        {/* Info */}
        <div className="space-y-10">
          <div>
            <p className="text-xs tracking-widest uppercase text-stone-400 mb-3">Studio Address</p>
            <p className="text-stone-700 leading-relaxed text-sm">
              13/13 Be Van Dan Street<br />
              B'lao Ward, Bao Loc City<br />
              Lam Dong Province, Vietnam
            </p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-stone-400 mb-3">Phone</p>
            <a href="tel:+84357996872" className="text-stone-700 text-sm hover:text-stone-900 transition-colors">
              (+84) 357 996 872
            </a>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-stone-400 mb-3">Email</p>
            <a href="mailto:defdesignvn@gmail.com" className="text-stone-700 text-sm hover:text-stone-900 transition-colors">
              defdesignvn@gmail.com
            </a>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-stone-400 mb-3">Hours</p>
            <p className="text-stone-700 text-sm leading-relaxed">
              Monday – Friday: 8:00 – 17:30<br />
              Saturday: 8:00 – 12:00<br />
              Sunday: Closed
            </p>
          </div>

          {/* Map embed placeholder */}
          <div className="w-full aspect-video bg-stone-100 flex items-center justify-center border border-stone-200">
            <a
              href="https://maps.google.com/?q=13+Be+Van+Dan+Bao+Loc+Lam+Dong+Vietnam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase text-stone-400 hover:text-stone-700 transition-colors"
            >
              View on Google Maps ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
