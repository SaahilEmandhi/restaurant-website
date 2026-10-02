import { reviews } from '../data';
import { motion } from 'framer-motion';

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-offwhite border-t border-prussian/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-coral uppercase tracking-widest text-sm font-medium mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif text-prussian">What They Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white border border-prussian/8 p-10 relative"
            >
              <div className="text-coral text-6xl font-serif absolute top-6 left-6 opacity-30">"</div>
              <p className="text-prussian/80 font-light leading-relaxed mb-8 relative z-10 pt-4">
                {review.text}
              </p>
              <div className="flex items-center gap-4 border-t border-prussian/8 pt-6">
                <div className="w-10 h-10 bg-prussian flex items-center justify-center text-white font-serif text-lg flex-shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-prussian font-medium text-sm">{review.name}</h4>
                  <p className="text-prussian/40 text-xs uppercase tracking-wider">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
