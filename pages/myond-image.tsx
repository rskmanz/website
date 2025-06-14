import Image from 'next/image';

export default function MyondImage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: 700, width: '100%', textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '1.2rem' }}>
          The Future of Knowledge Work
        </h1>
        <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1.2rem', color: '#444' }}>
          Transform How You<br />Think & Work
        </h2>
        <p style={{ fontSize: '1.15rem', color: '#333', marginBottom: '2rem', lineHeight: 1.7 }}>
          Myond by Bayond LLC is an AI-powered next-generation workspace.<br />
          Visualize and structure your thoughts, plans, and tasks to clarify what you truly want to achieve.
        </p>
        <button
          style={{
            fontSize: '1.1rem',
            fontWeight: 'bold',
            padding: '0.9rem 2.2rem',
            background: '#222',
            color: '#fff',
            border: 'none',
            borderRadius: '2rem',
            cursor: 'pointer',
            boxShadow: '0 2px 12px #0001',
            transition: 'background 0.2s',
          }}
        >
          Explore the Future
        </button>
      </div>
      <div style={{ width: 800, maxWidth: '95vw', height: 450, position: 'relative', marginTop: '1.5rem' }}>
        <Image
          src="/bayond_images/(English) (2).svg"
          alt="Myond English"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </div>
  );
} 