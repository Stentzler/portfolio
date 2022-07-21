import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import Ptext from '../Ptext';
import { ItemStyles } from './styles';

function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = 'Web Design',
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. optio sapiente recusandae id assumenda magni?',
}) {
  return (
    <ItemStyles>
      <div className="servicesItem__icon">{icon}</div>
      <div className="servicesItem__title">{title}</div>
      <Ptext>{description}</Ptext>
    </ItemStyles>
  );
}

export default ServicesSectionItem;
