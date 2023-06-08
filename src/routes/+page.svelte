<script>
  const weddingDate = new Date('June 10, 2023 09:00:00');
</script>

<nav class="mobile-menu bg--colored">
  <button class="mobile-menu__close" />
  <ul class="navigation__list mobile-navigation__list">
    <li class="navigation__item mobile-navigation__item">
      <a class="mobile-navigation__link" href="#home">Home</a>
    </li>
    <li class="navigation__item mobile-navigation__item">
      <a class="mobile-navigation__link" href="#couple">Happy couple</a>
    </li>
    <li class="navigation__item mobile-navigation__item">
      <a class="mobile-navigation__link" href="#venues">Venues</a>
    </li>
  </ul>
</nav>
<header class="header">
  <div class="container">
    <nav class="header__nav">
      <div class="logo">
        <img class="img-responsive logo-image" src="./logo.jpeg" alt="Logo" />
      </div>
      <ul class="header__menu">
        <li class="header__menu-item">
          <a class="header__menu-link" href="index.html">Home</a>
        </li>
        <li class="header__menu-item">
          <a class="header__menu-link" href="#couple">Happy couple</a>
        </li>
        <li class="header__menu-item">
          <a class="header__menu-link" href="#venues">Venues</a>
        </li>
      </ul>
      <div class="header__user-actions">
        <div class="user-action user-action--hidden">
          <a class="mobile-menu-btn" href="#">Menu</a>
        </div>
        <div class="user-action">
          <a class="rvsp-btn" href="#rvsp">Rvsp</a>
        </div>
      </div>
    </nav>
    <div class="header__content">
      <div class="header__title-wrapper">
        <h1 class="header__title">Francis Oribi</h1>
        <span class="header__subtitle"
          >Are getting married <br />
          June 10, 2023</span
        >
      </div>
    </div>
    <div class="header__countdown">
      <p class="countdown__title text--colored">
        Countdown <strong>to</strong> Wedding Ceremony
      </p>
      <div class="countdown__block countdown">
        <div class="countdown__element countdown__days border--colored">
          <span class="count days text--colored">0</span><span
            class="label days_ref text--colored">days</span
          >
        </div>
        <div class="countdown__element countdown__hours border--colored">
          <span class="count hours text--colored">0</span><span
            class="label hours_ref text--colored">hours</span
          >
        </div>
        <div class="countdown__element countdown__minutes border--colored">
          <span class="count minutes text--colored">0</span><span
            class="label minutes_ref text--colored">minutes</span
          >
        </div>
        <div class="countdown__element countdown__seconds border--colored">
          <span class="count seconds text--colored">0</span><span
            class="label seconds_ref text--colored">seconds</span
          >
        </div>
      </div>
    </div>
  </div>
