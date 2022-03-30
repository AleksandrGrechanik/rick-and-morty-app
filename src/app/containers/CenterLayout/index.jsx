import './style.css';

export function CenterLayout(props) {
  const { children } = props;
  return (
    <div className="container">
      { children }
    </div>
  )
}
