import { ImHtmlFive2 } from 'react-icons/im';
import { FaCss3Alt, FaReact, FaGithub, FaTelegramPlane } from 'react-icons/fa';
import { BsFiletypeScss, BsFiletypeJsx, BsGit } from 'react-icons/bs';
import { TbBrandJavascript } from 'react-icons/tb';
import { SiMui, SiTypescript, SiReactrouter } from 'react-icons/si';
import { GiNewspaper } from 'react-icons/gi';
import { AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';

import './footer.scss';

const techStack = [ImHtmlFive2, FaCss3Alt, BsFiletypeScss, FaReact, BsFiletypeJsx, SiTypescript, TbBrandJavascript, BsGit, SiMui, SiReactrouter];
const contacts = [
  {
    'Icon': FaGithub, 
    href: 'https://github.com/AnyaLyaLya/news-wave', 
    title: 'GitHub'
  }, 
  {
    'Icon': FaTelegramPlane, 
    href: 'https://t.me/annalatusha', 
    title: 'Telegram'
  },
  {
    'Icon': AiOutlineMail, 
    href: 'mailto:annlatusha@gmail.com', 
    title: 'E-mail'
  },
  {
    'Icon': AiFillLinkedin, 
    href: 'https://www.linkedin.com/in/anna-latusha-03298a278/', 
    title: 'Linkedin'
  },
];

export const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='footer__list'>
        <li className='footer__list--item'>
          <h2 className='footer__list--item--title'>
            News Wave
          </h2>

          <p className='footer__list--item--text'>
            This is a small React project that retrieves and displays a list of items from an API endpoint. Each item has a title and description. It supports pagination, error handling, and unit tests. It can be found in my {' '} 
            <a href="https://drive.google.com/file/d/1xO4N4TvyzQZhSIOWJJ2OlyVEuenbKDl9/view?usp=drive_link" className='footer__list--item--subtitle'>
              CV
            </a>
            .
          </p>
        </li>

        <li className='footer__list--item'>
          <h2 className='footer__list--item--title'>
            Contact
          </h2>

          <ul className='footer__contact-list'>
            {contacts.map(({Icon, href, title }, index) => (
              <li key={index} className='footer__contact-list--item'>
                <Icon size={24} />

                <a href={href}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </li>

        <li className='footer__list--item'>
          <h2 className='footer__list--item--title'>
            Tech Stack
          </h2>

          <ul className='footer__stack-list'>
            {techStack.map((Icon, index) => (
              <li key={index} className='footer__stack-list--item'>
                <Icon size={24} />
              </li>
            ))}
          </ul>   
        </li>

        <li className='footer__list--item'>
          <h2 className='footer__list--item--title'>
            Source & Usage Terms
          </h2>

          <ul className='footer__contact-list'>
           
              <li className='footer__contact-list--item'>
                <GiNewspaper size={40} />

                <a href='https://newsapi.org/docs' className='footer__contact-list--item--link'>
                  News API
                </a>
              </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};