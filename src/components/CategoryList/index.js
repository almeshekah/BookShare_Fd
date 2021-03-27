// Components
import CategoryItem from './CategoryItem';
import { useState } from 'react';
import SearchBar from '../SearchBar';
import { useSelector } from 'react-redux';
import Loading from '../Loading';
// Styling
import { ListWrapper } from './styles';

const CategoryList = () => {
	const [query, setQuery] = useState('');
	const categories = useSelector((state) => state.categoryReducer.categories);
	const loading = useSelector((state) => state.categoryReducer.loading);
	if (loading) return <Loading />;

	const categoryList = categories
		.filter((category) =>
			category.name.toLowerCase().includes(query.toLowerCase())
		)
		.map((category) => <CategoryItem category={category} key={category.id} />);

	return (
		<div>
			<SearchBar setQuery={setQuery} />
			<ListWrapper>{categoryList}</ListWrapper>
		</div>
	);
};

export default CategoryList;
