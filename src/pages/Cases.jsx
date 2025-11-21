import { motion } from 'framer-motion'

export default function Cases() {
  const cases = [
    {
      title: 'מרפאת שיניים – חזרה למבול פניות',
      before: 'זמן מענה ארוך, ביטולי פגישות וחוסר תיאום בין מערכת האתר ליומן.',
      do: 'בנינו סוכן תיאום פגישות שמחובר לוואטסאפ וליומן, ושולח תזכורות אוטומטיות.',
      after: 'עלייה של 42% בשיחות שנקבעו, ירידה של 28% בביטולים ושקט לצוות הקבלה.'
    },
    {
      title: 'חנות איקומרס – שיפור המרה',
      before: 'עגלות נטושות, לקוחות חוזרים עם אותן שאלות, תמיכה איטית בשעות עומס.',
      do: 'סוכן שירות ומכירה ראשונית עם חיבור לCRM והזמנה מהירה.',
      after: 'עלייה של 19% בהשלמת רכישות וירידה של 35% בזמן מענה ממוצע.'
    },
    {
      title: 'חברת ייעוץ – ניהול לידים',
      before: 'לידים נופלים בין טפסים, דפי נחיתה ווואטסאפ. חוסר תיעוד.',
      do: 'סוכן לידים שמרכז הכל, מסווג חום ליד ומעדכן את הCRM בזמן אמת.',
      after: 'יותר סדר, יותר שיחות איכותיות, ותחושת שליטה בתהליך המכירה.'
    }
  ]

  return (
    <main className="min-h-screen text-right" dir="rtl">
      <section className="max-w-7xl mx-auto px-4 pt-24 pb-8">
        <h1 className="text-4xl md:text-5xl font-black text-white">סיפורי לקוח</h1>
        <p className="mt-4 text-blue-200/90">מקרי בוחן אמיתיים בסגנון, עם מספרים ותוצאות שמרגישים בשטח.</p>
      </section>
      <section className="max-w-7xl mx-auto px-4 pb-20 grid md:grid-cols-2 gap-6">
        {cases.map((c, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-white text-xl font-bold mb-3">{c.title}</h3>
            <div className="text-blue-100/90 space-y-2">
              <p><span className="text-white/90 font-semibold">לפני:</span> {c.before}</p>
              <p><span className="text-white/90 font-semibold">מה עשינו:</span> {c.do}</p>
              <p><span className="text-white/90 font-semibold">אחרי:</span> {c.after}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  )
}
