import './style.css';
import BtnClassName from 'classnames';

export function Pagination(props) {
  const {currentPage, data, pageChange} = props;
  const {next, pages, prev} = data || {};

  const nextBtnClass = BtnClassName( {
    pagination__btn: true,
    "no-active__btn": !next,
  })

  const prevBtnClass = BtnClassName( {
    pagination__btn: true,
    "no-active__btn": !prev,
  })



  return (
    <div className="pagination-wrapper">
      <button disabled={!prev} onClick={() => pageChange(prev)} className={prevBtnClass}>
        Prev
      </button>
      <div className="pagination__pages-box">
        <p className="pagination__page-number">
          {currentPage}
        </p>
        <p>-</p>
        <p className="pagination__all-pages">
          {pages||"?"}
        </p>
      </div>
      <button disabled={!next} onClick={() => pageChange(next)} className={nextBtnClass}>
        Next
      </button>
    </div>
  )
}
