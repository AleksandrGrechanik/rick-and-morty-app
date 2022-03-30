import './style.css';

export function FiltersBox(props) {


  const { setFormState, formState } = props;


  function searchStatus(e) {
    let status = e.target.value;
    setFormState({ ...formState, status });
  }

  function searchSpecies(e) {
    let species = e.target.value;
    setFormState({ ...formState, species });
  }

  function searchGender(e) {
    let gender = e.target.value;
    setFormState({ ...formState, gender});
  }

  function searchType(e) {
    let type = e.target.value;
    setFormState({ ...formState, type });
  }


  return (
    <div className="filter-box">
      <input onChange={searchStatus} value={formState.status} placeholder="Status" className="input-filter" type="text"/>
      <input onChange={searchSpecies} value={formState.species} placeholder="Species" className="input-filter" type="text"/>
      <input onChange={searchGender} value={formState.gender} placeholder="Gender" className="input-filter" type="text"/>
      <input onChange={searchType} value={formState.type} placeholder="Type" className="input-filter" type="text"/>
    </div>
  )
}
