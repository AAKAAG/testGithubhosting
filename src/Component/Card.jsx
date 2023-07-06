import React from "react";
import "./Card.css"

function Card(){
return  <div class="card">
<div class="ring">
  <div class="image">
    <img src="https://blogger.googleusercontent.com/img/a/AVvXsEjaggay6iya19-NBkZvy-0_ux_OAQQdTnDmKdixI3UgHcv7ZqAjyzl2LVhhD4C4PQg4rcgOOQEEvNG_zF5flmLk_stB8e4UZjPb3yee5ePFr8fnKRBAGscW0YR6OSwpnMIuz-wFQRMYm61vOzmc8c8fLj5ZGhoFhAU-DF0BxJcwia-a_5KE0DWrB2Yy1g=s320" alt=""/>
  </div>
</div>
<div class="details">
  <div class="presonal">
    <h2>InCoder</h2>
    <p>Designer & Developer</p>
  </div>
  <div class="social">
    <button class="icon">
      <i class="fab fa-facebook"></i>
    </button>
    <button class="icon">
      <i class="fab fa-whatsapp"></i>
    </button>
    <button class="icon">
      <i class="fab fa-instagram"></i>
    </button>
    <button class="icon">
      <i class="fab fa-twitter"></i>
    </button>
  </div>
  <div class="action">
    <button class="InBtn">Message</button>
    <button class="InBtn">Subscribe</button>
  </div>
</div>
</div>

}

export default Card;