import Image from 'next/image';
import styled from 'styled-components';
import { Wrapper, Container } from '../../src/ContentManager/Content';
import MyLogo from '../../src/UI/MyImage';
import image from '../../public/assets/triangle.png';

const JumbotronCustom = (): JSX.Element => {
  return (
    <Wrapper
      image={
        'url(https://i.pinimg.com/originals/d1/cd/66/d1cd66d2391260f1793464203866f94d.png)'
      }
    >
      <section>
        <div>
          <div>
            <div>
              <MyLogo size={'small'} text={'CodeShop'} />
            </div>
            <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              officia.
            </h6>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              voluptate est quo, cupiditate distinctio sequi nesciunt quod
              deleniti voluptatem cumque odio vitae quae animi, debitis ut
              minima saepe laborum cum.
            </p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default JumbotronCustom;
