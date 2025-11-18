"use client";

import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { useActionState } from 'react';
// Importa la función de Server Action que definimos arriba
import { sendContactEmail } from '@/app/actions'; 

// Define el tipo de estado para el feedback
type State = {
    success: boolean;
    message: string;
} | null;


export default function Contacto() {
    // Inicializa el Server Action, pasando la función y el estado inicial (null)
    const [state, formAction] = useActionState<State, FormData>(sendContactEmail, null);
    
    // Clases personalizadas de Tailwind para el fondo de burbuja
    const backgroundStyle = {
        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
    };

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            {/* Fondo de Burbuja (Usando clases personalizadas de Tailwind) */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={backgroundStyle}
                    // NOTA: 'w-144.5', 'w-288.75', y 'bg-linear-to-tr' no son clases estándar de Tailwind 
                    // y podrían requerir configuración en tailwind.config.js o CSS global.
                    // Aquí se dejan como estaban en tu código original.
                    className="relative left-1/2 -z-10 aspect-1155/678 w-[57.8rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[115.5rem]"
                />
            </div>
            
            {/* Encabezado */}
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contáctanos</h2>
                <p className="mt-2 text-lg/8 text-gray-600">Formulario de contacto para cualquier consulta.</p>
            </div>

            {/* Formulario que llama al Server Action */}
            <form action={formAction} className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    {/* Primer Nombre */}
                    <div>
                        <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                            Primer Nombre
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="first-name"
                                name="first-name"
                                type="text"
                                autoComplete="given-name"
                                required
                                className="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                            />
                        </div>
                    </div>
                    
                    {/* Apellidos */}
                    <div>
                        <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                            Apellidos
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="last-name"
                                name="last-name"
                                type="text"
                                autoComplete="family-name"
                                required
                                className="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                            />
                        </div>
                    </div>
                    
                    {/* Email */}
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                            />
                        </div>
                    </div>
                    
                    {/* Teléfono */}
                    <div className="sm:col-span-2">
                        <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
                            Número de teléfono
                        </label>
                        <div className="mt-2.5">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                                <div className="grid shrink-0 grid-cols-1">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country"
                                        aria-label="Country"
                                        className="col-start-1 row-start-1 w-full appearance-none rounded-md border-0 bg-transparent py-2 pr-7 pl-3.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                                        defaultValue="MEX"
                                    >
                                        <option value="MEX">+52 (MEX)</option>
                                        <option value="CA">+1 (CA)</option>
                                        <option value="EU">+1 (US)</option>
                                    </select>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400"
                                    />
                                </div>
                                <input
                                    id="phone-number"
                                    name="phone-number"
                                    type="tel"
                                    placeholder="123-456-7890"
                                    className="block min-w-0 grow border-0 bg-transparent py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>
                    
                    {/* Mensaje */}
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                            Mensaje
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                className="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                defaultValue={''}
                            />
                        </div>
                    </div>

                    {/* Checkbox de Políticas */}
                    <div className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            {/* Toggle Switch Simple para política */}
                            <input
                                id="agree-to-policies"
                                name="agree-to-policies"
                                type="checkbox"
                                aria-label="Aceptar políticas de privacidad"
                                defaultChecked={false}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                        </div>
                        <label htmlFor="agree-to-policies" className="text-sm/6 leading-6 text-gray-600">
                            Al seleccionar esta opción, acepta nuestra{' '}
                            <a href="#" className="font-semibold whitespace-nowrap text-indigo-600 hover:text-indigo-500">
                                política de privacidad
                            </a>
                            .
                        </label>
                    </div>
                </div>

                {/* Botón de Enviar */}
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
                        disabled={state?.success === true} // Deshabilita si el envío fue exitoso
                    >
                        {state?.success === true ? 'Mensaje Enviado' : 'Enviar Mensaje'}
                    </button>
                </div>
            </form>
            
            {/* Mensaje de retroalimentación (Feedback) */}
            {state?.message && (
                <div className="mx-auto mt-6 max-w-xl text-center">
                    <p className={`font-medium ${state.success ? 'text-green-600' : 'text-red-600'}`}>
                        {state.message}
                    </p>
                </div>
            )}
        </div>
    );
}