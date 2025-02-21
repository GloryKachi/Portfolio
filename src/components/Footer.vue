
<script>
import { ref } from "vue";  // Using Vue 3 Composition API

export default {
  setup() {
    const email = ref("");   // Stores the email input
    const loading = ref(false);  // For button loading state

    const subscribe = async () => {
      if (!email.value) {
        alert("Please enter a valid email address.");
        return;
      }

      loading.value = true;

      try {
        // Send the email to an API (replace with your backend or third-party service)
        const response = await fetch("https://your-api.com/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email.value }),
        });

        if (response.ok) {
          alert("Subscribed successfully!");
          email.value = "";  // Clear input after success
        } else {
          alert("Subscription failed. Try again.");
        }
      } catch (error) {
        alert("Error: " + error.message);
      } finally {
        loading.value = false;
      }
    };

    return { email, subscribe, loading };
  }
};
</script>





<template>
  <footer class="footer">
    <div class="footer-content">
      <v-col sm="12" md="4" class="first-box">
        <div class="logo-div">
          <p class="name">Kachi</p>
        </div>
      </v-col>
      <v-col sm="6" md="2" class="second-box">
        <p class="header">Contact Information</p>
        <a href="https://mail.google.com/mail/?view=cm&to=gloryihueze10@gmail.com" target="_blank" rel="noopener noreferrer">
          Email Me
        </a>

        <a href="https://www.linkedin.com/in/glorykachiihueze/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>

       <a href="https://github.com/GloryKachi" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
      </v-col>
      <v-col sm="6" md="2" class="third-box">
        <p class="header">Explore</p>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-link to="/about">About Me</router-link>
      </v-col>
      <v-col sm="6" md="2" class="third-box">
        <p class="header">Resources</p>
        <router-link to="#">Developer Resources</router-link>
        <router-link to="#">F.A.Q</router-link>
      </v-col>
      <v-col sm="6" md="2" class="third-box">
        <p class="header">Newsletter</p>
        <p class="box-text">Stay updated with my latest projects</p>
        <form class="newsletter-form" @submit.prevent="subscribe">
          <v-text-field
              v-model="email"
              type="email"
              placeholder="Email Address"
              class="email-box"
              hide-details
              dense
              outlined
              required
          />
          <v-btn type="submit" class="mt-4" :loading="loading">Subscribe</v-btn>
        </form>
      </v-col>

    </div>
    <div class="right-reserved">
      <v-divider class="my-5"></v-divider>
      <div class="right-reserved-inner">
        All Rights Reserved &copy; 2025
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 9.2rem 11rem 0 9.2rem;
  min-height: 60vh;
  background-color: #0732ef;
  position: relative;

  @media screen and (max-width: 1264px) {
    padding: 2rem;
  }

  @media screen and (max-width: 1024px) {
    padding: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0.8rem;
  }

  @media screen and (max-width: 360px) {
    padding: 0.3rem;
  }
  .name{
    font-family: "Inter", sans-serif;
    font-size: 5rem;
    font-weight: 700;
    line-height: 36px;
    text-align: left;
    color: #ffffff;
  }

  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    @media (max-width: 767px) {
      flex-direction: column;
    }
  }

  .header {
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 36px;
    text-align: left;
    color: #ffffff;
  }

  .first-box .logo-div {
    padding-bottom: 16px;
    padding-top: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .second-box a,
  .third-box a {
    display: block;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    color: #ffffff;
    margin-top: 10px;
    font-weight: 400;
    line-height: 36px;
    text-align: left;

    @media screen and (max-width: 768px) {
      font-size: 14px;
      margin-top: 15px;
    }
  }


  .box-text {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    margin: 18px 0;
    font-weight: 400;
    line-height: 23px;
    text-align: left;
    color: #ffffff;
  }

  .newsletter-form {
    width: 100%;

    input {
      border: 1px solid #ffffff;
      padding: 10px;
      height: 42px;
      font-size: 12px;
      border-radius: 5px;
      color: #ffffff;

      @media (max-width: 960px) {
        width: 180px;
      }
    }

    input:focus {
      outline: 1px solid #ffffff;
      border: none;
    }

    button {
      height: 40px;
      width: 124px;
      background: #ffffff;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
      border-radius: 10px;
      color: #0732ef;
      font-family: "Inter", sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      text-align: center;
      text-transform: none;
    }
  }

  .right-reserved {
    margin-top: 10rem;
    width: 100%;
    border-top: 1px solid #ffffff;

    .right-reserved-inner {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      color: #ffffff;
      font-family: "Inter";
      font-size: 14px;
      font-weight: 400;
      line-height: 36px;
      padding-right: 5rem;

      @media screen and (max-width: 768px) {
        padding-right: 0;
      }
    }
  }
}
</style>