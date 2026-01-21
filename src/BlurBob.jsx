const BlurBob = ({ position, size }) => {
  const { top, left } = position
  const { width, height } = size

  return (
    <div
      className="absolute"
      style={{
        top,
        left,
        width,
        height,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className="w-full h-full rounded-full animate-blob
        bg-[radial-gradient(circle,#a855f740,transparent_70%)]"
      />
    </div>
  )
}

export default BlurBob
