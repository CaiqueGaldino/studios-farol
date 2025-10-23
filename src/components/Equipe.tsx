import { equipe } from "./dados";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

export default function Equipe() {
    return (
        <section className="z-10 w-full bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 py-20 flex justify-center">
          <div className="max-w-5xl px-6">
            <AnimatedTestimonials testimonials={equipe} />
          </div>
        </section>
    );
}
