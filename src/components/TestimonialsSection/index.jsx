import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { useContext, useState } from 'react';
import { TestimonialSectionStyles } from './styles';
import SectionTitle from '../SectionTitle';
import Ptext from '../Ptext';
import testimonials from '../../assets/data/testimonials';
import depoimentos from '../../assets/data/depoimentos';
import { LanguageContext } from '../../providers/language';

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = testimonials[activeIndex];
  const slideAtual = depoimentos[activeIndex];

  const { language } = useContext(LanguageContext);

  function handleNext() {
    if (activeIndex >= testimonials.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((oldIndex) => oldIndex + 1);
    }
  }
  function handlePrev() {
    if (activeIndex <= 0) {
      setActiveIndex(testimonials.length - 1);
    } else {
      setActiveIndex((oldIndex) => oldIndex - 1);
    }
  }

  return (
    <TestimonialSectionStyles>
      <div className="container">
        <SectionTitle
          heading={language ? 'Depoimentos' : 'Testimonials'}
          subheading={
            language
              ? 'Veja alguns depoimentos sobre meu trabalho'
              : 'See what our clients say about us'
          }
        />
        <div className="testimonial__wrapper">
          <SwitchTransition>
            <CSSTransition
              key={language ? slideAtual.id : activeSlide.id}
              timeout={300}
              classNames="fade"
            >
              <div className="testimonial__info">
                <div className="testimonial__desc">
                  <Ptext>{language ? slideAtual.desc : activeSlide.desc}</Ptext>
                </div>
                <h2 className="testimonial__name">
                  {language ? slideAtual.name : activeSlide.name}
                </h2>
                <p className="testimonial__title">
                  {language ? slideAtual.title : activeSlide.title}, <br />
                  {language ? slideAtual.org : activeSlide.org}
                </p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="arrows">
          <div
            className="prev"
            onClick={handlePrev}
            role="button"
            tabIndex={0}
            onKeyDown={handlePrev}
          >
            <MdArrowBack />
          </div>
          <div
            className="next"
            onClick={handleNext}
            role="button"
            tabIndex={0}
            onKeyDown={handleNext}
          >
            <MdArrowForward />
          </div>
        </div>
      </div>
    </TestimonialSectionStyles>
  );
}

export default TestimonialsSection;
