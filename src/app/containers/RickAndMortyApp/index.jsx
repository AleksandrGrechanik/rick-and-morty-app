import './style.css';
import { useCallback, useEffect, useState } from "react";
import {debounce} from "lodash";
import { useSearchParams } from "react-router-dom";
import { CharactersItem } from '../../conponents/CharactersItem/index'
import { FiltersBox } from "../../conponents/FiltersBox/index";
import { useLazyQuery } from "@apollo/react-hooks";
import { Pagination } from '../../conponents/Pagination/index';
import charactersQuery from "../../fetch/GetCharacters";
import HeaderImg from '../../pictures/header-logo.png';
import HeaderTitle from '../../pictures/header-title.png'
import LoaderDancingRick from '../../pictures/loader.gif';


export function RickAndMortyApp() {

  const [searchCharacter, setSearchCharacter] = useSearchParams();


  const [formState, setFormState] = useState({
      page: parseInt(searchCharacter.get('page')) || 1,
      status: searchCharacter.get('status') || '',
      gender: searchCharacter.get('gender') || '',
      species: searchCharacter.get('species') || '',
      type: searchCharacter.get('type') || '',
    }
  )

  function syncQuery(formData) {
    const obj = {...formData};
    for (const key in obj) {
      if (obj[key] === '' || obj[key] == null) {
        delete obj[key];
      }
    }
    setSearchCharacter(obj);
  }

  function pageChange(page) {
    setFormState({...formState, page});
  }





  const [getCharters, {data, loading}] = useLazyQuery(charactersQuery);

  const [allCharacters, setAllCharacters] = useState([]);

  const submitCharacterSearch = useCallback(
    debounce((formState) => {
      syncQuery(formState);

      return getCharters({
        variables: formState,
      })
    }, 800)
  , [])

  useEffect(() => {
      submitCharacterSearch(formState);
  }, [formState])

  useEffect(() => {
    if(!loading) {
      setAllCharacters(data?.characters?.results || []);
    }
  }, [data]);




  return (
    <div className="app-wrapper">
      <div className="header">
        <div className="img-box">
          <img src={HeaderTitle} alt="Логотоп 1"/>
        </div>
        <div className="img-box">
          <img src={HeaderImg} alt="Логотип 2"/>
        </div>
      </div>
      <div>
        <FiltersBox formState={formState} setFormState={setFormState} />
      </div>
      <div className="characters-list__wrapper">
        {loading ? <div className="loader-box"><img src={LoaderDancingRick} alt=""/> <h2 className="loading-title">LOADING...</h2></div> :
          <div>
            <div className="characters-list">{allCharacters.map(item => <CharactersItem key={item.id} item={item}/>)}</div>
            <div>
              <Pagination pageChange={pageChange} data={data?.characters?.info} currentPage={formState.page}/>
            </div>
          </div>}
      </div>

    </div>
  )
}


{/*{loading && <div>Loading</div>}*/}
