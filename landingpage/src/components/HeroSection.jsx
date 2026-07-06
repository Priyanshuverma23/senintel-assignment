function HeroSection() {
  return (
    <section className="min-h-screen bg-stone-50 relative overflow-hidden flex items-center px-6 py-16">
     <div className="max-w-5xl mx-auto text-center">
        {/* Trust badge */}
        <span className="inline-block bg-stone-100 text-yellow-800 text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full mb-6">
          🔒 END-TO-END ENCRYPTED
        </span>

        {/* Headline */}
        <h1 className="text-slate-900 text-4xl md:text-5xl font-bold leading-tight">
          Everything important,
          <br />
          kept where it belongs.
        </h1>

        {/* Sub-headline */}
        <p className="mt-5 text-slate-500 text-lg max-w-xl mx-auto">
          Documents, reminders, and checklists — organized in one private
          place, protected like a bank protects a vault.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800">
            Create your vault
          </button>
          <button className="border border-stone-300 text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-stone-100">
            See how it works
          </button>
        </div>

        {/* Benefit cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-stone-200">
            <p className="text-sm font-semibold text-slate-900">📄 All-in-one storage</p>
            <p className="text-xs text-slate-400 mt-1">Documents & files, organized</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-stone-200">
            <p className="text-sm font-semibold text-slate-900">🔔 Never miss a date</p>
            <p className="text-xs text-slate-400 mt-1">Reminders that actually reach you</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-stone-200">
            <p className="text-sm font-semibold text-slate-900">✅ Checklists that stick</p>
            <p className="text-xs text-slate-400 mt-1">Track what matters, done or not</p>
          </div>
        </div>

        {/* Trust note */}
        <p className="mt-8 text-xs text-slate-400">
          🔒 Your data is encrypted on your device before it ever reaches our servers.
        </p>
        
    
      </div>
    </section>
  );
}

export default HeroSection;