import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchPost() {
  const [searchTitleInput, setSearchTitleInput] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  const handleInputSearch = (e) => {
    setSearchTitleInput(e.target.value);
  };

  const onSubmitSearch = () => {
    setSearchParams({ search: searchTitleInput });
    //console.log(searchParams);
    setSearchTitleInput("");
  };

  return (
    <div className='flex flex-col border border-primary p-[20px] rounded-lg'>
      <input
        type='text'
        placeholder='Search post...'
        className='border-2 px-[16px] py-[8px] rounded-lg mb-[10px]'
        value={searchTitleInput}
        onInput={(e) => handleInputSearch(e)}
      />
      <button
        className='bg-primary text-white rounded-md py-[3px]'
        onClick={() => onSubmitSearch()}>
        Search
      </button>
    </div>
  );
}

export default SearchPost;