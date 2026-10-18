/**
 * Site-wide constants and configuration.
 * Single source of truth per updated agents.md (Section 7).
 */

export const SITE = {
  name: 'JMT Public Higher Secondary School & College',
  shortName: 'JMT',
  tagline: 'ZUEB-affiliated institution',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://jmt-pink.vercel.app',
  
  phone: '0342-4049132',
  phoneHref: 'tel:03424049132',
  
  whatsapp: 'https://wa.me/923424049132',
  whatsappNumber: '+92 342 4049132',
  whatsappApplyMessage: 'https://wa.me/923424049132?text=Hello%20JMT%2C%20I%20want%20to%20apply%20for%20admission.',
  
  address: 'House 381, Street 9, Qazzafi Town, Quaidabad, Bin Qasim, Malir, Karachi',
  mapCoordinates: {
    lat: 24.848751,
    lng: 67.221493,
  },
  mapDirectionsUrl: 'https://maps.google.com/?q=24.848751977936953,67.22149307537047',
  
  officeHours: 'Mon – Sat: 9:00 AM – 5:00 PM',
  officeHoursFull: 'Monday to Saturday, 9:00 AM – 5:00 PM (Sunday closed)',
  
  // Email is hidden until official domain email is verified (see updated agents.md)
  email: null,
  
  zuebHelpdesk: 'helpdesk@zueb.edu.pk',
  
  // Social media links - null until verified URLs are supplied by owner
  facebookUrl: null,
  instagramUrl: null,
};
