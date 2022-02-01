import React, { useState } from 'react';
import { 
  Container, 
  Row, 
  Newsletter, 
  Content,
  Links,
  TitleP, 
  Form,
  InputEmail, 
  FormInfo, 
  HeadingH5, 
  Separator, 
  Copyright,
  LinkList,
  LinkItem,
  LinkPage,
  Media,
  HeadingH2,
  HeadingSpan,
  SocialList,
  SocialItem,
  SocialLink
} from './Styles';
import { Button } from '../Button/Button';
import { Wrapper } from '../Wrapper/Wrapper';
import {
  AiOutlineFacebook,
  AiOutlineYoutube,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram
} from 'react-icons/ai';


const Footer = () => {

  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    console.log(email);
  }

  return (
    <Container>
      <Wrapper>
        <Row>
          <Newsletter
            data-sal="slide-right"
            data-sal-duration="1500"
            data-sal-delay="300"
          >
            <HeadingH5>Newsletter</HeadingH5>
            <Form onSubmit={handleSubmit}>
              <TitleP>Subscribe Our Newsletter</TitleP>
              <InputEmail
                type="email"
                name="email"
                onChange={e => setEmail(e.target.value)}
                placeholder="Email Address"
                required
              />
              <Button 
                type="submit"
                block="true"
                white="true"
              >
                Submit
              </Button>
              <FormInfo>
                Get started for 1 Month free trial No Purchace required.
              </FormInfo>
            </Form>
          </Newsletter>
          <Content
            data-sal="slide-left"
            data-sal-duration="1500"
            data-sal-delay="300"
          >
            <Links>
              <LinkList>
                <HeadingH5>Pages</HeadingH5>
                <LinkItem>
                  <LinkPage href="/">
                    About Us
                  </LinkPage>
                </LinkItem>
                <LinkItem>
                  <LinkPage href="/">
                    Company
                  </LinkPage>
                </LinkItem>
                <LinkItem>
                  <LinkPage href="/">
                    Services
                  </LinkPage>
                </LinkItem>
                <LinkItem>
                  <LinkPage href="/">
                    Portfolio
                  </LinkPage>
                </LinkItem>
                <LinkItem>
                  <LinkPage href="/">
                    News
                  </LinkPage>
                </LinkItem>
              </LinkList>
              <LinkList>
                <HeadingH5>Services</HeadingH5>
                <LinkItem>
                  <LinkPage href="/">
                    Careers
                  </LinkPage>
                </LinkItem>
                <LinkItem>
                  <LinkPage href="/">
                    Documentation
                  </LinkPage>
                </LinkItem>
                <LinkItem>
                  <LinkPage href="/">
                    Team
                  </LinkPage>
                </LinkItem>
              </LinkList>
              <LinkList>
                <HeadingH5>FAQ</HeadingH5>
                <LinkItem>
                  <LinkPage href="/">
                    Terms of Policy
                  </LinkPage>
                </LinkItem>
                <LinkItem>
                  <LinkPage href="/">
                    Support
                  </LinkPage>
                </LinkItem>
              </LinkList>
            </Links>
            <Media>
              <HeadingH2>Gatsby<HeadingSpan>Theme</HeadingSpan></HeadingH2>
              <SocialList>
                <SocialItem>
                  <SocialLink>
                    <AiOutlineFacebook />
                  </SocialLink>
                </SocialItem>
                <SocialItem>
                  <SocialLink>
                    <AiOutlineYoutube />
                  </SocialLink>
                </SocialItem>
                <SocialItem>
                  <SocialLink>
                    <AiOutlineLinkedin />
                  </SocialLink>
                </SocialItem>
                <SocialItem>
                  <SocialLink>
                    <AiOutlineGithub />
                  </SocialLink>
                </SocialItem>
                <SocialItem>
                  <SocialLink>
                    <AiOutlineInstagram />
                  </SocialLink>
                </SocialItem>
              </SocialList>
            </Media>
          </Content>
        </Row>
        <Separator />
        <Copyright
          data-sal="slide-up"
          data-sal-duration="1500"
          data-sal-delay="300"
        >
          &copy; GatsbyJS Theme | All Rights Reserved
        </Copyright>
      </Wrapper>
    </Container>
  )
}

export default Footer;