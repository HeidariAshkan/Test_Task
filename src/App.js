import React, { useMemo, useState } from 'react';
import Input from './components/Input';
import Select from './components/Select';
import data from './data/data.json';
import Checkbox from './components/Checkbox';
import Star from './components/Star';
import Movie from './components/Movie';
import './App.css';

function App() {

  const [input , setInput] = useState("")
  const [filters , setFilters] = useState({
    rating:[],
    genre:[]
  })
  const [showAutocomplete, setShowAutocomplete] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (dropdownId) => {
    setOpenDropdown(prev => (prev === dropdownId ? null : dropdownId));
  };


  const handleChange = (e,id,key) => {
    e.preventDefault()
    if(e.target.checked){
      setFilters({...filters,[key]:[...filters[key],id]})
    }else{
      setFilters({...filters,[key]:filters[key].filter((item)=>item !== id)})
    }
  }

  const handleInputFocus = () => {
    setShowAutocomplete(true)
  };

  const handleCloseInput = ()=>{
    setShowAutocomplete(false)
  }

  const handleMovieSelect = (movieTitle) => {
    setInput(movieTitle);
    setShowAutocomplete(false);
  };

  

  const movies = useMemo(() => {

    let newdata = data.movies.filter((item) =>
        item?.title?.toLowerCase().includes(input.toLowerCase())
      )
    

    if (filters.genre.length !== 0) {
      newdata = newdata.filter((item) => filters.genre.includes(item.category) | filters.genre.includes('Any genre'))
    }

    if (filters.rating.length !== 0) {
      newdata = newdata.filter((item) => filters.rating.includes(item.rating) | filters.rating.includes('all'));
    }

    return newdata.length !== 0 ? newdata : [];
  }, [input, filters.genre, filters.rating]);

  return (
    <div className=''>
      <div className='flex gap-3 sm:flex-row flex-col-reverse'>
        <div className='lg:w-2/5 md:w-2/4 flex flex-col gap-1'>
          <Input onClose={handleCloseInput} onFocus={handleInputFocus} type='text' placeholder='Enter movie name' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
          <div className={`flex flex-col gap-2 bg-white transition-all overflow-hidden z-10 ${movies.length > 0 && showAutocomplete ? "border border-gray97 px-3 py-4 max-h-screen" : "max-h-0" }`  }>
            {movies?.map((item)=>(
              <div key={item?.id}>
                <Movie onClick={()=>{handleMovieSelect(item.title)}} item={item}/>
              </div>
            ))}
          </div>
        </div>
        <div className='lg:w-1/12 md:w-1/6 '>
          <Select title='Rating' isOpen={openDropdown === 'rating'} onToggle={()=>{handleDropdownToggle('rating')}}>
            <div  className="flex items-center gap-2 cursor-pointer">
                <input className='cursor-pointer' type="checkbox" value={'all'} id='all'  onChange={(e)=>{handleChange(e,'all','rating')}}/>
                <label className='text-medium text-sm cursor-pointer' htmlFor={'all'}>
                  Any rating
                </label>
              </div>
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-2 cursor-pointer">
                <input className='cursor-pointer' type="checkbox" value={i+1} id={i} onChange={(e)=>{handleChange(e,i+1,'rating')}} />
                <label className='cursor-pointer' htmlFor={i}>
                  <Star scale={10} value={i+1} />
                </label>
              </div>
            ))}
          </Select>
        </div>
        <div className='lg:w-1/12 md:w-1/6 '>
          <Select onToggle={()=>{handleDropdownToggle('genre')}} isOpen={openDropdown === 'genre'} title='Genre'>
            {data.categories?.map((item) => (
              <Checkbox checked={filters.genre.find((it)=>it === item.id)} onChange={(e)=>{handleChange(e,item.title,'genre')}} key={item.id} item={item}/>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
}

export default App;