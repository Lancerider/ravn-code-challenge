import style from './errors.module.scss';

const ErrorLoading = () => {
  return (
    <div className={ style.error }>
      Failed to Load Data
    </div>
  );
};

export default ErrorLoading;