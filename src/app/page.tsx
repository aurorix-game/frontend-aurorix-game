import './global.css';

export default function Home() {
  return (
    <main
      style={{
        backgroundImage: 'url(home-background.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
      }}
    >
      <div
        style={{
          background: 'rgba(65, 27, 68, 0.5)',
          backdropFilter: 'blur(0.5vh)',
          height: '100vh',
          width: '100%',
        }}
      ></div>
    </main>
  );
}
