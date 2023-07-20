<template>
  <main>
    <section>
      <p class="uppercase">One-stop solution for product quality</p>
      <h2>Build amazing products with UnbugQA</h2>
      <p>
        Our integrated solutions empower startups to build high-quality products
        by combining QA testing, user testing, recruitment assistance, and staff
        training
      </p>
      <div>
        <nuxt-link to="/">Talk to sales</nuxt-link>
        <nuxt-link to="/"> Learn about us </nuxt-link>
      </div>
    </section>
    <section>
      <h2>Hire Expert QA Engineers</h2>
      <p>
        Save time without compromising quality by hiring from our pool of pre
        screened expert Software Quality Assurance Engineers.
      </p>
      <ul>
        <li>
          <nuxt-img />
          <span>Get matched within 72 hours</span>
        </li>
        <li>
          <nuxt-img />
          <span>Diverse and inclusive talent pool from 20+ countries</span>
        </li>
        <li>
          <nuxt-img />
          <span>Flexible payment options</span>
        </li>
      </ul>
      <div>
        <nuxt-link to="/">Hire a QA Engineer</nuxt-link>
        <nuxt-link to="/">Apply to join talent pool</nuxt-link>
      </div>
      <nuxt-img />
    </section>
    <section>
      <p>New</p>
      <h2>Full-stack testing services</h2>
      <p>
        Our QA testing services guarantee every code you ship to production has
        been tested abd documented.
      </p>
      <ul>
        <li>
          <nuxt-img />
          <span>Flexible plans designed to scale with your business</span>
        </li>
        <li>
          <nuxt-img />
          <span>Dedicated project manager</span>
        </li>
        <li>
          <nuxt-img />
          <span>Skilled QA experts</span>
        </li>
      </ul>
      <div>
        <nuxt-link to="/">Request QA service</nuxt-link>
        <nuxt-link to="/">Get a free QA Audit</nuxt-link>
      </div>
      <nuxt-img />
    </section>
    <section>
      <h2>User testing and feedback</h2>
      <p>
        Take the guesswork out of your product, design and marketing decisions
        with our all-inclusive user testing and feedback tool.
      </p>
      <ul>
        <li>
          <nuxt-img />
          <span>Run unlimited user tests</span>
        </li>
        <li>
          <nuxt-img />
          <span>Get real-time insights</span>
        </li>
        <li>
          <nuxt-img />
          <span>Documents findings with notes</span>
        </li>
      </ul>
      <div>
        <nuxt-link to="/">Try our Beta</nuxt-link>
      </div>
      <nuxt-img />
    </section>
    <section>
      <h2>Become a Job-ready QA Engineer</h2>
      <p>
        Invest in your future with our QA Engineering program and become a
        valuable asset to any industry worldwide.
      </p>
      <ul>
        <li>
          <nuxt-img />
          <span>Comprehensive curriculum</span>
        </li>
        <li>
          <nuxt-img />
          <span>Expert mentor</span>
        </li>
        <li>
          <nuxt-img />
          <span>100% remote</span>
        </li>
      </ul>
      <div>
        <nuxt-link to="/">Signup for the Academy</nuxt-link>
        <nuxt-link to="/">Request training for staff</nuxt-link>
      </div>
      <nuxt-img />
    </section>
    <section>
      <h2>Get a free QA audit</h2>
      <p>
        Get a quality assurance audit done on your website and mobile
        application by our team of expert QA Engineers for free! Take advantage
        of our special offer before it ends.
      </p>
      <nuxt-link to="/"> Get a free QA audit </nuxt-link>
    </section>
    <section>
      <h2>Featured articles</h2>
      <div v-for="item in articleCards">
        <ArticleCard
          :heading="item.heading"
          :text="item.text"
          :image="item.image"
        />
      </div>
    </section>
    <section>
      <h2>We guarantee the high quality of your product.</h2>
      <p>
        Our integrated solutions ensure your product meets the highest standards
        of quality, and we stand behind our work with a guarantee of
        satisfaction.
      </p>
      <nuxt-link to="/"> Talk to sales </nuxt-link>
      <form>
        <div>
          <label for="headline">Headline</label>
          <input
            type="text"
            name="headline"
            placeholder="Your company"
            disabled
          />
        </div>
        <div>
          <label for="headline">Proficiency</label>
          <select
            type="text"
            name="proficiency"
            id="proficiency"
            placeholder="Your company"
            disabled
          >
          <option value="" disabled>Select..</option>
        </select>
        </div>
        <div>
          <label for="headline">Skills</label>
          <input type="text" placeholder="Search skill" disabled />
        </div>
      </form>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomePage',
  head: {
    title: 'UnbugQA | Home',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'This is Nuxt.js project made in response to an assessment test from UnbugQA for the position of Frontend Developer',
      },
    ],
  },
  data() {
    return {
      articleCards: [
        {
          heading: 'Why You Should Hire a Software QA Engineer',
          text: "If you're a software company, chances are good that you've already considered hiring a quality assurance...",
          image: '/blogImages/img1.svg',
        },
        {
          heading:
            'Building Better Products with Decentralized User Research: A Guide for Teams',
          text: 'User research is a critical component of product development. It enables teams to better understand their...',
          image: '/blogImages/img2.svg',
        },
        {
          heading: 'Best Ways To Learn Software Quality Assurance Engineering',
          text: 'Software Quality Assurance Engineering (SQAE) is a critical process that ensures software products and... ',
          image: '/blogImages/img2.svg',
        },
      ],
    }
  },
})
</script>
