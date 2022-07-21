import { SectionTitleStyle } from './styles';

function SectionTitle({ subheading = 'subHead', heading = 'Head' }) {
  return (
    <SectionTitleStyle className="section-title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}

export default SectionTitle;
