import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CountdownTimer = () => {
  // const weddingDate = new Date("2025-11-13T00:00:00").getTime();
  const weddingDate = new Date(2025, 10, 13, 21, 24, 0).getTime();  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-script text-5xl md:text-6xl text-secondary mb-4">
            Count Every Moment
          </h2>
          <p className="font-elegant text-lg text-muted-foreground">
            Until we say "I do"
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg shadow-lg p-6 border border-border"
            >
              <div className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-2">
                {unit.value.toString().padStart(2, "0")}
              </div>
              <div className="font-elegant text-sm md:text-base text-muted-foreground uppercase tracking-wide">
                {unit.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
