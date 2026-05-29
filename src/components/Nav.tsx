export default function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-6 h-14"
      style={{
        background: "rgba(242,242,247,0.88)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderBottom: "0.5px solid rgba(0,0,0,0.08)",
      }}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.06em] text-black">
        Masterthesis Status
      </p>
    </nav>
  );
}
