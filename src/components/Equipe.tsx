import { equipe } from "./dados";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

export default function Equipe() {
    return (
        <section className="z-10 w-full h-full py-10 flex items-center justify-center">
          <div className="max-w-5xl px-6">
            <AnimatedTestimonials testimonials={equipe} />
          </div>
        </section>
    );
}
