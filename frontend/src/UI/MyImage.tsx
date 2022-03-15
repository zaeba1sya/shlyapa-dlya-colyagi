import { IMyImage } from '../../interfaces/interfaces';
import styled from 'styled-components';
import Image from 'next/image';

const MyLogo = ({
  size = 'large',
  text = '',
  type = 'row',
}: IMyImage): JSX.Element => {
  const ImageBlock = styled.div`
    width: auto;
    height: auto;
    position: ${type === 'row' ? 'block' : 'relative'};
  `;

  const ImageText = styled.p`
    width: 100%;
    height: 100%;
    font-size: ${size === 'large' ? '1rem' : '0.5rem'};
    position: ${type === 'row' ? 'block' : 'absolute'};
    inset: 0;
    color: var(--color-white);
  `;

  return (
    <ImageBlock>
      <Image
        src={
          'https://png.pngtree.com/png-vector/20191005/ourmid/pngtree-beautiful-triangle-vector-line-icon-png-image_1795275.jpg'
        }
        width="30px"
        height="30px"
      />
      <ImageText>{text}</ImageText>
    </ImageBlock>
  );
};

export default MyLogo;
