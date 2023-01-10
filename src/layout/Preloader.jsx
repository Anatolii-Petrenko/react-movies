import style from './Preloader.module.css';

function Preloader() {
  return (
    <div className={style.ldsRollerContainer}>
      <div className={style.ldsRoller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Preloader;
