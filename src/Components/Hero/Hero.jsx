import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./Hero.module.css";
import Spinner from "../Spinner/Spinner";

const Hero = ({ recetas = [], loading }) => {
  const [receta, setReceta] = useState();

  const navigate = useNavigate();

  var day = new Date().getDay();
  const index = day % recetas.length;
  if (!receta && recetas.length > 0) setReceta(recetas[index]);

  return (
    <section className={styles.container}>
      <article
        className={styles.wrapper + (loading ? ` ${styles.disabled}` : "")}
        onClick={loading ? null : () => navigate(`/receta/${receta?.idMeal}`)}
      >
        {loading ? (
          <Spinner />
        ) : (
          <div className={styles.content}>
            <div className={styles.imgContainer}>
              <picture>
                <img src={receta?.strMealThumb} alt={receta?.strMeal} />
              </picture>
            </div>
            <h1 className={styles.title}>Recipe of the day</h1>
            <h2 className={styles.name}>{receta?.strMeal}</h2>
          </div>
        )}
      </article>
    </section>
  );
};

export default Hero;