</header>
<section class="couple" id="couple">
  <div class="container">
    <h2 class="s-title text--colored">Happy Couple</h2>
    <div class="couple__groom">
      <div class="couple__image couple__image-groom--left border--colored" />
      <div class="couple__text couple__text--right">
        <div class="couple__text-head text--colored">
          <h3 class="couple__title text--colored">Francis</h3>
          <span class="couple__subtitle text--colored">the Groom</span>
        </div>
        <div class="couple__text-body">
          <p class="couple__descr">
            I bumped into Oribi again 7 years later in a club, she had literally
            just returned from a holiday and was out celebrating her birthday. I
            was back from sea for 4 days before I left again for a few months.
            The probability that this would happen is crazy and to top it all
            off, she remembered my name.
          </p>
          <p class="couple__descr">
            I got this amazing feeling as soon as I saw her and it lives with me
            every day and I promise that the bunny outfit had nothing to do with
            it. Needless to say it turned into a very expensive night out
          </p>
        </div>
      </div>
    </div>
    <div class="couple__bride">
      <div class="couple__image couple__image-bride--right border--colored" />
      <div class="couple__text couple__text--left">
        <div class="couple__text-head text--colored">
          <h3 class="couple__title text--colored">Oribi</h3>
          <span class="couple__subtitle text--colored">the Bride</span>
        </div>
        <div class="couple__text-body">
          <p class="couple__descr">
            Francis and I have absolutely no hobbies or interests in common at
            all! I fact, we're pretty much complete opposites! But who needs
            stuff in common? It's over-rated!
          </p>
          <p class="couple__descr">
            More importantly, we have the same life goals, the same priorities,
            the same attitudes to people and money and work and the same sense
            of what's right and wrong in life. We say that we're soul mates and
            over the last 7 years I feel like we've become adults together and
            somehow shaped each other into becoming better people.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="venues" id="venues">
  <div class="container">
    <h2 class="s-title text--colored">Venues</h2>
    <div class="container-sm">
      <div class="venues__ceremony">
        <div class="ceremony__card venues__card border--colored">
          <div class="venues__card-head text--colored">
            <h3 class="venues__card-title text--colored">Wedding Ceremony</h3>
          </div>
          <div class="venues__card-info">
            <div class="venues__card-block">
              <span class="venues__card-label mrg">When</span>
              <time class="venues__card-data">11:30, May 16th, 2020</time>
            </div>
            <div class="venues__card-block">
              <span class="venues__card-label">Where</span><span
                class="venue__card-data"
                >Saint Thomas Church Fifth Avenue 1 W 53rd St, New York, NY
                10019</span
              >
            </div>
          </div>
          <a class="venues__card-link" href="#">See on map</a>
        </div>
        <div class="address__map-container--left address__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.3390713304057!2d-1.9904844228636231!3d52.52729913568848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48709808efcca419%3A0x9d1674db5bcbe894!2sSandwell%20General%20Hospital!5e0!3m2!1sen!2suk!4v1686141387213!5m2!1sen!2suk"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
    <div class="container-sm">
      <div class="venues__reception">
        <div class="reception__card venues__card border--colored">
          <div class="venues__card-head text--colored">
            <h3 class="venues__card-title text--colored">Wedding Ceremony</h3>
          </div>
          <div class="venues__card-info">
            <div class="venues__card-block">
              <span class="venues__card-label mrg">When</span>
              <time class="venues__card-data">11:30, May 16th, 2020</time>
            </div>
            <div class="venues__card-block">
              <span class="venues__card-label">Where</span><span
                class="venue__card-data"
                >Saint Thomas Church Fifth Avenue 1 W 53rd St, New York, NY
                10019</span
              >
            </div>
          </div>
          <a class="venues__card-link" href="#">See on map</a>
        </div>
        <div class="address__map-container--right address__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.3390713304057!2d-1.9904844228636231!3d52.52729913568848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48709808efcca419%3A0x9d1674db5bcbe894!2sSandwell%20General%20Hospital!5e0!3m2!1sen!2suk!4v1686141387213!5m2!1sen!2suk"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </div>
</section>
<section class="rvsp" id="rvsp">
  <div class="container">
    <div class="rvsp__forrm-wrap">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdscdH5l-fLLDZYRknOWF7MqvsPpWkk2JTMqsWr4jPbb6glIg/viewform?embedded=true"
        width="600"
        height="600"
        frameborder="0"
        marginheight="0"
        marginwidth="0">Loading…</iframe
      >
    </div>
  </div>
</section>
<section class="support">
  <div class="container">
    <div class="support__title-wrap">
      <h2 class="support__title">Want to support us?</h2>
    </div>
    <div class="support__btn-wrap">
      <span class="support__btn-sescr">You can make a donation here</span>
      <button class="btn support__btn bg--colored" type="button">Donate</button>
    </div>
  </div>
</section>
<footer class="footer">
  <div class="footer__content">
    <span class="footer__name jeremy text--colored">Francis</span>
    <div class="footer__image">
      <img src="./footer-image.jpeg" alt="Francis and Oribi" />
    </div>
    <span class="footer__name diana text--colored">Oribi</span>
  </div>
</footer>
