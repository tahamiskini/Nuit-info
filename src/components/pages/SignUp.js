import React from "react";
import "../../App.css";

export default function SignUp() {
  return (
    <div className="sign-up">
      <form className="form">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Gender:
          <select name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" name="phone" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
/*
echo "# taha-voyage-project" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/tahamiskini/taha-voyage-project.git
git push -u origin main
*/