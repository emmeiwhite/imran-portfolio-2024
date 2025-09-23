;<>
  <div className="min-h-screen w-full relative">
    {/* Dark Dot Matrix */}
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundColor: '#0a0a0a',
        backgroundImage: `
       radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
       radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
     `,
        backgroundSize: '10px 10px',
        imageRendering: 'pixelated'
      }}
    />
    {/* Your Content Here */}

    <div className="min-h-screen w-full bg-black relative">
      {/* Black Grid with White Dots Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: '#000000',
          backgroundImage: `
        linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px),
        radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)
      `,
          backgroundSize: '20px 20px, 20px 20px, 20px 20px',
          backgroundPosition: '0 0, 0 0, 0 0'
        }}
      />
      {/* Your Content/Components */}
    </div>
  </div>
</>
