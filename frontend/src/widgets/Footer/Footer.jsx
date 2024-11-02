import cl from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={cl.footer}>
      <div className="footer__container">
        <p className={cl.footer__copyright}>
          <a href="https://github.com/FreightDH" rel="noreferrer" target="blank">
            FreightDH
          </a>{' '}
          © 2024 Все права защищены
        </p>
      </div>
    </footer>
  );
};
