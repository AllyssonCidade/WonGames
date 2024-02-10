import Link from 'next/link'

import Heading from '../Heading'
import Logo from '../Logo'
import * as S from './styles'


const Footer = () => (
  <S.Wrapper>
    <Logo color='black' />
    <S.Content>
      <S.Column>
        <Heading color='black' size='small' lineBottom lineColor='secondary'>
          Contact
        </Heading>
        <a href='mailto:allyssoncidade@gmail.com'>allyssoncidade@gmail.com</a>
        <a href='tel:+55 71 997248724'>+55 71 997248724</a>
      </S.Column>

      <S.Column>
        <Heading color='black' lineColor='secondary' lineBottom size='small'>
          Follow us
        </Heading>

        <nav aria-labelledby='social media'>
          <a href='https://www.instagram.com/allysson__costa'
          target='_blank'
          rel='noopener noreferrer'>  
            Instagram
          </a>

          <a href='https://www.linkedin.com/in/allysson-cidade'
          target='_blank'
          rel='noopener noreferrer'>
            Linkedin
          </a>

          <a href= 'https://github.com/AllyssonCidade'
          target='_blank'
          rel='noopener noreferrer'>
            Github
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color='black' lineColor='secondary' lineBottom size='small'>
          Links
        </Heading>

        <nav aria-labelledby='footer resources'>
          <Link href="/">
            Home
          </Link>
          <Link href="/games">
            Store
          </Link>
          <Link href="/search">
            Buscar
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-labelledby='footer-contact'>
        <Heading color='black' lineColor='secondary' lineBottom size='small'>
          Location
        </Heading>
        <span>Lorem ipum dolor sit.</span>
        <span>Lorem ipum</span>
        <span>Lorem,  ipum dolor.</span>
      </S.Column>

      <S.Copyright>Won Games 2024 by: AllyssonCidade © All rights reserved.</S.Copyright>


    </S.Content>
  </S.Wrapper>
)

export default Footer