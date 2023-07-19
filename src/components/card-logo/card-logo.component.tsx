type Params = {
  children: React.ReactNode;
  card: {
    width: string;
    height: string;
  };
};

export function CardLogo(params: Params) {
  return (
    <>
      <img
        src="images/logo-aurorix-16-pixel-art.png"
        alt="logo aurorix"
        style={{
          position: 'absolute',
          height: '22vh',
          top: '15vh',
        }}
      />
      <div
        style={{
          height: params.card.width,
          width: params.card.height,
          backgroundColor: '#301432',
          padding: 10,
          border: `solid 0.8vh #00DFA2`,
        }}
      >
        <div
          style={{
            marginTop: '11vh',
            height: '75%',
          }}
        >
          {params.children}
        </div>
      </div>
    </>
  );
}
