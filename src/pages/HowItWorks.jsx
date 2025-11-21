import { motion } from 'framer-motion'

export default function HowItWorks() {
  const steps = [
    { title: 'חיבור לוואטסאפ ביזנס', body: 'מגדירים גישה מאובטחת לשיחות, כולל תגיות, העברה לצוות וזיהוי אוטומטי של כוונה.' },
    { title: 'אוטומציה ותזמונים', body: 'חיבור למערכות תהליכים כדי לשלוח תזכורות, לעדכן סטטוסים ולהפעיל טריגרים.' },
    { title: 'קישור ל־CRM', body: 'פתיחת לידים, עדכוני שלבים, יצירת משימות ותיעוד מלא.' },
    { title: 'אינטגרציות לאתר ודפי נחיתה', body: 'קולט כל פנייה מהאתר והופך אותה לשיחה חכמה שמקדמת מכירה.' },
  ]

  return (
    <main className="min-h-screen text-right" dir="rtl">
      <section className="max-w-7xl mx-auto px-4 pt-24 pb-8">
        <h1 className="text-4xl md:text-5xl font-black text-white">איך זה עובד</h1>
        <p className="mt-4 text-blue-200/90">הצד הטכני מוסבר בפשטות – בלי מילים כבדות. התוצר: מערכת אמינה שעובדת לבד.</p>
      </section>
      <section className="max-w-7xl mx-auto px-4 pb-20 grid md:grid-cols-2 gap-6">
        {steps.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-white text-xl font-bold mb-2">{s.title}</h3>
            <p className="text-blue-100/90">{s.body}</p>
          </motion.div>
        ))}
      </section>
    </main>
  )
}
