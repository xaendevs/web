export default function CharlanteItem({
  name,
  photo = 'https://picsum.photos/200/300',
  onClick
}) {
  return (
    <>
      <div
        className="charlante-item"
        style={{
          backgroundImage: 'url(' + photo + ')'
        }}
      >
        <span>{name} </span>
      </div>
      <style jsx>{`
        .charlante-item {
          height: 150px;
          width: 150px;
          border-radius: 50%;
          background-size: cover;
          transition: all 0.3s ease;
          cursor: pointer;
          filter: grayscale(0);
          position: relative;
        }
        .charlante-item:hover {
          filter: grayscale(100%);
          transform: translateY(-5px) scale(1.1) rotate(5deg);
        }
        span {
          opacity: 0;
          color: #111;
          transform: rotate(-5deg);
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
          position: absolute;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(5px);
          padding: 0.2rem 1rem;
          border-radius: 50%;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          font-weight: bold;
        }
        .charlante-item:hover span {
          opacity: 1;
          transform: rotate(-5deg);
        }
      `}</style>
    </>
  )
}
