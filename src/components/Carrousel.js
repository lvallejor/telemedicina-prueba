import React from "react";

const Carrousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide my-5"
      data-bs-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
        ></li>
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://s3-alpha-sig.figma.com/img/39c8/7c4a/5b62c54c5f600552061a6a9794027226?Expires=1610323200&Signature=f11aje72szNuOuFJwDo9ZVyn3IlyQ-n-ejEbdw~QR0OWgrSt-XKpwc3bsT4aDBsASHHkI3ztF3RIgoyx~hX5LbeLb8CgdIpPDdDEoTCcZW-xKDcGNJfGlaVlCjS92ZNEIb-ZI2n037s-xj1bEQKqxP9ud3-YdSbsZopVnEUkrQyGAuoxa-lwGeuD4W6OP3kjgiWbsxm1h8cFvKtoWfWzYEkkcMn2dIgwG96zt31tA9GB4WIlqfF1Bx2wIMYx7Otd8Q9npGZ8nxjhw93x75vrsI-kfVmyXLepCHiTPGs7iLVCViVoz4JD37p7fOrPVkBVBJV2MyLYD96oF04~osr~pQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            class="d-block w-100"
            alt="telemedicina"
          />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
        <div class="carousel-item">
          <img
            src="https://s3-alpha-sig.figma.com/img/39c8/7c4a/5b62c54c5f600552061a6a9794027226?Expires=1610323200&Signature=f11aje72szNuOuFJwDo9ZVyn3IlyQ-n-ejEbdw~QR0OWgrSt-XKpwc3bsT4aDBsASHHkI3ztF3RIgoyx~hX5LbeLb8CgdIpPDdDEoTCcZW-xKDcGNJfGlaVlCjS92ZNEIb-ZI2n037s-xj1bEQKqxP9ud3-YdSbsZopVnEUkrQyGAuoxa-lwGeuD4W6OP3kjgiWbsxm1h8cFvKtoWfWzYEkkcMn2dIgwG96zt31tA9GB4WIlqfF1Bx2wIMYx7Otd8Q9npGZ8nxjhw93x75vrsI-kfVmyXLepCHiTPGs7iLVCViVoz4JD37p7fOrPVkBVBJV2MyLYD96oF04~osr~pQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            class="d-block w-100"
            alt="telemedicina"
          />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
        <div class="carousel-item">
          <img
            src="https://s3-alpha-sig.figma.com/img/39c8/7c4a/5b62c54c5f600552061a6a9794027226?Expires=1610323200&Signature=f11aje72szNuOuFJwDo9ZVyn3IlyQ-n-ejEbdw~QR0OWgrSt-XKpwc3bsT4aDBsASHHkI3ztF3RIgoyx~hX5LbeLb8CgdIpPDdDEoTCcZW-xKDcGNJfGlaVlCjS92ZNEIb-ZI2n037s-xj1bEQKqxP9ud3-YdSbsZopVnEUkrQyGAuoxa-lwGeuD4W6OP3kjgiWbsxm1h8cFvKtoWfWzYEkkcMn2dIgwG96zt31tA9GB4WIlqfF1Bx2wIMYx7Otd8Q9npGZ8nxjhw93x75vrsI-kfVmyXLepCHiTPGs7iLVCViVoz4JD37p7fOrPVkBVBJV2MyLYD96oF04~osr~pQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            class="d-block w-100"
            alt="telemedicina"
          />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
        <div class="carousel-item">
          <img
            src="https://s3-alpha-sig.figma.com/img/39c8/7c4a/5b62c54c5f600552061a6a9794027226?Expires=1610323200&Signature=f11aje72szNuOuFJwDo9ZVyn3IlyQ-n-ejEbdw~QR0OWgrSt-XKpwc3bsT4aDBsASHHkI3ztF3RIgoyx~hX5LbeLb8CgdIpPDdDEoTCcZW-xKDcGNJfGlaVlCjS92ZNEIb-ZI2n037s-xj1bEQKqxP9ud3-YdSbsZopVnEUkrQyGAuoxa-lwGeuD4W6OP3kjgiWbsxm1h8cFvKtoWfWzYEkkcMn2dIgwG96zt31tA9GB4WIlqfF1Bx2wIMYx7Otd8Q9npGZ8nxjhw93x75vrsI-kfVmyXLepCHiTPGs7iLVCViVoz4JD37p7fOrPVkBVBJV2MyLYD96oF04~osr~pQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            class="d-block w-100"
            alt="telemedicina"
          />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
  );
};

export default Carrousel;
