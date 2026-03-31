import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Task Manager</h1>
      <nav>
        <Link href="/tasks">Tasks</Link> | 
        <Link href="/about">About</Link>
      </nav>
    </div>
  );
}