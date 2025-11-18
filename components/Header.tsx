import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Logo from './Logo';

// Definición de rutas
const navigation = [
  { name: 'Obras', href: '/obras', current: false },
  { name: 'Artista', href: '/artista', current: false },
  { name: 'Contacto', href: '/contacto', current: false },
];

type ClassValue = string | false | null | undefined;

function classNames(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ');
}

// Icono del logo


export default function Header() {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-40 bg-gray-900 backdrop-blur-sm border-b-2 border-red-700/50 shadow-lg"
    >
      {/* Contenedor principal */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">

          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <Link href="/" className="flex items-center cursor-pointer">
              <Logo/>
              <h1 className="ml-2 text-xl font-black tracking-widest text-red-500 uppercase">
                Galeria de arte
              </h1>
            </Link>
          </div>

          {/* Menú Desktop */}
          <div className="hidden sm:block">
            <div className="flex space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current
                      ? 'text-red-500 border-b-2 border-red-500'
                      : 'text-gray-300 hover:text-red-500 transition-colors',
                    'px-3 py-2 text-sm font-medium uppercase tracking-wider'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Botón Hamburguesa Mobile */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="group p-2 text-red-500 hover:bg-red-500/20 rounded-md">
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-open:block" />
            </DisclosureButton>
          </div>

        </div>
      </div>

      {/* Panel móvil */}
      <DisclosurePanel className="sm:hidden bg-gray-900/95 shadow-xl">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                'block rounded-md px-3 py-2 text-base font-medium uppercase tracking-wider',
                item.current
                  ? 'bg-red-900/50 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-red-500'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </DisclosurePanel>

    </Disclosure>
  );
}
