import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen text-right" dir="rtl">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
        {/* neon grid */}
        <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" aria-hidden>
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgb(56 189 248 / 0.35)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 pt-28 pb-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
              פחות כאב ראש. יותר מכירות. סוכני AI חכמים שמנהלים את העסק יחד איתך.
            </h1>
            <p className="mt-6 text-lg text-blue-200/90 leading-8">
              לידים נענים אוטומטית, פגישות מתואמות ליומן, שירות עובד מסביב לשעון – וכל זה תוך חיבור חכם לוואטסאפ, CRM ואתר.
            </p>

            <div className="mt-8 flex flex-row-reverse gap-3">
              <a href="#contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/30 hover:brightness-110 transition">
                קבע שיחת ייעוץ
              </a>
              <a href="#demo" className="px-6 py-3 rounded-xl border border-cyan-400/40 text-white hover:bg-white/5 transition">
                צפה בדוגמת סוכן AI
              </a>
            </div>
          </div>

          <div className="relative">
            {/* Placeholder for 3D/Canvas - replace with Spline/Three.js */}
            <div className="aspect-[4/3] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl overflow-hidden">
              <div className="w-full h-full grid place-items-center text-blue-200/80 p-6 text-center">
                <p>
                  כאן תוצג אנימציית 3D של רשת עצבית, בועות צ'אט ולוח מחוונים דינמי.<br />
                  ניתן לשלב Spline, Three.js או Lottie.
                </p>
              </div>
            </div>
            {/* flowing arrows as data pipes */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="absolute -left-6 -bottom-6 right-10">
              <div className="h-20 bg-gradient-to-r from-cyan-400/20 to-transparent rounded-2xl blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/40" />
        <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">המציאות של בעל העסק</h2>
            <p className="text-blue-200/90 leading-8">
              לידים שלא מקבלים מענה בזמן. לקוחות שנופלים בין הכיסאות. בלאגן בין מערכות, טפסים, וואטסאפ וCRM. שעות על גבי שעות של ניהול ידני, ותחושת חוסר שליטה שמלווה את היום.
            </p>
            <p className="text-blue-200/90 leading-8">
              זה לא חייב להיות ככה. אפשר לבנות מערכת חכמה שמגיבה מהר, מדייקת מסרים ומקדמת מכירה — גם כשאתה בפגישה, בדרכים או פשוט נח.
            </p>
          </div>
          <div className="grid gap-4">
            {["לידים ש"+"לא מקבלים מענה", "לקוחות נעלמים באמצע התהליך", "חוסר תיעוד ובקרה", "תלות בעובדים זמניים", "בזבוז זמן על משימות שחוזרות על עצמן"].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur shadow"
              >
                <p className="text-white">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dream/results */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="grid sm:grid-cols-2 gap-4">
              {["הודעות נענות אוטומטית", "לידים מתחממים לבד", "שיחות נקבעות ביומן", "מכירות מתקדמות בלי לרדוף"].map((item, i) => (
                <motion.div key={i} initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-5 rounded-xl bg-gradient-to-br from-cyan-400/10 to-blue-500/10 border border-cyan-400/30 text-white">
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">כשיש סוכן AI חכם</h2>
            <p className="mt-4 text-blue-200/90 leading-8">
              הבוט שלך לומד את השפה של העסק, מנהל שיחות, מבצע תיאומים ומסנכרן מידע למערכות — כאילו היה עובד נוסף. אתה מקבל שליטה, ודאות ושקט בראש.
            </p>
          </div>
        </div>
      </section>

      {/* What is agent */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">מה זה סוכן AI חכם לעסקים?</h2>
            <p className="mt-4 text-blue-200/90 leading-8">
              סוכן AI הוא מערכת חכמה שמתחברת לוואטסאפ, לאתר, לטפסים ולCRM שלך, ומנהלת שיחות בזמן אמת. הוא יודע לזהות כוונה, לשאול שאלות מדויקות, לעדכן נתונים ולדחוף קדימה את התהליך.
            </p>
            <ul className="mt-6 space-y-3 text-blue-100/90">
              <li>קישור ישיר לוואטסאפ ביזנס</li>
              <li>חיבור וסנכרון לCRM מובילים</li>
              <li>אינטגרציה לטפסים, אתר ודפי נחיתה</li>
              <li>סנכרון לגוגל שיטס ומערכות נוספות</li>
            </ul>
          </div>
          <div className="grid gap-4">
            {[
              { title: 'וואטסאפ', desc: 'חיבור דו כיווני, קליטה ומענה אוטומטי לשיחות, תיוג, העברה לצוות כשצריך.' },
              { title: 'CRM', desc: 'עדכון סטטוסים, פתיחת לידים, העברת שלבים ותיעוד מלא של שיחות.' },
              { title: 'אתר וטפסים', desc: 'קליטה מיידית של פניות, יצירת שיחה חכמה עם כל פונה, והכנה לקראת מכירה.' },
              { title: 'Sheets ומערכות', desc: 'סנכרון חכם לנתונים קיימים, בדיקת כפילויות והפקת תובנות.' },
            ].map((box, i) => (
              <motion.div key={i} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-5 rounded-xl bg-white/5 border border-white/10 text-blue-100/90">
                <div className="text-white font-semibold mb-1">{box.title}</div>
                <div>{box.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10">איך נראה התהליך</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { title: 'שיחת היכרות', desc: 'מבינים את היעדים, המוצרים והזרימות.' },
              { title: 'מיפוי תרחישים', desc: 'תסריטי שיחה, שאלות ותשובות, מדיניות.' },
              { title: 'בנייה והטמעה', desc: 'חיבור למערכות, לוגיקות ואינטגרציות.' },
              { title: 'אופטימיזציה', desc: 'בדיקות, מדידות ושיפורים רציפים.' },
              { title: 'השקה וליווי', desc: 'עלייה לאוויר, הדרכה וליווי בשטח.' },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 text-blue-100/90">
                <div className="text-white font-semibold mb-1">{step.title}</div>
                <div className="text-sm">{step.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">מה לקוחות מספרים</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { q: 'הפניות קיבלו מענה תוך דקות והיומן התמלא בפגישות.', a: '— לירון, מרפאת שיניים' },
              { q: 'הצלחנו להחזיר לידים ישנים לחיים ולהגדיל את המכירות.', a: '— עדן, חנות אונליין' },
              { q: 'הצוות רגוע יותר והלקוחות מקבלים שירות מהיר.', a: '— שגיא, חברת ייעוץ' },
            ].map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-5 rounded-xl bg-white/5 border border-white/10 text-blue-100/90">
                <div className="text-white mb-2">“{t.q}”</div>
                <div className="text-sm">{t.a}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fit / Not fit */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">למי זה מתאים</h3>
            <ul className="space-y-2 text-blue-100/90">
              <li>בעלי שירותים, איקומרס, יועצים ומאמנים</li>
              <li>עסקים שרוצים לגדול ולהכניס סדר במכירות</li>
              <li>צוותים שרוצים לחזור לעבודה יצירתית במקום עבודות שחורות</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">למי זה פחות</h3>
            <ul className="space-y-2 text-blue-100/90">
              <li>מי שמחפש פתרון חד־פעמי ללא תהליך</li>
              <li>מי שלא מוכן לשפר תהליכים בעסק</li>
              <li>מי שמצפה ל״כפתור קסם״ בלי השקעה</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">מוכנים לסוכן AI שמותאם בדיוק לעסק שלכם?</h2>
            <p className="mt-4 text-blue-200/90 leading-8">אין סוכן AI אחד שמתאים לכולם. אנחנו בונים סוכן חכם סביב המוצרים, התהליכים והלקוחות שלכם.</p>
            <div className="mt-6 flex flex-row-reverse gap-3">
              <a href="https://wa.me/" target="_blank" className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/30 hover:brightness-110 transition" rel="noreferrer">
                דברו איתי בווטסאפ
              </a>
              <a href="/contact" className="px-6 py-3 rounded-xl border border-cyan-400/40 text-white hover:bg-white/5 transition">
                טופס יצירת קשר
              </a>
            </div>
          </div>
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
        </div>
      </section>
    </main>
  )
}
