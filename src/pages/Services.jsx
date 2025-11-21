import { motion } from 'framer-motion'

export default function Services() {
  const agents = [
    {
      title: 'סוכן לידים',
      desc: 'קולט פניות מכל מקור, משיב מיד, שואל שאלות מקדימות ומסווג חום ליד.',
      connect: 'טפסים, אתר, דפי נחיתה, וואטסאפ',
      impact: 'יותר פניות איכותיות ופחות נזל בין הכיסאות.'
    },
    {
      title: 'סוכן תמיכה ושירות',
      desc: 'מענה מהיר לשאלות חוזרות, פתיחת קריאות ועדכון סטטוסים ללקוח.',
      connect: 'וואטסאפ, Helpdesk, מסדי ידע',
      impact: 'לקוחות מרוצים וזמן צוות שמתפנה למשימות מורכבות.'
    },
    {
      title: 'סוכן מכירה ראשונית',
      desc: 'מציג הצעה ראשונית, מתאם ציפיות ומעביר לשיחה אנושית בזמן נכון.',
      connect: 'CRM, מערכת חיוב, לוח הצעות',
      impact: 'הגדלת יחס ההמרה ושיחות טובות יותר לצוות המכירות.'
    },
    {
      title: 'סוכן תיאום פגישות',
      desc: 'בודק זמינות, מציע חלופות, שולח תזכורות וסיכומי שיחה.',
      connect: 'Calendars, CRM, וואטסאפ',
      impact: 'יומן מסודר ופחות ביטולים.'
    },
  ]

  return (
    <main className="min-h-screen text-right" dir="rtl">
      <section className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl md:text-5xl font-black text-white">שירותים – סוכני AI לעסקים</h1>
        <p className="mt-4 text-blue-200/90">הסוכן הנכון נבנה סביב התהליך והמערכות שלכם. כך הוא מרגיש כמו חלק טבעי מהצוות.</p>
      </section>
      <section className="max-w-7xl mx-auto px-4 pb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((a, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-white text-xl font-bold mb-2">{a.title}</h3>
            <p className="text-blue-100/90 mb-2">{a.desc}</p>
            <p className="text-blue-200/80 text-sm">חיבורים: {a.connect}</p>
            <p className="text-blue-200/80 text-sm">תוצאה: {a.impact}</p>
          </motion.div>
        ))}
      </section>
    </main>
  )
}
