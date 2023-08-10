export function Footer() {
  return (
    <>
      <section>
        <h3>Subscribe to our newsletter</h3>
        <form>
          <input type="text" placeholder="Full name" />
          <input type="email" placeholder="Email" />
        </form>
        <button>
          <a href="#">Sign up</a>
        </button>
      </section>
      <article className="quicklinks">
        <h4>Quick links</h4>
        <a href="#">Hjem</a>
        <a href="#">Om os</a>
        <a href="#">Prisliste</a>
        <a href="#">Booking</a>
        <a href="#">Newsletter</a>
        <a href="#">Kontakt</a>
        <h4>Follow us</h4>
        <a href="#">
          <img src="" alt="" />
        </a>
        <a href="#">
          <img src="" alt="" />
        </a>
        <a href="#">
          <img src="" alt="" />
        </a>
      </article>
      <article className="findus">
        <h4>Find us</h4>
        <p>
          WhatsApp <br />
          +45 23 43 43 43
        </p>
        <p>
          Telefonnummer <br />
          +45 58 84 84 84
        </p>
        <p>
          Adresse
          <br />
          Supergatan 56 <br />
          Oslo, Norway
        </p>
      </article>
    </>
  );
}
