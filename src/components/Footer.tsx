import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <p className="text-2xl font-bold tracking-widest text-white uppercase mb-2">DEF</p>
          <p className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-4">Design Studio</p>
          <p className="text-sm leading-relaxed">
            Architecture · Interior · Furniture<br />
            Based in Bao Loc, Lam Dong, Vietnam.
          </p>
        </div>

        {/* Nav */}
        <div>
          <p className="text-xs tracking-widest uppercase text-stone-500 mb-4">Điều Hướng</p>
          <ul className="space-y-2 text-sm">
            {[
              { to: '/', label: 'Trang Chủ' },
              { to: '/projects', label: 'Dự Án' },
               { to: '/products', label: 'Sản Phẩm' },
              { to: '/about', label: 'Giới Thiệu' },
              { to: '/contact', label: 'Liên Hệ' },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="hover:text-white transition-colors duration-200">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs tracking-widest uppercase text-stone-500 mb-4">Liên Hệ</p>
          <ul className="space-y-2 text-sm">
            <li>13/13 Be Van Dan Street, B'lao Ward,<br />Bao Loc City, Lam Dong Province</li>
            <li>
              <a href="tel:+84357996872" className="hover:text-white transition-colors">
                (+84) 357 996 872
              </a>
            </li>
            <li>
              <a href="mailto:defdesignvn@gmail.com" className="hover:text-white transition-colors">
                defdesignvn@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-800 text-center py-4 text-xs text-stone-600">
        © {new Date().getFullYear()} DEF Design Studio. All rights reserved.
      </div>
    </footer>
  );
}
