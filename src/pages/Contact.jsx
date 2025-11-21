export default function Contact() {
  return (
    <main className="min-h-screen text-right" dir="rtl">
      <section className="max-w-7xl mx-auto px-4 pt-24 pb-8">
        <h1 className="text-4xl md:text-5xl font-black text-white">צור קשר / שיחת ייעוץ</h1>
        <p className="mt-4 text-blue-200/90">בואו נדבר באופן אישי ונבין יחד איך נראה סוכן ה-AI של העסק שלכם.</p>
      </section>
      <section className="max-w-7xl mx-auto px-4 pb-20 grid lg:grid-cols-2 gap-8 items-start">
        <form className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="text-sm text-blue-100/90">שם מלא<input className="mt-1 w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white" placeholder="הקלידו כאן" /></label>
            <label className="text-sm text-blue-100/90">טלפון<input className="mt-1 w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white" placeholder="050-0000000" /></label>
            <label className="text-sm text-blue-100/90">שם עסק<input className="mt-1 w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white" placeholder="שם העסק" /></label>
            <label className="text-sm text-blue-100/90">תחום<input className="mt-1 w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white" placeholder="לדוגמה: מרפאה, חנות, ייעוץ" /></label>
          </div>
          <button type="button" className="mt-4 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/30 hover:brightness-110 transition">
            שלחו פרטים
          </button>
          <p className="mt-3 text-xs text-blue-200/70">אנחנו מכבדים פרטיות. אין ספאם, אין מכירה לצד שלישי.</p>
        </form>
        <div className="space-y-4">
          <a href="https://wa.me/" target="_blank" rel="noreferrer" className="block p-6 rounded-2xl bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/30 text-white font-semibold">
            דברו איתי בווטסאפ — מענה מהיר
          </a>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-blue-100/90">
            פרטיות: הפרטים שמתקבלים משמשים לתיאום שיחה בלבד. לא נשלח ספאם ולא נעביר מידע לגורם שלישי.
          </div>
        </div>
      </section>
    </main>
  )
}
