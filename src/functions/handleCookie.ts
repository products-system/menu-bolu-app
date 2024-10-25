'use server';

import { cookies } from 'next/headers';

interface cookieData {
  name: string;
  value: string;
}

export async function createCookie(data: cookieData) {
  cookies().set({
    name: data.name,
    value: data.value,
  });
}

//Setting maxAge to 0 will immediately expire a cookie.
export async function deleteCookie(data: cookieData) {
  cookies().set(data.name, data.value, { maxAge: 0 });
}
