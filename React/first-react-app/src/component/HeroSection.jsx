import styles from "./Hero.module.css";
const HeroSection = ({ name, age, department }) => {
  const content = " I am Sunny";
  const sum = 5 + 10;
  const condition = 0;

  return (
    <div>
      <h1 className={styles["my-hero"]}>Sum is {sum}</h1>
      <p className={styles.sunny}> {content} </p>

      {/* tenary operators */}
      {/* using condition operator  */}
      {condition ? (
        <p> This is showing because codition is true</p>
      ) : (
        <p> This is showing because codition is false</p>
      )}

      <div>
        <p>
          my name is {name}, I am from {department} department, I am {age} age
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
