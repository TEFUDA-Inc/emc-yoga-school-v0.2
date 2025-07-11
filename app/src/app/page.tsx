import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/login');
  // Note: redirect() must be called outside of the return statement.
  // It's a server-side only function in this context (Route Handlers, Server Actions, Server Components).
  // For client-side navigation, you would use `useRouter` from `next/navigation`.
  // Since this is the root page.tsx, it's a Server Component by default.
}
