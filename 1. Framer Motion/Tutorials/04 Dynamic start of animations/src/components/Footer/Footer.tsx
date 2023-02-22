import classes from "./Footer.module.scss";
import Logo from "./../../images/logo.svg";

import { footerData } from "./data";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={`${classes.content} container`}>
        <img src={Logo} className={classes.logo} />

        <div className={classes.menu}>
          {footerData.menu.map((menuItem) => (
            <MenuGroup key={menuItem.id} {...menuItem} />
          ))}
        </div>

        <div className={classes.socials}>
          {footerData.socials.map(({ id, url, image }) => (
            <a key={id} href={url}>
              <img src={image} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

interface ILink {
  text: string;
  url: string;
}

interface MenuGroupProps {
  groupTitle: string;
  links: ILink[];
}

const MenuGroup = ({ groupTitle, links }: MenuGroupProps) => (
  <div className={classes.menuGroup}>
    <h4>{groupTitle}</h4>
    {links.map((link) => (
      <a key={link.text} href={link.url}>
        {link.text}
      </a>
    ))}
  </div>
);

export default Footer;
