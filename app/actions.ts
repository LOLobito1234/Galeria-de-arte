"use server"; 

import { Resend } from 'resend';

// Asegúrate de que esta variable de entorno esté definida en tu .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

// Define tu función de envío, usando FormData
export async function sendContactEmail(prevState: any, formData: FormData) {
  const firstName = formData.get('first-name') as string;
  const lastName = formData.get('last-name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  const phoneNumber = formData.get('phone-number') as string;
  const countryCode = formData.get('country') as string;
  const agreed = formData.get('agree-to-policies') === 'on';

  const fullName = `${firstName} ${lastName}`;

  if (!agreed) {
      return { success: false, message: 'Debes aceptar la política de privacidad.' };
  }
  
  // Validación básica
  if (!firstName || !email || !message) {
      return { success: false, message: 'Faltan campos requeridos (Nombre, Email, Mensaje).' };
  }

  try {
    const { error } = await resend.emails.send({
      from: 'Resend <onboarding@resend.dev>', // Importante: debe ser un dominio verificado en Resend
      to: ['deartegaleria19@gmail.com'], // ¡Reemplaza con tu correo!
      subject: `Nuevo mensaje de contacto de ${fullName}`,
      // PROPIEDAD CORREGIDA: Usando 'replyTo' en lugar de 'reply_to'
      replyTo: email, 
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
            <h3 style="color: #333;">Detalles del Contacto</h3>
            <p><strong>De:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${countryCode} ${phoneNumber}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 15px 0;">
            <h3 style="color: #333;">Mensaje</h3>
            <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { success: false, message: 'Error al enviar el mensaje. Intenta de nuevo más tarde.' };
    }

    return { success: true, message: '¡Gracias! Tu mensaje ha sido enviado con éxito.' };
  } catch (error) {
    console.error('Server Action Catch Error:', error);
    return { success: false, message: 'Ocurrió un error inesperado en el servidor.' };
  }
}