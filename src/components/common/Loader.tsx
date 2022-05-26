import loaderImg from '../../assets/images/loader.gif'
import style from './loader.module.scss'

const { loader, spinner } = style;

const Loader = () => {
  return (
    <div className={ loader }>
      <img
        className={ spinner }
        src={ loaderImg }
        alt="Loader"
      />
      Loading
    </div>
  );
};

export default Loader;