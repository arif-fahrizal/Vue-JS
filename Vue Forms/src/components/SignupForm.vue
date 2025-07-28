<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      role: 'developer',
      terms: false,
      skills: [],
      tempSkill: '',
      passwordError: null,
    }
  },
  methods: {
    addSkill($event) {
      if($event.key === ',' && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill)
        }
        this.tempSkill = ''
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter(item => {
        return skill !== item
      })
    },
    handleSubmit() {
      // validate password
      this.passwordError = this.password.length > 5 ?
        '' : 'Password must be at least 6 characters long'

      if (!this.passwordError) {
        // make request to database to save user
        console.log('email: ', this.email)
        console.log('password: ', this.password)
        console.log('role: ', this.role)
        console.log('skills: ', this.skills)
        console.log('terms accepted: ', this.terms)
      }
    }
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <label>Email:</label>
    <input type="email" v-model="email" required>

    <label>Password:</label>
    <input type="password" v-model="password" required>
    <div v-if="passwordError" class="error">{{ passwordError }}</div>

    <label>Role:</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <label>Skills (press alt + comma to add):</label>
    <input type="text" v-model="tempSkill" @keyup.alt="addSkill">
    <div v-for="skill in skills" :key="skill" class="pill">
      <span @click="deleteSkill(skill)">{{ skill }}</span>
    </div>

    <div class="terms">
      <input type="checkbox" v-model="terms" required>
      <label>Accept terms and conditions</label>
    </div>

    <div class="submit">
      <button>Create an Account</button>
    </div>
  </form>
</template>

<style>
  form {
    max-width: 420px;
    margin: 30px auto;
    padding: 40px;
    text-align: left;
    border-radius: 10px;
    background: white;
  }
  label {
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    font-weight: bold;
    color: #aaa;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  input, select {
    display: block;
    width: 100%;
    padding: 10px 6px;
    color: #555;
    border: none;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
  }
  input[type="checkbox"] {
    position: relative;
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    top: 2px;
  }
  .pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    font-size: 12px;
    color: #777;
    font-weight: bold;
    letter-spacing: 1px;
    border-radius: 20px;
    background: #eee;
    cursor: pointer;
  }
  button {
    margin-top: 20px;
    padding: 10px 20px;
    color: white;
    border: 0;
    border-radius: 20px;
    background: #0b6dff;
  }
  .submit {
    text-align: center;
  }
  .error {
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
    color: #ff0062;
  }
</style>