// Very small client-only session helpers for a prototype.
// Replace with proper auth/db on production.
import cookie from 'cookie';

const SESSION_KEY = 'hn_session';

export function setAnonymousSession() {
  const s = { anon: true, createdAt: Date.now() };
  if (typeof window !== 'undefined') {
    localStorage.setItem(SESSION_KEY, JSON.stringify(s));
    document.cookie = cookie.serialize(SESSION_KEY, JSON.stringify(s), { path: '/' });
  }
}

export function setUserSession(user: any) {
  const s = { ...user, anon: false };
  if (typeof window !== 'undefined') {
    localStorage.setItem(SESSION_KEY, JSON.stringify(s));
    document.cookie = cookie.serialize(SESSION_KEY, JSON.stringify(s), { path: '/' });
  }
}

export function getSession(): any {
  if (typeof window === 'undefined') return null;
  try {
    const s = localStorage.getItem(SESSION_KEY);
    return s ? JSON.parse(s) : null;
  } catch {
    return null;
  }
}

export function saveOnboarding(data: any) {
  const s = getSession() || {};
  const updated = { ...s, onboarding: data };
  localStorage.setItem(SESSION_KEY, JSON.stringify(updated));
}
