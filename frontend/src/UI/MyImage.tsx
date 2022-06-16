import { IMyImage } from '../../interfaces/interfaces';
import styled from 'styled-components';
import Image from 'next/image';

const ImageBlock = styled.div<{ type?: string }>`
  position: ${(props) => (props.type === 'row' ? 'block' : 'relative')};
  width: 5rem;
  height: 5rem;
`;

const ImageText = styled.p<{ size?: string; type?: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
  font-size: ${(props) => (props.size === 'large' ? '1rem' : '0.5rem')};
  position: ${(props) => (props.type === 'row' ? 'block' : 'absolute')};
  inset: 0;
  color: var(--color-white);
  font-weight: 700;
`;

const MyLogo = ({ text = '' }: IMyImage): JSX.Element => {
  return (
    <ImageBlock>
      <Image
        src={
          'https://png.pngtree.com/png-vector/20191005/ourmid/pngtree-beautiful-triangle-vector-line-icon-png-image_1795275.jpg'
        }
        layout="responsive"
        width={38}
        height={38}
        alt="Logo"
        quality={100}
        priority
      />
      <ImageText>
        <strong style={{ backgroundColor: '#000' }}>{text}</strong>
      </ImageText>
    </ImageBlock>
  );
};

export default MyLogo;
