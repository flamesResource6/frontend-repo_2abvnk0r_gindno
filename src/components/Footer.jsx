function Footer(){
  return (
    <footer className="py-10 bg-[#111322] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-white/70 text-sm">© 2025 Collective Spark</div>
        <div className="flex items-center gap-4 text-white/70 text-sm">
          <a className="hover:text-white" href="#">About</a>
          <a className="hover:text-white" href="#">Contact</a>
          <a className="hover:text-white" href="#">Privacy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;