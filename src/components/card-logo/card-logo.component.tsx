type Params = {
  children: React.ReactNode;
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
          height: '50vh',
          width: '45vh',
          backgroundColor: '#301432',
          padding: 10,
          border: 'solid 0.8vh #00DFA2',
        }}
      >
        <div
          style={{
            marginTop: '11vh',
            height: '75%',
            // backgroundColor: 'white',
          }}
        >
          {params.children}
        </div>
      </div>
    </>
  );
}
